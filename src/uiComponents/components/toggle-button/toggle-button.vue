<template>
  <div class="ui_toggle_button">
    <div class="ui_toggle_botton_content">
      <div
        class="item"
        v-for="(button, index) in item.buttons"
        :key="index"
        :style="{ width: 100 / item.buttons + '%' }"
        :class="current === index && 'on'"
        @click="buttonClickHandle(index)"
      >
        {{ button.title }}
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
      current: 0,
    };
  },
  methods: {
    buttonClickHandle(index) {
      this.current = index;
      this.$props.item.changeHandle && this.$props.item.changeHandle(index);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_toggle_button {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: (5 / @base) 0;
  clear: both;
  .ui_toggle_botton_content {
    display: flex;
    overflow: hidden;
    border-radius: @baseRadius;
    border: (1 / @base) @lightGrey solid;
    .item {
      min-width: (50 / @base);
      text-align: center;
      padding: (5 / @base) @paddingRight (5 / @base) @paddingLeft;
      font-size: @baseFont;
      background-color: @white;
      color: @lightBlack;
      border-right: (1 / @base) @lightGrey solid;
      &.on {
        background-color: @lightGrey;
        color: @lightBlack;
      }
      &:first-child {
        border-top-left-radius: (5 / @base);
        border-bottom-left-radius: (5 / @base);
      }
      &:last-child {
        border-top-right-radius: (5 / @base);
        border-bottom-right-radius: (5 / @base);
        border: 0;
      }
    }
  }
}
</style>
