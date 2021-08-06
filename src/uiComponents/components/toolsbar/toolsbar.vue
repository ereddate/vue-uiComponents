<template>
  <div class="ui_tools_bar">
    <div class="ui_tools_bar_content"><slot name="content"></slot></div>
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
.ui_tools_bar {
  background-color: @white;
  box-shadow: @easyboxshadow;
  padding: 0;
  .ui_tools_bar_content {
    display: flex;
  }
}
</style>
