<template>
  <div
    class="ui_col"
    :class="item.type === 'flex' ? 'flex' : isCol ? 'flex_col' : ''"
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
    return { name: "col", isCol: false };
  },
  mounted() {
    if (this.$parent.name === "row") {
      this.isCol = true;
    }
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_col {
  &.flex {
    display: flex;
  }
  &.flex_col {
    flex: 1;
  }
  display: block;
}
</style>
