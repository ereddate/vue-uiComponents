<template>
  <div class="ui_empty">
    <div class="ui_empty_content">
      <ui-icon :item="{ icon: item.icon || 'error' }"></ui-icon>
      <span class="text">{{ item.text || "数据为空" }}</span>
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
.ui_empty {
  .ui_empty_content {
    min-height: (300 / @base);
    .flexCenter;
    flex-direction: column;
    .ui_icon {
      font-size: (120 / @base);
      color: @moreGrey;
    }
    .text {
      margin: @marginTop 0 0;
      font-size: @miniFont;
      color: @moreGrey;
      padding: @paddingAll;
    }
  }
}
</style>
