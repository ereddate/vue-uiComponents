<template>
  <div class="ui_loading">
    <span
      class="ui_loading_spinner"
      style="color: currentcolor; width: 20px; height: 20px"
      v-if="item.type === 'default'"
      ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
      ><i></i><i></i
    ></span>
    <span class="ui_loading_spinner circular" v-if="item.type === 'circle'"
      ><svg viewBox="25 25 50 50" class="ui_loading_circular">
        <circle cx="50" cy="50" r="20" fill="none"></circle></svg
    ></span>
    <span class="text" v-if="item.text">{{ item.text }}</span>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return { type: "default" };
      },
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_loading {
  position: relative;
  color: #c8c9cc;
  font-size: 0;
  vertical-align: middle;
  display: flex;
  .ui_loading_spinner {
    position: relative;
    display: inline-block;
    width: (30 / @base);
    max-width: 100%;
    height: (30 / @base);
    overflow: hidden;
    max-height: 100%;
    vertical-align: middle;
    -webkit-animation: ui-rotate 0.8s linear infinite;
    animation: ui-rotate 0.8s linear infinite;
    animation-timing-function: steps(12);
    flex: 1;
    i {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &::before {
        display: block;
        width: (2 / @base);
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: " ";
      }
    }
    &.circular {
      animation-duration: 2s;
      circle {
        animation: ui-circular 1.5s ease-in-out infinite;
        stroke: currentColor;
        stroke-width: 3;
        stroke-linecap: round;
      }
    }
  }
  .ui_loading_circular {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.text {
  flex: 1;
  font-size: (12 / @base);
  color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.generate-spinner(@n, @i: 1) when (@i =< @n) {
  .ui_loading_spinner i:nth-of-type(@{i}) {
    transform: rotate(@i * 30deg);
    opacity: 1 - (0.75 / 12) * (@i - 1);
  }
  .generate-spinner(@n, (@i + 1));
}
.generate-spinner(12);
@keyframes ui-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes ui-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>
