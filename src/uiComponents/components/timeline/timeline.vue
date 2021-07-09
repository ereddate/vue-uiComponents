<template>
  <div class="ui_timeline">
    <div class="ui_timeline_content">
      <div
        class="ui_timeline_content_item"
        v-for="(time, index) in item.data"
        :key="'daytimeList_index_' + index"
      >
        <div class="timeline_item date">{{ parseDate(time.date) }}</div>
        <div class="timeline_item line">
          <div class="dot_box"><div class="dot"></div></div>
        </div>
        <div class="timeline_item content">
          <slot name="item" :item="time.data"></slot>
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
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    parseDate(v) {
      return this.$uiComponents.dateFormate(v, "yyyy-MM-dd");
    },
    parseTime(v) {
      return this.$uiComponents.dateFormate(v, "hh:MM:ss");
    },
  },
};
</script>

<style lang="less">
@base: 23.44rem;
.ui_timeline {
  .ui_timeline_content {
    .ui_timeline_content_item {
      display: flex;
      .timeline_item {
        &.content {
          overflow: scroll;
          overflow-x: hidden;
          height: (200 / @base);
        }
        &.line {
          display: flex;
          justify-content: center;
          position: relative;
          width: (20 / @base);
          padding: (5 / @base) 0 0;
          .dot_box {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: (16 / @base);
            content: "";
            display: block;
            width: (1 / @base);
            background-color: #f2f2f2;
            transform: scaleX(1);
            position: absolute;
            top: (23 / @base);
            left: (10 / @base);
            border-radius: (5 / @base);
            .dot {
              display: block;
              height: (8 / @base);
              width: (8 / @base);
              z-index: 9;
              border-radius: (4.5 / @base);
              background-color: #c0c0c0;
              margin: -12px 0 0 -3px;
            }
          }
        }
        &:first-child {
          width: (80 / @base);
          font-size: (12 / @base);
          line-height: (27 / @base);
          text-align: center;
        }
        &:last-child {
          flex: 1;
        }
      }
    }
  }
}
</style>
