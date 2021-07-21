<template>
  <div
    class="ui_swiper"
    :style="{
      width: item.width / 23.44 + 'rem',
      height: item.height / 23.44 + 'rem',
    }"
    ref="swipe"
  >
    <div
      class="ui_swiper_content"
      :style="{
        width: item.width / 23.44 + 'rem',
        height: item.height / 23.44 + 'rem',
      }"
    >
      <div
        clang="scroll_content"
        :style="{
          width: (item.width * item.data.length) / 23.44 + 'rem',
          height: item.height / 23.44 + 'rem',
          transform: 'translateX(-' + (current * item.width) / 23.44 + 'rem)',
          transition: 'transform 1s',
        }"
      >
        <div
          class="content animate__animated"
          v-for="(swipe, index) in [...item.data]"
          :key="index"
          :style="{
            width: item.width / 23.44 + 'rem',
            height: item.height / 23.44 + 'rem',
            'animation-duration': '0.5s',
          }"
          :ref="'swipe_' + index"
        >
          <slot name="content" :item="swipe"></slot>
        </div>
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
      type: "left",
      current: -1,
      defaultSpeed: 3,
      isloading: false,
    };
  },
  created() {
    this.$props.item.autoPlay ? this.play() : (this.current = 0);
  },
  mounted() {
    let that = this;
    this.$uic.swipe(this.$refs["swipe"], {
      callback(e, direction) {
        that.type = direction;
        switch (direction) {
          case "left":
            that.current += 1;
            that.scrollTo(that.current);
            break;
          default:
            that.current =
              that.current - 1 < 0
                ? that.$props.item.loop
                  ? that.$props.item.data.length - 1
                  : 0
                : that.current - 1;
            that.scrollTo(that.current);
            break;
        }
      },
    });
  },
  beforeDestroy() {
    this.timeout && clearTimeout(this.timeout);
  },
  methods: {
    play() {
      this.scrollTo(this.current + 1);
    },
    scrollTo(n) {
      let that = this;
      //this.isloading = true;
      if (n >= this.$props.item.data.length) {
        this.current = this.$props.item.loop
          ? 0
          : this.$props.item.data.length - 1;
      } else {
        this.current = n;
      }
      //console.log(this.$refs["swipe"]);
      //this.$refs["swipe"].scrollLeft = this.current * this.$props.item.width;
      /*       this.playTimeout = setTimeout(() => {
        that.isloading = false;
      }, 1000); */

      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        that.$props.item.autoPlay && that.play();
      }, (this.$props.item.speed || this.defaultSpeed) * 1000);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_swiper {
  position: relative;
  .ui_swiper_content {
    overflow: hidden;
    border-radius: @baseRadius;
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
        width: (10 / @base);
        height: (3.5 / @base);
        overflow: hidden;
        background-color: @moreGrey;
        float: left;
        margin: 0 (2.5 / @base);
        display: block;
        &.on {
          background-color: @lightGrey;
        }
      }
    }
  }
}
@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutLeft {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
