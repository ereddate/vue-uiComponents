<template>
  <div class="ui_list_item">
    <div class="ui_list_item_content" :class="item.type">
      <slot name="content" :item="item"></slot>
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
.ui_list_item {
  .ui_list_item_content {
    padding: (8 / @base) @largeFont;
    &.small {
      padding: (4 / @base) (8 / @base);
    }
    &.large {
      padding: @largeFont (32 / @base);
    }
  }
}
</style>
