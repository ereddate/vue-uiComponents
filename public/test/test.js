window.define(
    "testA", [
        "http://172.29.153.79:8080/test/depend.js",
        "http://172.29.153.79:8080/test/dependA.js",
    ],
    function(Vue) {
        let Depend = window.$getComponent("testB", Vue),
            DependA = window.$getComponent("testC", Vue);
        return {
            name: "testA",
            component: Vue.component("testA", {
                template: `<div class="test">
                <div class="test_content" @click="testClickHandle()">{{title}}</div>
                <Depend :item="{a:2}"></Depend>
                <DependA :item="{a:3}"></DependA>
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
                components: {
                    Depend: Depend.component,
                    DependA: DependA.component,
                },
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
                        title: "test",
                    };
                },
                created() {
                    console.log("created!");
                    this.$on("testClickHandle", this.testClickHandle);
                },
                methods: {
                    testClickHandle(v) {
                        this.$testA
                            .getTestData({ name: v || 1 })
                            /*  .dispatch("getTestData", { name: 1 }) */
                            .then((v) => {
                                console.log(v);
                            })
                            .catch((v) => {
                                console.log(v);
                            });
                        console.log("click");
                    },
                },
            }),
            store: {
                data() {
                    return {
                        state: {},
                        actions: {
                            getTestData(store, json) {
                                console.log(store, json);
                                return new Promise((resolve, reject) => {
                                    try {
                                        resolve(json.name);
                                    } catch (e) {
                                        reject(2);
                                    }
                                });
                            },
                        },
                        mutations: {},
                    };
                },
                mixin() {
                    return {
                        getTestData(json) {
                            return this.store.dispatch("getTestData", json);
                        },
                    };
                },
            },
        };
    }
);