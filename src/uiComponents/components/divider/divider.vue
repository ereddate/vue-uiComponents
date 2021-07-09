<template>
  <div class="ui_divider" :class="item.type || 'horizontal'">
    <div class="ui_divider_content" v-if="!item.type">
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
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_divider {
  font-size: (14 / @base);
  line-height: 1.5;
  color: #515a6e;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #e8eaec;
  display: flex;
  justify-content: center;
  align-items: center;
  &.vertical {
    margin: 0 (8 / @base);
    display: inline-block;
    height: (10 / @base);
    width: (1 / @base);
    vertical-align: middle;
    position: relative;
    top: -(0.6 / @base);
  }
  &.horizontal {
    height: (1 / @base);
    width: 100%;
    min-width: 100%;
    margin: (24 / @base) 0;
    clear: both;
  }
  .ui_divider_content {
    background-color: #ffffff;
    padding: (10 / @base);
  }
}
</style>
