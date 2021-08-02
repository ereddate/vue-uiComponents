<template>
  <div class="ui_imagetext_item">
    <div
      class="content"
      :class="item.type === 'left' && 'left'"
      v-if="item.type === 'left'"
    >
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image
              :item="{
                image: item.image,
                fit: 'cover',
                lazyload: item.lazyload || true,
              }"
            ></ui-image>
          </template>
        </ui-link>
      </div>
      <div class="content_item">
        <ui-text-item
          :item="{ title: item.title, desc: item.desc }"
        ></ui-text-item>
      </div>
    </div>
    <div
      class="content"
      :class="item.type === 'right' && 'right'"
      v-if="item.type === 'right'"
    >
      <div class="content_item">
        <ui-text-item
          :item="{ title: item.title, desc: item.desc }"
        ></ui-text-item>
      </div>
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image
              :item="{
                image: item.image,
                fit: 'cover',
                lazyload: item.lazyload || true,
              }"
            ></ui-image>
          </template>
        </ui-link>
      </div>
    </div>
    <div
      class="content"
      :class="item.type === 'top' && 'top'"
      v-if="item.type === 'top'"
    >
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image
              :item="{
                image: item.image,
                fit: 'cover',
                lazyload: item.lazyload || true,
              }"
            ></ui-image>
          </template>
        </ui-link>
      </div>
      <div class="content_item">
        <ui-text-item
          :item="{ title: item.title, desc: item.desc }"
        ></ui-text-item>
      </div>
    </div>
    <div
      class="content"
      :class="item.type === 'bottom' && 'bottom'"
      v-if="item.type === 'bottom'"
    >
      <div class="content_item">
        <ui-text-item
          :item="{ title: item.title, desc: item.desc }"
        ></ui-text-item>
      </div>
      <div class="content_item">
        <ui-link :item="item">
          <template #content>
            <ui-image
              :item="{
                image: item.image,
                fit: 'cover',
                lazyload: item.lazyload || true,
              }"
            ></ui-image>
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
          type: "left",
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
@import "../../style/common.less";
.ui_imagetext_item {
  .content {
    display: flex;
    flex-direction: row;
    &.left {
      .content_item {
        &:last-child {
          flex: 2;
          background-color: @white;
          margin: 0 0 0 @marginLeft;
        }
      }
    }
    &.right {
      .content_item {
        background-color: @white;
        flex: 2;
        &:last-child {
          flex: 1;
          background-color: @white;
          margin: 0 0 0 @marginLeft;
        }
      }
    }
    &.top {
      flex-direction: column;
      .content_item {
        background-color: @white;
        flex: 0;
        &:last-child {
          flex: 0;
          background-color: @white;
          margin: 0;
        }
      }
    }
    &.bottom {
      flex-direction: column;
      .content_item {
        background-color: @white;
        flex: 0;
        &:last-child {
          flex: 0;
          background-color: @white;
          margin: 0;
        }
      }
    }
    .content_item {
      flex: 1;
      background-color: @white;
      min-width: (120 / @base);
      &:last-child {
        flex: 2;
        background-color: @white;
        margin: 0 0 0 @marginLeft;
      }
    }
  }
}
</style>
