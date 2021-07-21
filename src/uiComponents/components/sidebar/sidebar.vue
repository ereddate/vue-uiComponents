<template>
  <div class="ui_sidebar">
    <div class="ui_sidebar_content">
      <div
        class="item_tab"
        v-for="(tab, index) in item.data"
        :key="index"
        :class="current === index && 'select'"
        @click="clickHandle(index)"
      >
        <ui-badge :item="{ badge: tab.badge }">
          <template #content>
            {{ tab.title }}
          </template>
        </ui-badge>
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
    return {
      current: 0,
    };
  },
  methods: {
    clickHandle(v) {
      this.current = v;
      this.$props.item.clickHandle && this.$props.item.clickHandle(v);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_sidebar {
  .ui_sidebar_content {
    width: (120 / @base);
    background-color: @lightGrey;
    .item_tab {
      padding: @baseFont @miniFont;
      position: relative;
      cursor: pointer;
      &.select {
        background-color: @white;
        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          width: 4px;
          height: 16px;
          background-color: @red;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          content: "";
        }
      }
    }
  }
}
</style>
