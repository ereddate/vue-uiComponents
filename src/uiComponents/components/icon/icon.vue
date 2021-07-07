<template>
  <i class="iconfont" :class="'icon-' + item.icon"></i>
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
</style>
