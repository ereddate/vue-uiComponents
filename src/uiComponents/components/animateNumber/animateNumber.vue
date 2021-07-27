<template>
  <div class="ui_number_animate" :class="item.type || 'row'">
    <div class="item number" v-for="(num, index) in item.data" :key="index">
      {{ num.value }}
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
  mounted() {
    this.$uic.animateText();
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_number_animate {
  display: flex;
  &.row {
    flex-direction: row;
  }
  &.column {
    flex-direction: column;
  }
  .item {
    .flexCenter;
    flex: 1;
  }
}
</style>
