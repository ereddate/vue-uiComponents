import Vue from "vue";
const hasOwn = {}.hasOwnProperty;
let _instanceOf = (_constructor) => {
    return function(o) {
        return o instanceof _constructor;
    };
};

var easing = {
    quadratic: function(x) {
        return Math.sqrt(x);
    },
};

function range(start, stop, step) {
    var array = [];
    for (var i = start; i < stop; i += step) array.push(i);
    return array;
}

function interpolation(fps, easing, finalValue) {
    function scaleIt(value) {
        return finalValue * value;
    }

    var x = range(0, 1, 1 / fps),
        y = x.map(easing).map(scaleIt);

    return y;
}

function animateEl(values, duration, onAnimate) {
    var frameIndex = 0,
        fps = values.length,
        id = setInterval(anime, duration / fps);

    function anime() {
        var current = values[frameIndex],
            isLastFrame = frameIndex === fps - 1;

        onAnimate(current, frameIndex, values);

        if (isLastFrame) {
            clearInterval(id);
        } else {
            frameIndex++;
        }
    }
}

function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function unformat(content) {
    var unlocalized = content.replace(".", "").replace(",", "."),
        value = parseFloat(unlocalized);
    return value;
}

function format(value) {
    return value.toString().replace(".", ",");
}

function animateText() {
    var fps = 30,
        els = [].slice.call(document.querySelectorAll(".number"));

    els.forEach(function(el) {
        var content = el.firstChild.textContent.trim(),
            decimalPlaces = content.split(",")[1] || "",
            value = unformat(content),
            values = interpolation(fps, easing.quadratic, value);

        animateEl(values, 1000, function(current, i, values) {
            var isLast = i === values.length - 1,
                value = round(current, decimalPlaces.length);
            el.firstChild.textContent = isLast ? content : format(value);
        });
    });
}

Vue.prototype.$broadcast = function(event) {
    // 获取传入事件的类型，判断是否为字符串
    var isSource = typeof event === "string";

    // 校正 event 的值，当接受 event 的类型为字符串时就直接使用，如果不是字符串就使用 event 上的 name 属性
    event = isSource ? event : event.name;

    // if no child has registered for this event,
    // then there's no need to broadcast.
    // 如果当前组件的子组件没有注册该事件，就直接返回，并不用 broadcast
    //console.log(this._events);
    if (this._events && !this._events[event]) return;

    // 获取当前组件的子组件
    var children = this.$children;

    // 将函数接受的参数转换成数组
    var args = Array.prototype.slice.call(arguments);

    // 循环子组件
    for (var i = 0, l = children.length; i < l; i++) {
        var child = children[i];

        // 在每个子组件中调用 $emit 触发事件
        var shouldPropagate = child.$emit.apply(child, args);

        // 判断调用 $emit 返回的值是否为 true
        if (shouldPropagate) {
            // 如果调用 $emit 返回的值为 true，就递归孙子组件继续广播
            child.$broadcast.apply(child, args);
        }
    }

    // 最后返回当前组件的实例
    return this;
};

Vue.prototype.$dispatch = function() {
    //console.log(event);
    // 首先执行 $emit 触发事件，将返回值保存在 shouldPropagate 中
    var shouldPropagate = this.$emit.apply(this, arguments);

    // 如果首次执行的 $emit 方法返回的值不是 true 就直接返回
    // 如果返回值不是 true 就说明组件逻辑不希望事件继续往父组件进行传递
    if (!shouldPropagate) return;

    // 如果首次执行 $emit 方法返回值是 true 就获取当前组件的 parent 组件实例
    var parent = this.$parent;

    // 将函数接受的参数转换成数组
    var args = Array.prototype.slice.call(arguments);

    // use object event to indicate non-source emit on parents
    // 根据传入的事件名称的参数组装成 object
    //args[0] = { name: event, source: this };

    // 循环知道组件的父组件
    while (parent) {
        // 在父组件中执行 $emit 触发事件
        //console.log(event, args);
        shouldPropagate = parent.$emit.apply(parent, args); //parent.$emit.apply(parent, args);

        // 如果父组件 $emit 返回的是 true 就继续递归祖父组件，否则就停止循环
        parent = shouldPropagate ? parent.$parent : null;
    }

    // 最后返回当前组件实例
    return this;
};

let formateKey = function(key) {
    key = key.replace(/[a-zA-Z]/gim, function(a) {
        if (!/[a-z]/.test(a)) {
            a = "-" + a.toLowerCase();
        }
        return a;
    });
    return key; //.substr(0, 2) + "-" + key.substr(2, key.length - 2).toLowerCase();
};
let loadFile = function(ops, index) {
    return new Promise((resolve, reject) => {
        let dom = document.getElementById(ops.name);
        if (dom) {
            resolve(dom);
        } else {
            dom = document.createElement(/\.css/.test(ops.path) ? "link" : "script");
            if (/\.css/.test(ops.path)) {
                dom.rel = "stylesheet";
                dom.href = ops.path;
            } else {
                dom.src = ops.path;
            }
            dom.id = ops.name;
            dom.index = index;
            dom.onload = function() {
                resolve(dom);
            };
            dom.onerror = function() {
                reject();
            };
            let head = document.querySelector("head");
            head.appendChild(dom);
        }
    });
};

