<template>
  <div class="ui_imagelist">
    <div class="ui_imagelist_content" v-if="item.data && item.data.length > 0">
      <div class="item" v-for="(cell, index) in item.data" :key="index">
        <div
          class="item_cell"
          v-if="index % 2 != 0"
          :style="{ marginLeft: 2.5 / 23.44 + 'rem' }"
        >
          <slot name="content" :item="cell"></slot>
        </div>
        <div
          class="item_cell"
          v-else
          :style="{ marginRight: 2.5 / 23.44 + 'rem' }"
        >
          <slot name="content" :item="cell"></slot>
        </div>
      </div>
    </div>
    <div class="ui_imagelist_content" v-else>暂无数据</div>
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
@base: 23.44rem;
.ui_imagelist {
  font-size: (14 / @base);
  clear: both;
  .ui_imagelist_content {
    overflow: hidden;
    padding: (5 / @base) (10 / @base);
    .item {
      .item_cell {
        float: left;
        width: 49%;
        overflow: hidden;
        margin-bottom: (5 / @base);
      }
    }
  }
}
</style>
