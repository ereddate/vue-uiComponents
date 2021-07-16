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
@base: 23.44rem;
.ui_steps {
  .ui_steps_content {
    padding: (10 / @base) (10 / @base) (30 / @base) (10 / @base);
    display: flex;
    height: (10 / @base);
    position: relative;
    font-size: (12 / @base);
    .ui_steps_content_items {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      .item {
        position: relative;
        .item_content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          .title {
            color: #ccc;
            &.on {
              color: #07c160;
            }
            &.success {
              color: #333;
            }
          }
          .ui_icon {
            font-size: (12 / @base);
            margin: (5 / @base) 0;
            padding: (2 / @base) (10 / @base);
            color: #07c160;
            font-weight: 700;
            background-color: #fff;
            border-radius: (5 / @base);
          }
          .no {
            background-color: #fff;
            padding: 0 (10 / @base);
            transform: translateY(-50%);
            margin: (14 / @base) 0 0;
            &.on {
              span {
                background-color: #07c160;
              }
            }
            span {
              display: block;
              width: (5 / @base);
              height: (5 / @base);
              background-color: #ccc;
              border-radius: (5 / @base);
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
          background-color: #efefef;
          width: 100%;
          z-index: 0;
          &.on {
            background-color: #07c160;
          }
        }
      }
    }
  }
}
</style>
