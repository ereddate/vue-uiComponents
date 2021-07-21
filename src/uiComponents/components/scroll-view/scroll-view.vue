<template>
  <div class="ui_scroll_view">
    <div
      class="ui_scroll_view_content"
      :class="item.flex"
      :style="{
        height: item.height ? item.height / 23.44 + 'rem' : 'auto',
        width: item.width ? item.width / 23.44 + 'rem' : 'auto',
      }"
      ref="ui_scroll_view"
    >
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
  mounted() {
    if (this.$props.item.scrollTo) {
      let v = this.$props.item.scrollTo,
        args = this.$props.item.flex === "row" ? [v, 1] : [1, v];
      this.scrollTo.apply(this, args);
    }
    this.$refs["ui_scroll_view"].addEventListener("scroll", this.scrollHandle);
  },
  watch: {
    "$props.item.scrollTo"(v) {
      let args = this.$props.item.flex === "row" ? [v, 1] : [1, v];
      this.scrollTo.apply(this, args);
    },
  },
  beforeDestroy() {
    this.timeout && clearTimeout(this.timeout);
  },
  methods: {
    scrollTo(x, y) {
      this.$refs["ui_scroll_view"].scrollTo(x, y);
    },
    scrollHandle(e) {
      //console.log(e);
      let that = this;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        let target = e.target;
        if (that.$props.item.height && that.$props.item.flex === "column") {
          //console.log("top:", that.scrollTop);
          if (
            target.scrollHeight <=
            target.scrollTop +
              that.$props.item.height +
              (that.$props.item.lowerThreshold || 50)
          ) {
            that.$props.item.scrolltolower &&
              that.$props.item.scrolltolower({
                ...that.$props.item,
                target: target,
                scrollTop: target.scrollTop,
                height: target.scrollHeight,
                handle: "scrolltolower",
              });
          } else if (
            target.scrollTop - (that.$props.item.upperThreshold || 50) <=
            0
          ) {
            that.$props.item.scrolltoupper &&
              that.$props.item.scrolltoupper({
                ...that.$props.item,
                target: target,
                scrollTop: target.scrollTop,
                height: target.scrollHeight,
                handle: "scrolltoupper",
              });
          } else {
            that.$props.item.scroll &&
              that.$props.item.scroll({
                ...that.$props.item,
                target: target,
                scrollTop: target.scrollTop,
                height: target.scrollHeight,
                handle: "scroll",
              });
          }
        } else if (that.$props.item.width && that.$props.item.flex === "row") {
          //console.log("left:", that.scrollLeft);
          if (
            target.scrollWidth <=
            target.scrollLeft +
              that.$props.item.width +
              (that.$props.item.lowerThreshold || 50)
          ) {
            that.$props.item.scrolltolower &&
              that.$props.item.scrolltolower({
                ...that.$props.item,
                target: target,
                scrollLeft: target.scrollLeft,
                width: target.scrollWidth,
                handle: "scrolltolower",
              });
          } else if (
            target.scrollLeft - (that.$props.item.upperThreshold || 50) <=
            0
          ) {
            that.$props.item.scrolltoupper &&
              that.$props.item.scrolltoupper({
                ...that.$props.item,
                target: target,
                scrollLeft: target.scrollLeft,
                width: target.scrollWidth,
                handle: "scrolltoupper",
              });
          } else {
            that.$props.item.scroll &&
              that.$props.item.scroll({
                ...that.$props.item,
                target: target,
                scrollLeft: target.scrollLeft,
                width: target.scrollWidth,
                handle: "scroll",
              });
          }
        }
      }, 500);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_scroll_view {
  .ui_scroll_view_content {
    &.row {
      overflow: scroll;
      overflow-y: hidden;
      height: 100%;
    }
    &.column {
      overflow: scroll;
      overflow-x: hidden;
      width: 100%;
    }
  }
}
</style>
