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
        Object.keys(uiComponents).forEach((key) => {
            Vue.component(formateKey(key), uiComponents[key]);
        });
        locale.set(options.i18n);
    }
    uninstall() {}
}

if (typeof window !== "undefined" && window.Vue) {
    let uic = new UiComponents();
    uic.install(window.Vue);
}

export default new UiComponents();