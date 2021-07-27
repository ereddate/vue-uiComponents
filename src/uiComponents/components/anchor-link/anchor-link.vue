<template>
  <div class="ui_anchor_link">
    <div
      class="item"
      v-for="(anchor, index) in item.data"
      :key="index"
      :id="'ink_' + anchor.id"
    >
      <span class="title" @click="goClickHandle" :index="index">{{
        anchor.title
      }}</span>
      <ui-anchor-link
        :item="anchor.children"
        v-if="anchor.children"
      ></ui-anchor-link>
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
  methods: {
    goClickHandle(e) {
      let index = this.$uic.query(e.target).attr("index");
      this.$props.item.clickHandle &&
        this.$props.item.clickHandle(this.$props.item.data[index]);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_anchor_link {
  padding: (8 / @base) 0 (8 / @base) (16 / @base);
  line-height: 1;
  .title {
    padding: (5 / @base) 0;
    .title {
    }
  }
}
</style>
