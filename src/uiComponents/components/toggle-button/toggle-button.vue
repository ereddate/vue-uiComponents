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
@base: 23.44rem;
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
    border-radius: (5 / @base);
    border: (1 / @base) #efefef solid;
    .item {
      min-width: (50 / @base);
      text-align: center;
      padding: (5 / @base) (10 / @base);
      font-size: (14 / @base);
      background-color: #ffffff;
      color: #333;
      border-right: (1 / @base) #efefef solid;
      &.on {
        background-color: #efefef;
        color: #333;
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
