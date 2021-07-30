<template>
  <div class="ui_tabs_card">
    <ui-card>
      <template #content>
        <div class="ui_tabs_card_content">
          <ui-toggle-button
            :item="{
              buttons: [...item.data],
              type: 'column',
              current: current,
              changeHandle: tabChangeHandle,
            }"
          ></ui-toggle-button>
          <div class="content">
            <div
              class="item"
              v-for="(tabView, index) in item.data"
              :key="index"
              v-show="current === index"
            >
              <slot name="content" :item="tabView"></slot>
            </div>
          </div>
        </div>
      </template>
    </ui-card>
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
    return {
      current: 0,
    };
  },
  methods: {
    tabChangeHandle(v) {
      this.current = v;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_tabs_card {
  padding: (50 / @base) 0 0;
  .ui_toggle_button {
    margin: (-50 / @base) 0 0;
  }

  .ui_card {
    .ui_card_content {
      overflow: visible;
      .ui_tabs_card_content {
        .content {
          padding: @paddingAll;
        }
      }
    }
  }
}
</style>
