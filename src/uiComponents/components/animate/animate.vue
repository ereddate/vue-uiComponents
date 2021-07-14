<template>
  <div
    class="ui_animate animate__animated"
    :class="isStart && 'animate__' + item.type"
    :style="{ 'animation-duration': (item.speed || 1) + 's' }"
  >
    <slot name="content"></slot>
  </div>
</template>
<script>
import "../../static/css/animate.css";
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
      isStart: true,
    };
  },
  mounted() {
    this.destroy();
  },
  destroyed() {
    this.timeout && clearTimeout(this.timeout);
  },
  methods: {
    destroy() {
      let that = this;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        that.isStart = false;
      }, (this.$props.item.speed || 1) * 1000);
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_animate {
}
</style>
