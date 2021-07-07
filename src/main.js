import Vue from "vue";
import App from "./App.vue";
import UIComponents from "./index";

Vue.use(UIComponents, {});

new Vue({
    render: (h) => h(App),
}).$mount("#app");