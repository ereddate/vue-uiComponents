<template>
  <div class="ui_badge">
    <div class="ui_badge_content">
      <span class="tip" v-if="item.badge">{{ item.badge }}</span>
      <slot name="content"></slot>
    </div>
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
.ui_badge {
  .ui_badge_content {
    position: relative;
    .tip {
      position: absolute;
      top: (-10 / @base);
      right: (5 / @base);
      font-size: @miniFont;
      background-color: @red;
      border-radius: @largeRadius;
      min-width: @largeFont;
      height: @largeFont;
      text-align: center;
      color: @white;
    }
  }
}
</style>
