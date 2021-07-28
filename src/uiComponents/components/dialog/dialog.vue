<template>
  <div class="ui_dialog" v-if="item.isShow" :id="item.id">
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
            ? (item.width || 260) / 23.44 + 'rem'
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
  created() {
    this.$uic.query("html").addClass("dialog");
  },
  watch: {
    "$props.item.isShow"(v) {
      v
        ? this.$uic.query("html").addClass("dialog")
        : this.$uic.query("html").removeClass("dialog");
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_dialog {
  .fixedAll;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  .flexCenter;
  .ui_dialog_content {
    background-color: @white;
    width: (260 / @base);
    min-height: (100 / @base);
    border-radius: @baseRadius;
    &.default {
    }
    &.top {
      .absoluteTop;
      border-radius: 0;
      width: auto;
    }
    &.down {
      .absoluteBottom;
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
