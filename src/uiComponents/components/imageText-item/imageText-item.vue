<template>
  <div class="ui_imagetext_item">
    <div class="content">
      <div class="content_item">
        <ui-image :item="{ image: item.image, fit: 'cover' }"></ui-image>
      </div>
      <div class="content_item">
        <ui-text-item
          :item="{ title: item.title, desc: item.desc }"
        ></ui-text-item>
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
@base: 23.44rem;
.ui_imagetext_item {
  .content {
    display: flex;
    flex-direction: row;
    .content_item {
      flex: 1;
      background-color: #999;
      &:last-child {
        flex: 2;
        background-color: #fff;
        margin: 0 0 0 (5 / @base);
      }
    }
  }
}
</style>
