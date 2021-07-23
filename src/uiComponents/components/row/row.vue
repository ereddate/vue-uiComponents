<template>
  <div
    class="ui_row"
    :class="item.type === 'flex' && 'flex'"
    :style="{
      ...item.style,
      'justify-content': item.justify || 'normal',
      'align-items': item.itemAlign || 'normal',
      'align-content': item.contentAlign || 'normal',
    }"
  >
    <slot name="content"></slot>
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
    return { name: "row" };
  },
  mounted() {},
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_row {
  &.flex {
    display: flex;
  }
  display: block;
}
</style>
