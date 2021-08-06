<template>
  <div class="ui_lazyload" ref="lazyload">
    <div class="ui_lazyload_content" v-show="show">
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
    return {
      show: false,
    };
  },
  created() {
    this.$uic
      .query(this.$props.item.container || window)
      .on("scroll", this.scrollHandle);
  },
  methods: {
    scrollHandle() {
      if (this.show) {
        return false;
      }
      let that = this;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        let scrollTop = that.$uic
            .query(that.$props.item.container || window)
            .scrollTop(),
          scrollLeft = that.$uic
            .query(that.$props.item.container || window)
            .scrollLeft(),
          screenRangeTop = scrollTop + screen.height,
          screenRangeLeft = scrollLeft + screen.width,
          top = that.$uic.query(that.$refs["lazyload"]).offset().top,
          left = that.$uic.query(that.$refs["lazyload"]).offset().left;
        if (
          (top > scrollTop && top < screenRangeTop) ||
          (left > scrollLeft && left < screenRangeLeft)
        ) {
          that.show = true;
        }
      }, 500);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_lazyload {
  min-height: (30 / @base);
}
</style>
