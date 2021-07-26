<template>
  <div class="ui_imageview" v-if="isShow">
    <ui-swiper
      :item="{
        width: screenWidth,
        height: screenHeight,
        autoPlay: false,
        loop: true,
        speed: 2,
        data: item.data,
      }"
    >
      <template #content="{ item }">
        <ui-image :item="{ ...item, fit: 'contain' }"></ui-image>
      </template>
    </ui-swiper>
    <span class="close" @click="closeHandle">
      <ui-icon :item="{ icon: 'close' }"></ui-icon>
    </span>
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
    return { isShow: false };
  },
  created() {
    this.isShow = this.$props.item.isShow;
  },
  watch: {
    "$props.item.isShow"(v) {
      this.isShow = v;
    },
  },
  mounted() {
    this.screenWidth = screen.width;
    this.screenHeight = screen.height;
    this.$uic.query("html").addClass("dialog");
  },
  methods: {
    closeHandle() {
      this.$props.item.closeHandle
        ? (this.$uic.query("html").removeClass("dialog"),
          this.$props.item.closeHandle())
        : this.$uic.query("html").removeClass("dialog"),
        (this.isShow = false);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_imageview {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 99;
  .ui_image {
    background-color: transparent;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    height: (56 / @base);
    width: (56 / @base);
    align-items: center;
    justify-content: center;
    .ui_icon {
      width: (24 / @base);
      height: (24 / @base);
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: @white;
    }
  }
}
</style>
