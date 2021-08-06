<template>
  <div class="ui_startapp">
    <div class="ui_startapp_tip" v-if="!isShow">
      <span class="item" @click.prevent="showHandle">{{
        item.text || "APP打开"
      }}</span>
    </div>
    <div class="ui_startapp_content" :class="isShow ? 'show' : 'hidden'">
      <span class="close" @click.prevent="hideHandle"
        ><ui-icon :item="{ icon: 'close' }"></ui-icon
      ></span>
      <div class="content">
        <slot name="content" :item="{ closeDialog: hideHandle }"></slot>
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
      isShow: false,
    };
  },
  methods: {
    showHandle() {
      this.isShow = true;
      this.$uic.query("html").addClass("dialog");
    },
    hideHandle() {
      this.isShow = false;
      this.$uic.query("html").removeClass("dialog");
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_startapp {
  .ui_startapp_tip {
    position: fixed;
    bottom: (60 / @base);
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    width: (100 / @base);
    border-radius: @largeRadius;
    background-color: @green;
    color: @white;
    font-size: @baseFont;
    padding: @paddingAll;
    text-align: center;
    box-shadow: @easyboxshadow;
    z-index: 98;
  }
  .ui_startapp_content {
    &.show {
      display: block;
    }
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    background-color: @white;
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
    .content {
      padding: 0 (20 / @base) (20 / @base);
      margin: (26 / @base) 0 0;
      font-size: @baseFont;
    }
  }
}
</style>
