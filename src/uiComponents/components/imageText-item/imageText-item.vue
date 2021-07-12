<template>
  <div class="ui_imagetext_item">
    <div class="content" :class="item.type === 'left' && 'left'" v-if="item.type === 'left'">
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image :item="{ image: item.image, fit: 'cover' }"></ui-image>
          </template>
        </ui-link>
      </div>
      <div class="content_item">
        <ui-text-item :item="{ title: item.title, desc: item.desc }"></ui-text-item>
      </div>
    </div>
    <div class="content" :class="item.type === 'right' && 'right'" v-if="item.type === 'right'">
      <div class="content_item">
        <ui-text-item :item="{ title: item.title, desc: item.desc }"></ui-text-item>
      </div>
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image :item="{ image: item.image, fit: 'cover' }"></ui-image>
          </template>
        </ui-link>
      </div>
    </div>
    <div class="content" :class="item.type === 'top' && 'top'" v-if="item.type === 'top'">
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image :item="{ image: item.image, fit: 'cover' }"></ui-image>
          </template>
        </ui-link>
      </div>
      <div class="content_item">
        <ui-text-item :item="{ title: item.title, desc: item.desc }"></ui-text-item>
      </div>
    </div>
    <div class="content" :class="item.type === 'bottom' && 'bottom'" v-if="item.type === 'bottom'">
      <div class="content_item">
        <ui-text-item :item="{ title: item.title, desc: item.desc }"></ui-text-item>
      </div>
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image :item="{ image: item.image, fit: 'cover' }"></ui-image>
          </template>
        </ui-link>
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
        return {
          type:"left"
        };
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
    &.left {
      .content_item {
        &:last-child {
          flex: 2;
          background-color: #fff;
          margin: 0 0 0 (10 / @base);
        }
      }
    }
    &.right {
      .content_item {
        background-color: #fff;
        flex: 2;
        &:last-child {
          flex: 1;
          background-color: #fff;
          margin: 0 0 0 (10 / @base);
        }
      }
    }
    &.top {
      flex-direction: column;
      .content_item {
        background-color: #fff;
        flex: 0;
        &:last-child {
          flex: 0;
          background-color: #fff;
          margin: 0;
        }
      }
    }
    &.bottom {
      flex-direction: column;
      .content_item {
        background-color: #fff;
        flex: 0;
        &:last-child {
          flex: 0;
          background-color: #fff;
          margin: 0;
        }
      }
    }
    .content_item {
      flex: 1;
      background-color: #fff;
      min-width: (120 / @base);
      &:last-child {
        flex: 2;
        background-color: #fff;
        margin: 0 0 0 (10 / @base);
      }
    }
  }
}
</style>
