<template>
  <div class="ui_steps">
    <div class="ui_steps_content">
      <div class="ui_steps_content_lines">
        <div class="items">
          <div
            class="item_line"
            v-for="(step, index) in item.data"
            :key="'line_' + index"
          ></div>
        </div>
      </div>
      <div class="ui_steps_content_items">
        <div
          class="item"
          v-for="(step, index) in item.data"
          :style="{
            width: 100 / item.data.length + '%',
          }"
          :key="index"
        >
          <div class="item_content">
            <div
              class="title"
              :class="
                (item.current === index && 'on') ||
                (item.current > index && 'success')
              "
            >
              {{ step.title }}
            </div>
            <ui-icon
              v-if="item.current === index"
              :item="{ icon: 'select' }"
            ></ui-icon>
            <div class="no" :class="item.current > index && 'on'" v-else>
              <span></span>
            </div>
          </div>
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
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_steps {
  .ui_steps_content {
    padding: @paddingTop @paddingRight (30 / @base) @paddingLeft;
    display: flex;
    height: (10 / @base);
    position: relative;
    font-size: @miniFont;
    .ui_steps_content_items {
      .absoluteTop;
      display: flex;
      .item {
        position: relative;
        .item_content {
          .absoluteTop;
          .flexCenter;
          flex-direction: column;
          .title {
            color: @moreGrey;
            &.on {
              color: @green;
            }
            &.success {
              color: @lightBlack;
            }
          }
          .ui_icon {
            font-size: @miniFont;
            margin: (5 / @base) 0;
            padding: (2 / @base) @paddingRight (2 / @base) @paddingLeft;
            color: @green;
            font-weight: 700;
            background-color: @white;
            border-radius: @baseRadius;
          }
          .no {
            background-color: @white;
            padding: 0 @paddingRight 0 @paddingLeft;
            transform: translateY(-50%);
            margin: @baseFont 0 0;
            &.on {
              span {
                background-color: @green;
              }
            }
            span {
              display: block;
              width: (5 / @base);
              height: (5 / @base);
              background-color: @moreGrey;
              border-radius: @baseRadius;
            }
          }
        }

        &:first-child {
          .item_content {
            justify-content: flex-start;
            align-items: flex-start;
          }
        }
        &:last-child {
          .item_content {
            justify-content: flex-end;
            align-items: flex-end;
          }
        }
      }
    }

    .ui_steps_content_lines {
      overflow: hidden;
      position: absolute;
      top: (30 / @base);
      left: 0;
      right: 0;
      .items {
        display: flex;
        .item_line {
          flex: 1;
          height: (1 / @base);
          background-color: @lightGrey;
          width: 100%;
          z-index: 0;
          &.on {
            background-color: @green;
          }
        }
      }
    }
  }
}
</style>
