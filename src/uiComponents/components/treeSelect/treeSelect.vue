<template>
  <div class="ui_treeselect">
    <div class="ui_treeselect_content">
      <div class="item">
        <ui-sidebar :item="{ ...item, clickHandle: clickHandle }"></ui-sidebar>
      </div>
      <div class="item">
        <div
          class="item_content"
          v-for="(tab, index) in item.data"
          :key="index"
          v-show="current === index"
        >
          <slot name="content" :item="{ tab, index }"></slot>
        </div>
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
      this.$props.item.changeHandle && this.$props.item.changeHandle(v);
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_treeselect {
  .ui_treeselect_content {
    display: flex;
    .item {
      display: flex;
      flex-direction: column;
      &:last-child {
        flex: 1;
        .item_content {
          background-color: #fff;
        }
      }
    }
  }
}
</style>
