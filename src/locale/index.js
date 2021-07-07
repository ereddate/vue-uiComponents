import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: window.localStorage.getItem("locale") || "zh",
    messages: {
        zh: require("./lang/zh-CN.js"),
        en: require("./lang/en-US.js"),
    },
    silentTranslationWarn: true,
});

i18n.set = function(v) {
    i18n.locale = v;
    window.localStorage.setItem("locale", v);
};

export default {
    i18n,
    set: function(v) {
        i18n.set(v);
    },
};