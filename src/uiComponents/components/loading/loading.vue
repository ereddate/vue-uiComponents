<template>
  <div class="ui_loading">
    <span
      class="ui_loading_spinner"
      style="color: currentcolor; width: 20px; height: 20px"
      ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
      ><i></i><i></i
    ></span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.ui_loading {
  position: relative;
  color: #c8c9cc;
  font-size: 0;
  vertical-align: middle;
  display: inline-block;
  .ui_loading_spinner {
    position: relative;
    display: inline-block;
    width: 30px;
    max-width: 100%;
    height: 30px;
    max-height: 100%;
    vertical-align: middle;
    -webkit-animation: ui-rotate 0.8s linear infinite;
    animation: ui-rotate 0.8s linear infinite;
    animation-timing-function: steps(12);
    i {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &::before {
        display: block;
        width: 2px;
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: " ";
      }
    }
  }
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
</style>
