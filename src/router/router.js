import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

//获取原型对象上的push函数
const originalPush = Router.prototype.push;
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

let router = new Router({
    routes: [{
        path: "/home",
        name: "home",
        component: () =>
            import ( /* webpackChunkName: 'home' */ "../views/home.vue"),
        meta: {
            title: "推荐",
        },
    }, ],
});
export default router;