<template>
  <span class="ui_image" ref="uiImage">
    <img
      :src="item.image"
      class="ui_image_back"
      @load="imgLoadHandle"
      v-if="loading && !loaded"
    />
    <ui-loading v-if="loading && !loaded"></ui-loading>
    <img
      :src="item.image"
      :style="{ objectFit: item.fit || '' }"
      v-if="loaded"
    />
    <!-- <span
      :style="{
        backgroundImage: 'url(' + item.image + ')',
        height: item.height ? item.height / 23.44 + 'rem' : '100%',
      }"
      class="ui_image_success"
      v-else
    ></span> -->
  </span>
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
      loaded: false,
      loading: false,
    };
  },
  created() {
    //console.log(this.$props.item);
    if (this.$props.item.lazyload) {
      this.$uic
        .query(this.$props.item.container || window)
        .on("scroll", this.scrollHandle);
    } else {
      this.loading = true;
    }
  },
  methods: {
    scrollHandle() {
      if (this.loaded) {
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
          top = that.$uic.query(that.$refs["uiImage"]).offset().top,
          left = that.$uic.query(that.$refs["uiImage"]).offset().left;
        if (
          (top > scrollTop && top < screenRangeTop) ||
          (left > scrollLeft && left < screenRangeLeft)
        ) {
          that.loading = true;
        }
      }, 500);

      /* console.log(
        this.$uic.query(this.$refs["uiImage"]).offset().top,
        screenRange,
        screen.height
      ); */
    },
    imgLoadHandle() {
      this.loaded = true;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_image {
  .auto;
  .flexCenter;
  background-color: @moreGrey;
  .ui_loading {
    color: @white;
    padding: @paddingAll;
  }
  img {
    .auto;
    &.ui_image_back {
      width: 0;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }
  }
  span {
    &.ui_image_success {
      background-color: @moreGrey;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      .auto;
    }
  }
}
</style>
