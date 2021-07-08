import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import UIComponents from "./uiComponents/index";

Vue.use(UIComponents, {
    i18n: "en",
});

const i18n = UIComponents.i18n;
new Vue({
    i18n,
    router,
    render: (h) => h(App),
}).$mount("#app");