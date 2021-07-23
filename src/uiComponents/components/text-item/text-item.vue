<template>
  <article class="ui_text_item" :class="item.type">
    <ui-link>
      <template #content>
        <header class="title">
          <h1>{{ item.title }}</h1>
        </header>
        <div class="desc" v-if="item.desc">{{ item.desc }}</div>
      </template>
    </ui-link>
    <slot name="content"></slot>
  </article>
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
.ui_text_item {
  display: flex;
  flex-direction: column;
  &.mini {
    .title {
      height: auto;
      margin: 0 0 (5 / @base) 0;
      h1 {
        font-size: @miniFont;
      }
    }
    .desc {
      height: auto;
      margin: 0;
    }
  }
  .title {
    height: (22 / @base);
    overflow: hidden;
    text-overflow: ellipsis;
    margin: (5 / @base) 0 (5 / @base) 0;
    h1 {
      font-size: @baseFont;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }
  }
  .desc {
    font-size: @miniFont;
    height: (46 / @base);
    overflow: hidden;
    text-overflow: ellipsis;
    color: @grey;
    margin: 0 0 @marginBottom 0;
    line-height: @largeFont;
  }
}
</style>
