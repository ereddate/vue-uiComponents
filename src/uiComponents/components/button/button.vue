<template>
  <button
    :type="item.type || 'button'"
    class="ui_button"
    @click="buttonClickHandle"
    :class="(item.class || 'mini') + (item.disabled ? ' disabled' : '')"
    :disabled="item.disabled"
  >
    <ui-icon :item="{ icon: item.icon }" v-if="item.icon"></ui-icon>
    <span v-if="item.text">{{ i18n("lang." + item.text) }}</span>
  </button>
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
    i18n(v) {
      return this.$uic.i18n(v);
    },
    buttonClickHandle(e) {
      this.$props.item.clickHandle && this.$props.item.clickHandle(e);
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_button {
  cursor: pointer;
  display: inline-block;
  padding: (5 / @base) (10 / @base);
  border-radius: (5 / @base);
  margin: (5 / @base) 0;

  span {
    margin: 0 (2.5 / @base);
  }
  &.primary {
    color: #fff;
    background-color: #07c160;
    border: 1px solid #07c160;
  }
  &.info {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
  }
  &.default {
    color: #323233;
    background-color: #fff;
    border: 1px solid #ebedf0;
  }
  &.warning {
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }
  &.danger {
    color: #fff;
    background-color: #ff976a;
    border: 1px solid #ff976a;
  }
  &.mini {
    color: #333;
    background-color: #fff;
    border: 1px solid #fff;
    margin: (2.5 / @base);
    padding: (2.5 / @base) (5 / @base);
  }
  &.disabled {
    color: #999;
  }
}
</style>
