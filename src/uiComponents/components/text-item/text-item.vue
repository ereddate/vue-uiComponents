<template>
  <article class="ui_text_item">
    <ui-link>
      <template #content>
        <header class="title">
          <h1>{{ item.title }}</h1>
        </header>
        <div class="desc">{{ item.desc }}</div>
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
@base: 23.44rem;
.ui_text_item {
  display: flex;
  flex-direction: column;
  .title {
    height: (22 / @base);
    overflow: hidden;
    text-overflow: ellipsis;
    margin: (5 / @base) 0 (10 / @base) 0;
    h1 {
      font-size: (14 / @base);
      font-weight: 500;
      padding: 0 0 (10 / @base) 0;
      margin: 0;
    }
  }
  .desc {
    font-size: (12 / @base);
    height: (50 / @base);
    overflow: hidden;
    text-overflow: ellipsis;
    color: #999;
    margin: 0 0 (5 / @base) 0;
  }
}
</style>
