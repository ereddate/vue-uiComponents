<template>
  <ui-dialog :item="actionSheetData">
    <template #content>
      <div class="ui_action_sheet">
        <div class="ui_action_sheet_content">
          <div class="item header" v-if="actionSheetData.title">
            {{ actionSheetData.title }}
          </div>
          <div
            class="item"
            v-for="(action, index) in actionSheetData.data"
            :key="index"
            @click="actionItemClickHandle(action.value, index)"
          >
            <span :class="action.desc && 'title'">{{ action.text }}</span>
            <span class="desc" v-if="action.desc">{{ action.desc }}</span>
          </div>
          <div class="item cancel" @click="cancelHandle">
            <span>取消</span>
          </div>
        </div>
      </div>
    </template>
  </ui-dialog>
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
      actionSheetData: {},
    };
  },
  created() {
    this.actionSheetData = this.$props.item;
  },
  watch: {
    "$props.item.isShow"(v) {
      this.actionSheetData.isShow = v;
    },
  },
  methods: {
    actionItemClickHandle(value, index) {
      this.$props.item.selectHandle &&
        this.$props.item.selectHandle(value, index);
      this.actionSheetData.isShow = false;
    },
    cancelHandle() {
      this.actionSheetData.isShow = false;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_action_sheet {
  .ui_action_sheet_content {
    background-color: #efefef;
    .item {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      &.header {
        color: #999;
        font-size: (12 / @base);
        text-align: center;
        padding: (15 / @base) 0;
        border-bottom: (1 / @base) #efefef solid;
      }
      span {
        flex: 1;
        font-size: (14 / @base);
        padding: (10 / @base) 0;
        text-align: center;

        &.title {
          padding: (10 / @base) 0 (2 / @base) 0;
        }
        &.desc {
          font-size: (12 / @base);
          color: #ccc;
          padding: 0 0 (10 / @base) 0;
        }
      }
      &.cancel {
        margin: (5 / @base) 0 0;
        padding: (6 / @base) 0;
      }
    }
  }
}
</style>
