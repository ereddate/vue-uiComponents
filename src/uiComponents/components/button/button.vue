<template>
  <button
    :type="item.type || 'button'"
    class="ui_button"
    @click.prevent="buttonClickHandle"
    :class="(item.class || 'mini') + (item.disabled ? ' disabled' : '')"
    :disabled="item.disabled"
    :data-value="item.data"
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
      this.$props.item.clickHandle &&
        this.$props.item.clickHandle(
          { data: this.$props.item.data, index: this.$props.item.index },
          e
        );
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_button {
  cursor: pointer;
  display: inline-block;
  padding: (5 / @base) @paddingRight (5 / @base) @paddingLeft;
  border-radius: @baseRadius;
  margin: (5 / @base) 0;

  span {
    margin: 0 (2.5 / @base);
  }
  &.primary {
    color: @white;
    background-color: @green;
    border: 1px solid @green;
  }
  &.info {
    color: @white;
    background-color: @blue;
    border: 1px solid @blue;
  }
  &.default {
    color: #323233;
    background-color: @white;
    border: 1px solid @lightGrey;
  }
  &.warning {
    color: @white;
    background-color: @red;
    border: 1px solid @red;
  }
  &.danger {
    color: @white;
    background-color: @yellow;
    border: 1px solid @yellow;
  }
  &.mini {
    color: @lightBlack;
    background-color: @white;
    border: 1px solid @white;
    margin: (2.5 / @base);
    padding: (2.5 / @base) (5 / @base);
  }
  &.disabled {
    color: @grey;
  }
}
</style>
