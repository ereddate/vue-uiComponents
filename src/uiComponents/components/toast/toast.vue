<template>
  <div class="ui_toast" :class="item.position" v-if="isShow">
    {{ message }}
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
@base: 23.44rem;
.ui_toast {
  position: fixed;
  top: 20%;
  padding: (8 / @base) (12 / @base);
  max-width: 70%;
  min-width: (96 / @base);
  left: 50%;
  text-align: center;
  border-radius: (5 / @base);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: (14 / @base);
  transform: translate3d(-50%, -50%, 0);
  &.bottom {
    top: auto;
    bottom: 20%;
  }
}
</style>
