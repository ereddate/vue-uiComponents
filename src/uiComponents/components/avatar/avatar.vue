<template>
  <div class="ui_avatar">
    <div class="ui_avatar_content" :class="item.type || 'normal'">
      <ui-image
        :item="{
          image: item.image,
          fit: item.fit || 'contain',
          lazyload: item.lazyload || true,
        }"
      ></ui-image>
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
.ui_avatar {
  .ui_avatar_content {
    overflow: hidden;
    &.small {
      width: (32 / @base);
      height: (32 / @base);
      border-radius: @moreRadius;
    }
    &.normal {
      width: (40 / @base);
      height: (40 / @base);
      border-radius: @moreRadius;
    }
    &.large {
      width: (60 / @base);
      height: (60 / @base);
      border-radius: @moreRadius;
    }
  }
}
</style>
