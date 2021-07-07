import Vue from "vue";
import App from "./App.vue";
import UIComponents from "./index";

Vue.use(UIComponents, {
    i18n: "en",
});

const i18n = UIComponents.i18n;

new Vue({
    i18n,
    render: (h) => h(App),
}).$mount("#app");