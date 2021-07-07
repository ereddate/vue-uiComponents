import Card from "./components/card/card";
import locale from "./locale/index";
const components = {
    Card,
};
const uiComponents = {
    ...components,
};
class UiComponents {
    constructor(ops) {
        this.version = process.env.VERSION;
        this.i18n = locale.i18n;
        this.options = ops;
        return this;
    }
    install(Vue, options = {}) {
        console.log("options:", options);
        Object.keys(uiComponents).forEach((key) => {
            Vue.component(key, uiComponents[key]);
        });
        locale.set(options.i18n);
    }
    uninstall() {}
}

if (typeof window !== "undefined" && window.Vue) {
    let uic = new UiComponents();
    uic.install(window.Vue);
}

export default (function(ops) {
    return new UiComponents(ops);
})();