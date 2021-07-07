import Card from "./components/card/card";
const components = {
    Card,
};
const uiComponents = {
    ...components,
};
class UiComponents {
    constructor(ops) {
        this.options = ops;
        return this;
    }
    install(Vue, options) {
        console.log("options:", options);
        Object.keys(uiComponents).forEach((key) => {
            Vue.component(key, uiComponents[key]);
        });
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