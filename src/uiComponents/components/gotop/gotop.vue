<template>
  <div
    class="ui_gotop"
    v-if="isTopShow"
    @click="gotopClickHandle"
    :style="{ bottom: 140 / 23.44 + 'rem' }"
  >
    <ui-icon :item="{ icon: 'arrow-up-bold' }"></ui-icon>
  </div>
</template>
<script>
export default {
  name: "gotop",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isTopShow: false,
    };
  },
  mounted() {
    let that = this;
    that.isTopShow = that.$props.isShow;
    window.addEventListener("scroll", () => {
      var top =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      if (top > 300) {
        that.isTopShow = true;
      } else {
        that.isTopShow = false;
      }
    });
  },
  methods: {
    gotopClickHandle() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_gotop {
  position: fixed;
  bottom: (140 / @base);
  right: (30 / @base);
  border-radius: (26 / @base);
  background-color: rgba(255, 255, 255, 0.8);
  width: (26 / @base);
  height: (26 / @base);
  line-height: (20 / @base);
  padding: (5 / @base);
  font-size: (26 / @base);
  box-shadow: 0 (2 / @base) @miniFont rgba(100, 101, 102, 0.12);
  text-align: center;
  z-index: 99;
}
</style>
