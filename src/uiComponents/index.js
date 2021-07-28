import { components } from "./components/index";
import locale from "./locale/index";
import { common } from "./utils/common";
import { done } from "./utils/addModel";
import jquery from "jquery";

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
    this.options = this.extend(
      {
        i18n: "zh",
      },
      options
    );
    locale.set(this.options.i18n);

    Object.keys(uiComponents).forEach((key) => {
      let newKey = common.formateKey(key);
      newKey = newKey.replace(newKey.split("-")[0], options.key || "ui");
      Vue.component(newKey, uiComponents[key]);
    });

    done(Vue, common);

    Vue.prototype.$toast = function (v, options = {}) {
      this.timeout && clearTimeout(this.timeout);
      let node = document.getElementById("toast");
      node && document.body.removeChild(node.parentNode);
      let that = this;
      options = window.extend(
        {
          auto: true,
        },
        options
      );
      this.toast = new Vue({
        render(h) {
          return h(components.uiToast, {
            props: { item: { message: v, isShow: true, position: "bottom" } },
          });
        },
      }).$mount();
      document.body.appendChild(this.toast.$el);
      if (options.auto) {
        that.timeout = setTimeout(() => {
          let node = document.getElementById("toast");
          node && document.body.removeChild(node.parentNode);
        }, 1500);
      }
      return {
        destroy() {
          that.timeout = setTimeout(() => {
            let node = document.getElementById("toast");
            node && document.body.removeChild(node.parentNode);
          }, 1500);
        },
      };
    };
    Vue.prototype.$confirm = function (v, enterHandle, cancelHandle) {
      typeof v === "string" && (v = { message: v });
      let random = (Math.random(1000) + "").replace(/\./gim, "");
      const alert = new Vue({
        render(h) {
          return h(components.uiDialog, {
            props: { item: { type: "default", isShow: true, id: random } },
            scopedSlots: {
              content: () =>
                h(components.uiDialogItem, {
                  props: {
                    item: {
                      type: "confirm",
                      message: v.message,
                      cancelDialogHandle: function () {
                        let dom = document.getElementById(random);
                        document.body.removeChild(dom);
                        let html = document.getElementsByTagName("html")[0];
                        html.className = html.className.replace("dialog", "");
                        cancelHandle && cancelHandle();
                      },
                      enterDialogHandle: function () {
                        let dom = document.getElementById(random);
                        document.body.removeChild(dom);
                        let html = document.getElementsByTagName("html")[0];
                        html.className = html.className.replace("dialog", "");
                        enterHandle && enterHandle();
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
    Vue.prototype.$message = function (v, enterHandle) {
      typeof v === "string" && (v = { message: v });
      let random = (Math.random(1000) + "").replace(/\./gim, "");
      const alert = new Vue({
        render(h) {
          return h(components.uiDialog, {
            props: { item: { type: "default", isShow: true, id: random } },
            scopedSlots: {
              content: () =>
                h(components.uiDialogItem, {
                  props: {
                    item: {
                      type: "alert",
                      message: v.message,
                      enterDialogHandle: function () {
                        let dom = document.getElementById(random);
                        document.body.removeChild(dom);
                        let html = document.getElementsByTagName("html")[0];
                        html.className = html.className.replace("dialog", "");
                        enterHandle && enterHandle();
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
    Vue.prototype.$uic = function () {
      return {
        i18n(v) {
          let text = locale.i18n.messages[locale.i18n.locale][v.split(".")[1]];
          return text || v.split(".")[1];
        },
        ...common,
        query: jquery,
        fontSize(v) {
          common.setFontSize(v);
          window.addEventListener("resize", function () {
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
    common.isArray(target)
      ? target.push({
          [n]: args[n],
        })
      : (target[n] = args[n]);
  }
  return target;
};
let UIC = new UiComponents();
window.extend(UIC, {
  setFontSize: common.setFontSize,
  extend: window.extend,
  components,
});

if (typeof window !== "undefined" && window.Vue) {
  UIC.install(window.Vue);
}

export default UIC;
