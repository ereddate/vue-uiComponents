<template>
  <div class="ui_timeline_item">
    <div class="ui_timeline_item_content">
      <div class="ui_timeline_item_content_item">
        <div class="time">{{ parseTime(item.time) }}</div>
        <div class="task">
          <slot name="task"></slot>
        </div>
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
    parseTime(v) {
      return this.$uic.dateFormate(v, "hh:mm");
    },
  },
};
</script>

<style lang="less">
@import "../../style/common.less";
.ui_timeline_item {
  .ui_timeline_item_content {
    padding: (13 / @base) 0 0;
    .ui_timeline_item_content_item {
      display: flex;
      .time {
        font-size: @miniFont;
        width: (40 / @base);
        margin: -(8 / @base) 0 0;
        text-align: center;
      }
      .task {
        font-size: @miniFont;
        flex: 1;
        border-top: (1 / @base) @lightGrey dashed;
        min-height: (60 / @base);
        padding: (5 / @base);
        margin: 0 0 0 (5 / @base);
      }
    }
  }
}
</style>
