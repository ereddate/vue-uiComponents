<template>
  <div class="ui_picker">
    <div class="ui_picker_tools">
      <div class="item">
        <ui-button
          :item="{ text: '取消', class: 'default', clickHandle: cancelHandle }"
        ></ui-button>
      </div>
      <div class="item">{{ item.title }}</div>
      <div class="item">
        <ui-button
          :item="{ text: '确认', class: 'primary', clickHandle: enterHandle }"
        ></ui-button>
      </div>
    </div>
    <div class="ui_picker_content">
      <ui-picker-column
        :item="{ ...pick, changeHandle: changeHandle, index: index }"
        v-for="(pick, index) in item.data"
        :key="index"
      ></ui-picker-column>
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
      pickers: [],
    };
  },
  methods: {
    enterHandle() {
      for (let i = 0; i < this.$children.length; i++) {
        let item = this.$children[i];
        if (/-picker-column/.test(item.$vnode.tag)) {
          this.pickers[item.selected.pickerid] = item.selected;
        }
      }
      this.$props.item.enterHandle &&
        this.$props.item.enterHandle(this.pickers);
    },
    cancelHandle() {
      this.$props.item.cancelHandle && this.$props.item.cancelHandle();
    },
    changeHandle(v) {
      this.pickers[v.pickerid] = v;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_picker {
  .ui_picker_tools {
    display: flex;
    align-items: center;
    .item {
      flex: 6;
      text-align: center;
      &:first-child {
        flex: 2;
      }
      &:last-child {
        flex: 2;
      }
    }
  }
  .ui_picker_content {
    display: flex;
    padding: (10 / @base);
    .ui_picker_column {
      flex: 1;
    }
  }
}
</style>
