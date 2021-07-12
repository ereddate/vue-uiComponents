window.define("testC", [], function(Vue) {
    return {
        name: "testC",
        component: Vue.component("testC", {
            template: `<div class="test">
                <div class="test_content" @click="testClickHandle">{{title}}</div>
                <component is="style">
                    .test{
                        padding:10px;
                    }
                    .test_content{
                        background-color:#efefef;
                        padding:10px;
                        text-align:center;
                    }
                </component>
            </div>`,
            props: {
                item: {
                    type: Object,
                    default () {
                        return {};
                    },
                },
            },
            data() {
                return {
                    title: "test2",
                };
            },
            created() {
                console.log("created!", this.$props.item.a);
            },
            methods: {
                testClickHandle() {
                    this.$parent.$emit("testClickHandle", this.$props.item.a);
                },
            },
        }),
        store: {
            data() {
                return {
                    state: {},
                    actions: {},
                    mutations: {},
                };
            },
            mixin() {
                return {};
            },
        },
    };
});