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
        <span v-if="item.title">{{ item.title }}</span>
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
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_navbar {
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 (2 / @base) (12 / @base) rgba(100, 101, 102, 0.12);
  }
  padding: 0 (10 / @base);
  background-color: #ffffff;
  height: (46 / @base);
  display: flex;
  justify-content: center;
  flex-direction: column;
  .ui_navbar_content {
    display: flex;
    font-size: (14 / @base);
    .item {
      width: 60%;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &:first-child {
        width: 20%;
        text-align: left;
      }
      &:last-child {
        width: 20%;
        text-align: right;
      }
    }
  }
}
</style>
