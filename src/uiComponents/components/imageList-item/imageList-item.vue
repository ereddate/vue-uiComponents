<template>
  <div class="ui_imagelist_item">
    <div class="ui_imagelist_item_content">
      <div class="item" v-if="item.type === 'goods'">
        <ui-link :item="{ url: item.data.url, target: item.data.target }">
          <template #content>
            <ui-image
              :item="{ image: item.data.image, fit: 'contain' }"
            ></ui-image>
            <article>
              <header>
                <h1>{{ item.data.title }}</h1>
                <p>
                  <span>{{ item.data.unit }}</span>
                  <span>{{ item.data.price }}</span>
                </p>
              </header>
              <slot name="content"></slot>
            </article>
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
.ui_imagelist_item {
  .ui_imagelist_item_content {
    background-color: @white;
    border-radius: @baseRadius;
    overflow: hidden;
    article {
      header {
        padding: (5 / @base) @paddingRight (5 / @base) @paddingLeft;
        h1 {
          font-size: @baseFont;
          font-weight: 500;
          padding: 0;
          margin: 0;
          height: (35 / @base);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
        p {
          span {
            color: @red;
            &:first-child {
              font-size: @miniFont;
              margin: 0 (5 / @base) 0 0;
            }
            &:last-child {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
