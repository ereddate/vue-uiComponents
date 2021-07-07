const hasOwn = {}.hasOwnProperty;
let _instanceOf = (_constructor) => {
    return function(o) {
        return o instanceof _constructor;
    };
};
export const common = {
    extend(t, p) {
        t = t || {};
        for (let n in p) t[n] = p[n];
        return t;
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
        return typeof v === "string" && v.replace(/^\s+|\s+$/gim, "") === "";
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
        for (key in obj) {}
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