<template>
  <div class="ui_list">
    <div class="ui_list_content">
      <div class="ui_list_content_header" v-if="item.header">
        <span v-if="item.header.title">
          {{ item.header.title }}
        </span>
        <slot v-if="!item.header.title" :item="item.header"></slot>
      </div>
      <slot name="content" :item="item"></slot>
      <div class="ui_list_content_footer" v-if="item.footer">
        <span v-if="item.footer.title">
          {{ item.footer.title }}
        </span>
        <slot v-if="!item.footer.title" :item="item.footer"></slot>
      </div>
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
.ui_list {
  .ui_list_content {
    font-size: @baseFont;
    .ui_list_content_header {
      padding: @paddingTop 0 @paddingBottom 0;
      border-bottom: (1 / @base) @lightGrey solid;
    }
    .ui_list_content_footer {
      padding: @paddingTop 0 @paddingBottom 0;
      border-top: (1 / @base) @lightGrey solid;
    }
  }
}
</style>
