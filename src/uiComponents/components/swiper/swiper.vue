<template>
  <div
    class="ui_swiper"
    :style="{ width: item.width / 23.44 + 'rem' }"
    @touchstart="touchstartHandle"
    @touchmove="touchmoveHandle"
    @touchend="touchendHandle"
    @touchcancel="touchcancelHandle"
  >
    <div
      class="ui_swiper_content"
      :style="{
        width: (item.width * item.data.length) / 23.44 + 'rem',
        height: item.height / 23.44 + 'rem',
      }"
    >
      <div
        class="content animate__animated animate__infinite no"
        v-for="(swipe, index) in [...item.data, item.data[0]]"
        :key="index"
        :style="{
          width: item.width / 23.44 + 'rem',
          height: item.height / 23.44 + 'rem',
          'animation-duration': (item.speed || defaultSpeed) + 's',
        }"
        :ref="'swipe_' + index"
        :class="
          current + 1 === index
            ? 'animate__fadeOutLeft on'
            : current === index
            ? 'animate__fadeOutLeft on'
            : ''
        "
      >
        <slot name="content" :item="swipe"></slot>
      </div>
    </div>
    <div class="dots">
      <div class="dots_content">
        <div
          class="dot"
          v-for="(dot, index) in [...item.data]"
          :key="index"
          :class="current === index && 'on'"
        ></div>
      </div>
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
      current: -1,
      defaultSpeed: 2,
    };
  },
  created() {
    this.play();
  },
  beforeDestroy() {
    this.timeout && clearTimeout(this.timeout);
  },
  methods: {
    touchmoveHandle() {},
    touchstartHandle() {},
    touchendHandle() {},
    touchcancelHandle() {},
    play() {
      this.scrollTo(this.current + 1);
    },
    scrollTo(n) {
      let that = this;
      if (n >= this.$props.item.data.length) {
        this.current = 0;
        this.timeout && clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          that.play();
        }, (this.$props.item.speed || this.defaultSpeed) * 1000);
        return;
      }
      this.current = n;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        that.play();
      }, (this.$props.item.speed || this.defaultSpeed) * 1000);
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_swiper {
  overflow: hidden;
  position: relative;
  .ui_swiper_content {
    .content {
      float: left;
      &.no {
        display: none;
      }
      &.on {
        display: block;
      }
    }
  }
  .dots {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: (5 / @base);
    left: 0;
    right: 0;
    .dots_content {
      display: block;
      padding: (5 / @base);
      .dot {
        border-radius: (20 / @base);
        width: (15 / @base);
        height: (4.5 / @base);
        overflow: hidden;
        background-color: #cccccc;
        float: left;
        margin: 0 (2.5 / @base);
        display: block;
        &.on {
          background-color: #efefef;
        }
      }
    }
  }
}
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
