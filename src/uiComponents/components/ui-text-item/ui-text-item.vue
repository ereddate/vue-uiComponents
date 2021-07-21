<template>
  <article class="ui_text_item">
    <header class="title">
      <h1>{{ item.title }}</h1>
    </header>
    <div class="desc">{{ item.desc }}</div>
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
  .title {
    h1 {
      font-size: @baseFont;
      font-weight: 500;
      padding: 0 0 (10 / @base) 0;
      margin: 0;
    }
  }
  .desc {
    font-size: @miniFont;
  }
}
</style>
