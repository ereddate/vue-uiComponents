<template>
  <div class="ui_form_item">
    <label
      :for="(item.name && item.name + '_id') || 'ui-input'"
      v-if="item.title"
    >
      {{ item.title }}
    </label>
    <div class="ui_form_item_content">
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
.ui_form_item {
  margin: (5 / @base) 0;
  display: flex;
  label {
    line-height: (36 / @base);
    color: @moreGrey;
    padding: 0 @paddingRight 0 (5 / @base);
    min-width: (50 / @base);
  }
  .ui_radio,
  .ui_checkbox,
  .ui_switch {
    label {
      color: @black;
    }
  }
  .ui_form_item_content {
    flex: 1;
  }
}
</style>
