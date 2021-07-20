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
@base: 23.44rem;
.ui_tag {
  display: flex;
  margin: 0 (5 / @base);
  padding: 0 (5 / @base);
  font-size: (12 / @base);
  &.primary {
    color: #fff;
    background-color: #07c160;
    border: 1px solid #07c160;
    .ui_icon {
      color: #fff;
    }
  }
  &.info {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
    .ui_icon {
      color: #fff;
    }
  }
  &.default {
    color: #323233;
    background-color: #fff;
    border: 1px solid #ebedf0;
    .ui_icon {
      color: #323233;
    }
  }
  &.warning {
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
    .ui_icon {
      color: #fff;
    }
  }
  &.danger {
    color: #fff;
    background-color: #ff976a;
    border: 1px solid #ff976a;
    .ui_icon {
      color: #fff;
    }
  }
  &.default {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
    .ui_icon {
      color: #fff;
    }
  }
  .ui_tag_text {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
  }
  .ui_icon {
    font-size: (12 / @base);
    padding: 0 (5 / @base);
    line-height: (20 / @base);
  }
}
</style>
