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
@base: 23.44rem;
.ui_overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  z-index: 99;
  .back {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .ui_overlay_content {
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: (10 / @base);
    border-radius: (5 / @base);
    background-color: #fff;
  }
}
</style>
