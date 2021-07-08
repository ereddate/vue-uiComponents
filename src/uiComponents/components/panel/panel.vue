<template>
  <div class="ui_panel" :style="{ ...item.style }" :class="item.class">
    <div class="ui_panel_content">
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
.ui_panel {
  .ui_panel_content {
  }
}
</style>
