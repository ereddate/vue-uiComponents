<template>
  <div class="ui_overlay">
    <div class="back"></div>
    <div class="ui_overlay_content"><slot name="content"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_overlay {
  .absolute;
  .flexCenter;
  z-index: 99;
  .back {
    .absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .ui_overlay_content {
    position: absolute;
    z-index: 2;
    .flexCenter;
    padding: (10 / @base);
    border-radius: @baseRadius;
    background-color: @white;
  }
}
</style>
