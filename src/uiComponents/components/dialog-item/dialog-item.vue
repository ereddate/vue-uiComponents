<template>
  <div class="ui_dialog_item">
    <div class="ui_dialog_item_content">
      <article>
        <header>
          <h1>{{ item.title || "提示" }}</h1>
          <p>{{ item.message || "未知信息" }}</p>
        </header>
        <div class="tools">
          <ui-button
            v-if="item.type === 'confirm'"
            :item="{
              text: '取消',
              class: 'default',
              clickHandle: item.cancelDialogHandle,
            }"
          ></ui-button>
          <ui-button
            :item="{
              text: '确认',
              class: 'primary',
              clickHandle: item.enterDialogHandle,
            }"
          ></ui-button>
        </div>
      </article>
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
.ui_dialog_item {
  .ui_dialog_item_content {
    article {
      padding: @paddingTop @paddingRight @paddingBottom @paddingLeft;
      header {
        min-height: (60 / @base);
        display: block;
        h1 {
          font-size: @miniFont;
          font-weight: 500;
          padding: 0;
          margin: 0 0 (5 / @base) 0;
        }
        p {
          padding: @paddingTop 0 (30 / @base) 0;
          margin: 0;
          font-size: @baseFont;
          text-align: center;
        }
      }
      .tools {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        .ui_button {
          flex: 1;
          margin: 0 (2.5 / @base);
        }
      }
    }
  }
}
</style>
