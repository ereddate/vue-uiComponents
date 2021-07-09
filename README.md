# vue-uiComponents

#### 介绍
基于Vue的UI组件库

#### 软件架构
Vue+Vue-i18n+Less

#### 组件列表
1.  ui-link
2.  ui-banner
3.  ui-button
4.  ui-card
5.  ui-gotop
6.  ui-icon
7.  ui-image
8.  ui-loading
9.  ui-navbar
10. ui-panel
11. ui-timeline
12. ui-timeline-item
13. ui-remote-script
14. ui-input
15. ui-form
16. ui-form-item
17. ui-toast
18. ui-toggle-button
19. ui-list
20. ui-list-item
21. divider


#### 使用说明

拷贝/uiComponents目录到您的项目中，在main.js引用，如下：

```
import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import UIComponents from "./uiComponents/index";

Vue.use(UIComponents, {
    i18n: "en", //语言
});

const i18n = UIComponents.i18n; //语言
new Vue({
    i18n,
    router,
    render: (h) => h(App),
}).$mount("#app");
```

#### 扩展
只需要在components目录创建相应的index.js和组件名.vue文件，并在components根目录的index.js中引入就可以扩展了，如下：
index.js

```
import component from "./component.vue";
export default component;
```
components根目录中的index.js，如下：

```
...
import uiComponent from "./input/index";
...
export const components = {
    ...
    uiComponent,
    ...
}
```
引用时就可以<ui-component :item="{argname:argvalue}"></ui-component>,建议按例子插入参数。


#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
