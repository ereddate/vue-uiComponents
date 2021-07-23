# vue-uiComponents

#### 介绍
基于Vue的UI组件库

#### 软件架构
Vue+Vue-i18n+Less+animate.css

#### 使用说明

拷贝/uiComponents目录到您的项目中，在main.js引用，如下：

1.全局引入
```
import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import UIComponents from "./uiComponents/index";

Vue.use(UIComponents, {
    i18n: "zh", //语言
    key: "ui",  //标签自定义前缀，如果是‘sk’,引入组件时就是‘<sk-video></sk-video>’
});

const i18n = UIComponents.i18n; //语言
new Vue({
    i18n,
    router,
    render: (h) => h(App),
}).$mount("#app");
```
2.按需引入
```
    ...
    <uiForm :item="{...}"></uiForm>
  </div>
</template>
<script>
import UIComponents from "../uiComponents/index";
export default {
  components: {
    uiForm: UIComponents.components.uiForm,
  },
  data() {
    ...
  },
  ...
```
3.全局样式

```
扩展组件时，每个组件的公共样式如下：
\uiComponents\style\common.less

引用：
@import "../../style/common.less";
color:@red;
```


注：DEMO在/src/views/home.vue中

#### 扩展
只需要在components目录创建相应组件的目录，并在其目录下创建的index.js和组件名.vue文件，同时在components根目录的index.js中引入就可以扩展了，如下：
组件目录下的index.js及相应的.vue文件

```
import component from "./component.vue";
export default component;
```
components根目录中的index.js，如下：

```
...
import uiComponent from "./组件同名目录/index";
...
export const components = {
    ...
    uiComponent,
    ...
}
```
命名要十分注意

```
如uiComponent，标签是<ui-component></ui-component>，uiComponentItem，就是<ui-component-item></ui-component-item>
```

引用时如下面的写法就可以使用了,建议按例子插入参数。

```
<ui-component :item="{name:value}">
    <template #content="{item}">
        {{item.name}}
        ...
    </template>
 </ui-component>
```

注：slot的名称统一命名“content”，父子级传值统一命名“item”，并且类型是Object

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
21. ui-divider
22. ui-animate
23. ui-image-text-item
24. ui-text-item
25. ui-scroll-view
26. ui-collapse
27. ui-collapse-group
28. ui-swiper
29. ui-dialog
30. ui-dialog-item
31. ui-image-list
32. ui-image-list-item
33. ui-picker
34. ui-picker-column
35. ui-stepper
36. ui-action-sheet
37. ui-steps
38. ui-icons-list
39. ui-tabbar
40. ui-navbar-list
41. ui-multip-navbar
42. ui-price-notice
43. ui-tools-bar
44. ui-dropdown-item
45. ui-overlay
46. ui-tab
47. ui-badge
48. ui-countdown
49. ui-cell
50. ui-tag
51. ui-treeselect
52. ui-sidebar
53. ui-avatar
54. ui-textarea
55. ui-more
56. ui-video-item
57. ui-video
58. ui-topic-group
59. ui-crumbs
60. ui-comment
61. ui-row
62. ui-col

```
this.$confirm('message', function(){console.log('enter!')}, function(){console.log('cancel!')});
this.$message('message', function(){console.log('enter!')});
this.$toast('message');
```


#### 功能
1.  this.$addModel 添加路由

```
使用
let that = this;
this.$addModel(Promise.resolve({
        data: {
          router: [
            {...
             component: {
                path: "http://xxx.com/xxx/xxx.js",
                name: "模块名",
             }
            }
          ]
        }
    })
).then(v=>{
    that.$router.push("/")
}).catch(v=>{})
```

路由对应组件
```
window.define("模块名",[依赖],function(Vue){组件体});
模块名和组件名应该一样。

组件体
{
    name:组件名,
    component:Vue.component(组件名, 组件参数),
    store:{
        data(){
            return {
                state:{}, 
                actions:{
                    getData(store, json){
                        return ...
                    }
                }, 
                mutations:{},
                ...
            }
        },
        mixin(){
            return {
                调用actions的方法
                getData(json){
                    return this.store.dispatch("getData", json);
                },
                ...
            }
        }
    }
}

使用
this.$组件名.getData({}).then(v=>{}).catch(v=>{})
```

2.this.$uic
提供了很多可能的方法，如下：

```
setMourn()，isPromise(obj)，isFunction(obj)，isArray(obj)，isEmpty(obj)，isTelphoneCode(obj)，isEmptyObject(obj)，
isPlainObject(obj)，dateFormate(date, "formate")，i18n()，extend({}, {})，fontSize(num)
...
```





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
