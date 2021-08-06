<template>
  <div class="ui_progress">
    <div class="ui_progress_content">
      <div class="progress">
        <div
          class="progress_current"
          :class="item.type || 'default'"
          :style="{ width: value + '%' }"
        ></div>
        <span class="progress_text">{{ item.text }}</span>
      </div>
      <div class="text">
        <span v-if="$slots.content.length <= 0"
          >{{ value }}{{ item.unit }}</span
        >
        <slot name="content" v-else></slot>
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
    return { value: 0 };
  },
  created() {
    this.value = (this.$props.item.current / this.$props.item.total) * 100;
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_progress {
  .ui_progress_content {
    display: flex;
    .progress {
      flex: 8;
      height: (22 / @base);
      border-radius: (100 / @base);
      background-color: @lightGrey;
      overflow: hidden;
      position: relative;
      .progress_text {
        position: absolute;
        top: (1 / @base);
        left: (10 / @base);
      }
      .progress_current {
        height: 100%;
        text-indent: (15 / @base);
        &.default {
          background-color: @blue;
        }
        &.primary {
          background-color: @green;
        }
        &.warning {
          background-color: @yellow;
        }
        &.error {
          background-color: @red;
        }
        &.info {
          background-color: @moreGrey;
        }
      }
    }
    .text {
      flex: 2;
      .flexCenter;
    }
  }
}
</style>
