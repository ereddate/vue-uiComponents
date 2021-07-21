<template>
  <div class="ui_navbar" :class="item.fixed && 'fixed'">
    <div class="ui_navbar_content">
      <div class="item">
        <ui-button
          :item="{ icon: 'arrow-left-bold', clickHandle: this.leftClickHandle }"
          v-if="item.goback"
        ></ui-button>
        <slot name="left" v-else></slot>
      </div>
      <div class="item">
        <span class="title" v-if="item.title" @click="goTopHandle">{{
          item.title
        }}</span>
        <slot name="center" v-else></slot>
      </div>
      <div class="item">
        <slot name="right"></slot>
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
    return {};
  },
  methods: {
    leftClickHandle(e) {
      this.$props.item.clickHandle
        ? this.$props.item.clickHandle(e)
        : this.$router.back(-1);
    },
    goTopHandle() {
      console.log("center");
      window.scrollTo(1, 1);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_navbar {
  &.fixed {
    .fixedTop;
    z-index: 99;
    box-shadow: 0 (2 / @base) @miniFont rgba(100, 101, 102, 0.12);
  }
  padding: 0 @paddingRight 0 @paddingLeft;
  background-color: @white;
  height: (46 / @base);
  display: flex;
  justify-content: center;
  flex-direction: column;
  .ui_navbar_content {
    display: flex;
    font-size: @baseFont;
    .item {
      width: 60%;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .title {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      }
      &:first-child {
        width: 20%;
        justify-content: left;
        align-items: flex-start;
      }
      &:last-child {
        width: 20%;
        justify-content: right;
        align-items: flex-end;
      }
    }
  }
}
</style>
