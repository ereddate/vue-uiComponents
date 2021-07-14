import { components } from "./components/index";
import locale from "./locale/index";
import { common } from "./utils/common";
import { done } from "./utils/addModel";

const uiComponents = {
    ...components,
};

class UiComponents {
    constructor() {
        this.version = process.env.VERSION;
        this.i18n = locale.i18n;
        //this.options = ops;
        return this;
    }
    install(Vue, options = {}) {
        this._Vue = Vue;
        console.log("options:", options);
        this.options = this.extend({
                i18n: "zh",
            },
            options
        );
        locale.set(this.options.i18n);

        Object.keys(uiComponents).forEach((key) => {
            Vue.component(common.formateKey(key), uiComponents[key]);
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
        Vue.prototype.$confirm = function(v, enterHandle, cancelHandle) {
            typeof v === "string" && (v = { message: v });
            const alert = new Vue({
                render(h) {
                    return h(components.uiDialog, {
                        props: { item: { type: "default", isShow: true } },
                        scopedSlots: {
                            content: () =>
                                h(components.uiDialogItem, {
                                    props: {
                                        item: {
                                            type: "confirm",
                                            message: v.message,
                                            cancelDialogHandle: function() {
                                                cancelHandle && cancelHandle();
                                                document.body.removeChild(alert.$el);
                                            },
                                            enterDialogHandle: function() {
                                                enterHandle && enterHandle();
                                                document.body.removeChild(alert.$el);
                                            },
                                        },
                                    },
                                }),
                        },
                    });
                },
            }).$mount();
            document.body.appendChild(alert.$el);
        };
        Vue.prototype.$message = function(v, enterHandle) {
            typeof v === "string" && (v = { message: v });
            const alert = new Vue({
                render(h) {
                    return h(components.uiDialog, {
                        props: { item: { type: "default", isShow: true } },
                        scopedSlots: {
                            content: () =>
                                h(components.uiDialogItem, {
                                    props: {
                                        item: {
                                            type: "alert",
                                            message: v.message,
                                            enterDialogHandle: function() {
                                                enterHandle && enterHandle();
                                                document.body.removeChild(alert.$el);
                                            },
                                        },
                                    },
                                }),
                        },
                    });
                },
            }).$mount();
            document.body.appendChild(alert.$el);
        };
        Vue.prototype.$uic = function() {
            return {
                i18n(v) {
                    let text = locale.i18n.messages[locale.i18n.locale][v.split(".")[1]];
                    return text || v.split(".")[1];
                },
                ...common,
                fontSize(v) {
                    common.setFontSize(v);
                    window.addEventListener("resize", function() {
                        common.setFontSize(v);
                    });
                    return this;
                },
            };
        }.call(Vue);
    }
    uninstall() {}
}

window.extend = (target, args) => {
    target = target || {};
    for (let n in args) {
        common.isArray(target) ?
            target.push({
                [n]: args[n],
            }) :
            (target[n] = args[n]);
    }
    return target;
};
let UIC = new UiComponents();
window.extend(UIC, {
    setFontSize: common.setFontSize,
    extend: window.extend,
});

if (typeof window !== "undefined" && window.Vue) {
    UIC.install(window.Vue);
}

export default UIC;