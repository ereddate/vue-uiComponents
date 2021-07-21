<template>
  <ui-animate :item="{ type: 'fadeIn', speed: 1 }" v-if="isShow">
    <template #content>
      <div class="ui_toast" :class="item.position" id="toast">
        {{ message }}
      </div>
    </template>
  </ui-animate>
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
      message: "",
      isShow: false,
    };
  },
  created() {
    this.isShow = this.$props.item.isShow;
    this.message = this.$props.item.message;
  },
  watch: {
    "$props.item.isShow"(v) {
      this.isShow = v;
    },
    "$props.item.message"(v) {
      this.message = v;
    },
  },
  methods: {
    destroy() {
      let that = this;
      setTimeout(() => {
        that.isShow = false;
      }, 1500);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_toast {
  position: fixed;
  top: 20%;
  padding: (8 / @base) @miniFont;
  max-width: 70%;
  min-width: (96 / @base);
  left: 50%;
  text-align: center;
  border-radius: @baseRadius;
  background-color: rgba(0, 0, 0, 0.7);
  color: @white;
  font-size: @baseFont;
  transform: translate3d(-50%, -50%, 0);
  &.bottom {
    top: auto;
    bottom: 20%;
  }
}
</style>