const swipe = function(target, options) {
    var browser = {
        addEventListener: !!window.addEventListener,
        /* touch: "ontouchstart" in window ||
                                                                        (window.DocumentTouch && document instanceof DocumentTouch), */
    };
    if (typeof options == "function") {
        options = window.extend({}, {
            callback: options,
        });
    } else {
        options = window.extend({}, options);
    }
    var start = {},
        delta = {},
        end = {};

    function calculateAngle(startPoint, endPoint) {
        var x = startPoint.x - endPoint.x;
        var y = endPoint.y - startPoint.y;
        var r = Math.atan2(y, x);
        var angle = Math.round((r * 180) / Math.PI);
        if (angle < 0) {
            angle = 360 - Math.abs(angle);
        }

        return angle;
    }

    function calculateDirection(startPoint, endPoint) {
        var angle = calculateAngle(startPoint, endPoint);

        if (angle <= 45 && angle >= 0) {
            return "left";
        } else if (angle <= 360 && angle >= 315) {
            return "left";
        } else if (angle >= 135 && angle <= 225) {
            return "right";
        } else if (angle > 45 && angle < 135) {
            return "down";
        } else {
            return "up";
        }
    }

    function init(element) {
        var events = {
            handleEvent: function(event) {
                switch (event.type) {
                    case "touchstart":
                        this.start(event);
                        break;
                    case "touchmove":
                        this.move(event);
                        break;
                    case "touchend":
                        this.end(event);
                        break;
                }
                if (options.stopPropagation) {
                    event.stopPropagation();
                }
            },
            start: function(event) {
                var touches = event.touches[0];
                start = {
                    x: touches.pageX,
                    y: touches.pageY,
                };
                delta = {};
                element.addEventListener("touchmove", this, { passive: true });
                element.addEventListener("touchend", this, false);
            },
            move: function(event) {
                if (event.touches.length > 1 || (event.scale && event.scale !== 1)) {
                    return;
                }
                if (options.disableScroll) {
                    event.preventDefault();
                }
                var touches = event.touches[0];
                end = {
                    x: touches.pageX,
                    y: touches.pageY,
                };
                delta = {
                    x: touches.pageX - start.x,
                    y: touches.pageY - start.y,
                };
            },
            end: function(event) {
                var direction = calculateDirection(start, end);
                var a = 100;
                (delta.x < -a || delta.x > a || delta.y < -a || delta.y > a) &&
                options.callback &&
                    options.callback.call(element, event, direction);
                element.removeEventListener("touchmove", events, { passive: true });
                element.removeEventListener("touchend", events, { passive: false });
            },
        };
        if (browser.addEventListener) {
            //if (browser.touch) {
            element.addEventListener("touchstart", events, { passive: false });
            //}
        }
    }
    init(target);
};
export const common = {
    animateText,
    swipe,
    setFontSize(num) {
        num = num || 16;
        var iWidth = (document.documentElement || document.body).clientWidth,
            iHeight = (document.documentElement || document.body).clientHeight,
            fontSize =
            (window.orientation &&
                (window.orientation === 90 || window.orientation === -90)) ||
            iHeight < iWidth ?
            iHeight / num :
            iWidth / num;
        window.baseFontSize = fontSize;
        document.getElementsByTagName("html")[0].style.fontSize =
            fontSize.toFixed(2) + "px";
        return fontSize;
    },
    formateKey,
    loadFile,
    setMourn() {
        let head = document.querySelector("head"),
            style = document.createElement("style");
        style.innerHTML = `
            .filter {
                -webkit-filter: grayscale(100%); /* webkit */
                -moz-filter: grayscale(100%); /*firefox*/
                -ms-filter: grayscale(100%); /*ie9*/
                -o-filter: grayscale(100%); /*opera*/
                filter: grayscale(100%);
                filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); /*ie*/
                filter: gray; /*ie9- */
            }
        `;
        head.appendChild(style);
        document.body.className += " filter";
        return this;
    },
    isPromise(obj) {
        return (!!obj &&
            (typeof obj === "object" || typeof obj === "function") &&
            typeof obj.then === "function"
        );
    },
    isFunction(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    },
    isArray(obj) {
        return (
            (Array.isArray || _instanceOf(Array))(obj) && typeof obj !== "string"
        );
    },
    isEmpty(v) {
        return typeof v === "string" ?
            v.replace(/^\s+|\s+$/gim, "") === "" :
            this.isArray(v) ?
            v.length === 0 :
            typeof v === "undefined" ||
            v === null ||
            this.isEmptyObject(v) === true;
    },
    isTelphoneCode(v) {
        return /^1[3-9]\d{9}$/.test(v);
    },
    isEmptyObject(obj) {
        for (var name in obj) {
            return false;
        }
        return true;
    },
    isPlainObject(obj) {
        var key;
        if (!obj || typeof obj !== "object" || obj.nodeType) {
            return false;
        }
        try {
            if (
                obj.constructor &&
                !hasOwn.call(obj, "constructor") &&
                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")
            ) {
                return false;
            }
        } catch (e) {
            return false;
        }
        for (key in obj) {
            console.log();
        }
        return key === undefined || hasOwn.call(obj, key);
    },
    dateFormate(d, pattern) {
        d = d ? new Date(d) : new Date();
        pattern = pattern || "yyyy-MM-dd";
        var y = d.getFullYear().toString(),
            o = {
                M: d.getMonth() + 1,
                d: d.getDate(),
                h: d.getHours(),
                m: d.getMinutes(),
                s: d.getSeconds(),
            };
        pattern = pattern.replace(/(y+)/gi, function(a, b) {
            return y.substr(4 - Math.min(4, b.length));
        });
        for (var i in o) {
            pattern = pattern.replace(
                new RegExp("(" + i + "+)", "g"),
                function(a, b) {
                    return o[i] < 10 && b.length > 1 ? "0" + o[i] : o[i];
                }
            );
        }
        return pattern;
    },
};