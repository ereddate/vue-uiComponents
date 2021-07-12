import { components } from "./components/index";
import locale from "./locale/index";
import { common } from "./utils/common";
import jQuery from "jquery";
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
import { done } from "./utils/addModel";

const uiComponents = {
    ...components,
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
class UiComponents {
    constructor() {
        this.version = process.env.VERSION;
        this.i18n = locale.i18n;
        //this.options = ops;
        return this;
    }
    install(Vue, options = {}) {
        let that = this;
        console.log("options:", options);
        this.options = this.extend({
                i18n: "zh",
                model: "",
                isDebug: false,
            },
            options
        );
        locale.set(this.options.i18n);
        switch (this.options.model) {
            case "pc":
                {
                    /* webpackChunkName:'model-pc' */
                    let done = () =>
                        import ( /* webpackChunkName:'model-pc' */ "./utils/elementui.js");
                    //done(Vue);
                    done(Vue);
                    break;
                }
            case "h5":
                {
                    /* webpackChunkName:'model-h5' */
                    let done = () =>
                        import ( /* webpackChunkName:'model-h5' */ "./utils/vant.js");
                    //done(Vue);
                    done(Vue);
                    break;
                }
        }
        if (this.options.isDebug) {
            fundebug.apikey =
                "7f5922de836860d898602f63b7303d12a2da8fafde6e746dbb037309e0c8a338";
            fundebugVue(fundebug, Vue);
        }

        Object.keys(uiComponents).forEach((key) => {
            Vue.component(formateKey(key), uiComponents[key]);
        });

        done(Vue, common);

        Vue.prototype.$toast = function(v) {
            const toast = new Vue({
                render(h) {
                    return h(components.uiToast, {
                        props: { item: { message: v, isShow: true, position: "bottom" } },
                    });
                },
            }).$mount();
            document.body.appendChild(toast.$el);
            return {
                destroy() {
                    setTimeout(() => {
                        document.body.removeChild(toast.$el);
                    }, 1500);
                },
            };
        };
        Vue.prototype.$uiComponents = function() {
            return {
                query: jQuery,
                i18n(v) {
                    let text = locale.i18n.messages[locale.i18n.locale][v.split(".")[1]];
                    return text || v.split(".")[1];
                },
                ...common,
                extend: this.extend,
                fontSize(v) {
                    that.setFontSize(v);
                    window.addEventListener("resize", function() {
                        that.setFontSize(v);
                    });
                    return this;
                },
            };
        }.call(Vue);
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
    extend(target, args) {
        target = target || {};
        for (let n in args) {
            common.isArray(target) ?
                target.push({
                    [n]: args[n],
                }) :
                (target[n] = args[n]);
        }
        return target;
    }
}

if (typeof window !== "undefined" && window.Vue) {
    let uic = new UiComponents();
    uic.install(window.Vue);
}

export default new UiComponents();