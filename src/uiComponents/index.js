import { components } from "./components/index";
import locale from "./locale/index";
import { common } from "./utils/common";
import jQuery from "jquery";

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
        console.log("options:", options);
        locale.set(options.i18n);
        Object.keys(uiComponents).forEach((key) => {
            Vue.component(formateKey(key), uiComponents[key]);
        });

        let that = this;
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
}

if (typeof window !== "undefined" && window.Vue) {
    let uic = new UiComponents();
    uic.install(window.Vue);
}

export default new UiComponents();