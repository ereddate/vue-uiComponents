<template>
  <div class="ui_badge">
    <div class="ui_badge_content">
      <span class="tip" v-if="item.badge">{{ item.badge }}</span>
      <slot name="content"></slot>
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
.ui_badge {
  .ui_badge_content {
    position: relative;
    .tip {
      position: absolute;
      top: (-10 / @base);
      right: (5 / @base);
      font-size: (12 / @base);
      background-color: red;
      border-radius: (10 / @base);
      min-width: (16 / @base);
      height: (16 / @base);
      text-align: center;
      color: #fff;
    }
  }
}
</style>
