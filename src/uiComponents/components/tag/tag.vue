<template>
  <div
    class="ui_tag"
    v-if="isShow"
    :class="item.type || 'default'"
    :style="{ paddingRight: item.close ? 0 : 10 / 23.44 + 'rem' }"
    @click="closeHandle"
  >
    <span class="ui_tag_text">{{ item.text }}</span>
    <ui-icon :item="{ icon: 'close' }" v-if="item.close"></ui-icon>
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
      isShow: true,
    };
  },
  methods: {
    closeHandle() {
      this.isShow = false;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_tag {
  display: flex;
  margin: 0 (5 / @base);
  padding: 0 (5 / @base);
  font-size: @miniFont;
  line-height: (17 / @base);
  &.primary {
    color: @white;
    background-color: @green;
    border: 1px solid @green;
    .ui_icon {
      color: @white;
    }
  }
  &.info {
    color: @white;
    background-color: @blue;
    border: 1px solid @blue;
    .ui_icon {
      color: @white;
    }
  }
  &.default {
    color: #323233;
    background-color: @white;
    border: 1px solid @lightGrey;
    .ui_icon {
      color: #323233;
    }
  }
  &.warning {
    color: @white;
    background-color: @red;
    border: 1px solid @red;
    .ui_icon {
      color: @white;
    }
  }
  &.danger {
    color: @white;
    background-color: @yellow;
    border: 1px solid @yellow;
    .ui_icon {
      color: @white;
    }
  }
  &.default {
    color: @white;
    background-color: @blue;
    border: 1px solid @blue;
    .ui_icon {
      color: @white;
    }
  }
  .ui_tag_text {
    flex: 1;
    text-align: center;
    .flexCenter;
  }
  .ui_icon {
    font-size: @miniFont;
    padding: 0 (5 / @base);
    line-height: (20 / @base);
  }
}
</style>
