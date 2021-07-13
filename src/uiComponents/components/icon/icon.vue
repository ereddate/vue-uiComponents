<template>
  <i
    class="ui_icon iconfont"
    :class="'icon-' + item.icon"
    :style="item.style"
  ></i>
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
@import url("../../static/fonts/iconfont.css");
.ui_icon {
  vertical-align: middle;
  display: inline-block;
  &.iconfont {
    transition: transform 0.3s;
  }
}
</style>
