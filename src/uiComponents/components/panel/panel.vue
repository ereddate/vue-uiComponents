<template>
  <div class="ui_panel" :style="{ ...item.style }" :class="item.class">
    <h1 v-if="item.title">{{ item.title }}</h1>
    <div class="ui_panel_content">
      <slot name="content"></slot>
    </div>
    <ui-overlay v-if="item.loading">
      <template #content>
        <ui-loading :item="{ type: 'default' }"></ui-loading>
      </template>
    </ui-overlay>
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
  created() {},
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_panel {
  position: relative;
  h1 {
    padding: 0 @paddingRight 0 @paddingLeft;
    margin: @marginTop 0;
    font-size: @baseFont;
    font-weight: 400;
  }
  .ui_panel_content {
  }
}
</style>
