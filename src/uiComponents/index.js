import { components } from "./components/index";
import locale from "./locale/index";
import { common } from "./utils/common";

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

        let that = this;
        Vue.prototype.$uiComponents = function() {
            return {
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