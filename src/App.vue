<template>
  <div id="app">
    <span @click="clickHandle">click Test</span>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$uic.fontSize(16);
    this.$toast("test").destroy();
  },
  methods: {
    changeHandle(v) {
      let type = this.uiToggleButton.buttons[v].title.toLowerCase();
      this.uiList.type = type;
      this.uiList.header.title = "type: " + type;
    },
    submitHandle(v) {
      console.log(v);
      this.$toast(v).destroy();
    },
    clickHandle() {
      let that = this;
      this.$addModel(
        Promise.resolve({
          data: {
            router: [
              {
                path: "/testA",
                name: "testA",
                component: {
                  path: "http://172.29.153.79:8080/test/test.js",
                  name: "testA",
                },
                meta: {
                  title: "testA",
                },
              },
            ],
          },
        })
      )
        .then(() => {
          that.$router.push("/testA");
        })
        .catch((v) => {
          console.log(v);
        });
      //this.$router.push("/testA");
    },
    enterHandle(e, v) {
      console.log(e, v);
    },
  },
};
</script>
<style lang="less">
body {
  padding: 0;
  margin: 0;
  background-color: #efefef;
  .ui_card {
    .handle {
      font-size: 12px;
    }
    .content_image {
      display: block;
      width: 50%;
      height: 100%;
      float: left;
    }
  }
  .loading_back {
    padding: 10px;
  }
}
</style>
