<template>
  <div class="ui_dialog" v-if="item.isShow">
    <div
      class="ui_dialog_content animate__animated"
      :class="
        item.type
          ? 'animate__' +
            (item.type === 'top'
              ? 'fadeInDown top'
              : item.type === 'down'
              ? 'fadeInUp down'
              : 'fadeIn')
          : 'default'
      "
      :style="{
        width:
          item.type === 'default'
            ? (item.width || 200) / 23.44 + 'rem'
            : 'auto',
        height: item.height ? item.height / 23.44 + 'rem' : 'auto',
      }"
    >
      <slot name="content" :item="item"></slot>
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
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  .ui_dialog_content {
    background-color: #fff;
    width: (200 / @base);
    min-height: (100 / @base);
    border-radius: (5 / @base);
    &.default {
    }
    &.top {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      border-radius: 0;
      width: auto;
    }
    &.down {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 0;
      width: auto;
    }
  }
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
