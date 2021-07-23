<template>
  <div class="ui_topic_group">
    <div class="ui_topic_group_content">
      <div class="header">
        <div class="item" v-if="item.type === 'video'">
          <ui-video
            :item="{
              ...item.topic,
              autoplay: true,
              controls: true,
              showTip: false,
              currentTimeUpdate: current.start,
              timeUpdateHandle: timeUpdateHandle,
            }"
          ></ui-video>
        </div>
      </div>
      <div class="content">
        <div
          class="title"
          v-if="
            item.options.data[buttonIndex] &&
            item.options.data[buttonIndex].captions
          "
        >
          {{ item.options.data[buttonIndex].captions }}
        </div>
        <div
          class="topic_item"
          v-for="(option, index) in item.options.data"
          :key="index"
        >
          <ui-button
            :item="{
              text: option.title,
              class: 'default',
              data: option.timeUpdate,
              index: index,
              clickHandle: goTimeUpdateHandle,
            }"
            v-if="
              buttonIndex > -1
                ? item.options.data[buttonIndex].showButtons
                    .join(',')
                    .indexOf(index) > -1
                : true
            "
          ></ui-button>
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
    return {
      buttonIndex: -1,
      current: {
        start: 0,
        end: 0,
        next: 1,
      },
    };
  },
  mounted() {
    this.buttonIndex = 0;
    /* this.buttonIndex = 0;
    this.current = this.$props.item.options.data[0].timeUpdate; */
  },
  methods: {
    timeUpdateHandle(e) {
      let currentTime = e.target.currentTime;
      if (currentTime > this.current.end) {
        e.target.pause();
      }
    },
    goTimeUpdateHandle(ops) {
      this.buttonIndex = ops.index;
      this.current = ops.data;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_topic_group {
  .ui_topic_group_content {
    .header {
      .item {
      }
    }
    .content {
      .title {
        padding: @paddingTop 0;
      }
      .topic_item {
        display: flex;
        flex-direction: column;
        .ui_button {
        }
      }
    }
  }
}
</style>
