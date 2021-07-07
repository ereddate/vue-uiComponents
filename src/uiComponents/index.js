import uiCard from "./components/card/card";
import uiButton from "./components/button/button";
import uiIcon from "./components/icon/icon";
import locale from "./locale/index";
const components = {
    uiCard,
    uiButton,
    uiIcon,
};
const uiComponents = {
    ...components,
};

let formateKey = function(key) {
    return key.substr(0, 2) + "-" + key.substr(2, key.length - 2).toLowerCase();
};
class UiComponents {
    constructor() {
        this.version = process.env.VERSION;
        this.i18n = locale.i18n;
        //this.options = ops;
        return this;
    }
    install(Vue, options = {}) {
        console.log("options:", options);
        locale.set(options.i18n);

        Object.keys(uiComponents).forEach((key) => {
            Vue.component(formateKey(key), uiComponents[key]);
        });
        Vue.component("remote-script", {
            render: function(createElement) {
                var self = this;
                return createElement("script", {
                    attrs: {
                        type: "text/javascript",
                        src: this.src,
                    },
                    on: {
                        load: function(event) {
                            self.$emit("load", event);
                        },
                        error: function(event) {
                            self.$emit("error", event);
                        },
                        readystatechange: function(event) {
                            if (this.readyState == "complete") {
                                self.$emit("load", event);
                            }
                        },
                    },
                });
            },
            props: {
                src: {
                    type: String,
                    required: true,
                },
            },
        });

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
        let that = this;
        Vue.prototype.$uiComponents = {
            fontSize(v) {
                that.setFontSize(v);
                window.addEventListener("resize", function() {
                    that.setFontSize(v);
                });
            },
        };
    }
    uninstall() {}
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
    }
}

if (typeof window !== "undefined" && window.Vue) {
    let uic = new UiComponents();
    uic.install(window.Vue);
}

export default new UiComponents();