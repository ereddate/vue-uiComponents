<template>
  <div class="ui_pop">
    <div
      class="ui_pop_content"
      :style="{
        position: 'absolute',
        'will-change': 'top, left',
        top: top || '0rem',
        left: left || '0rem',
      }"
      :x-placement="item.type || 'top-start'"
    >
      <div class="content">
        <div class="arrow"></div>
        <div class="inner">
          <div class="inner_content">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <slot name="content"></slot>
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
      top: 0,
      left: 0,
    };
  },
  mounted() {
    this.top =
      "-" +
      (this.$uic.query(this.$el).find(".ui_pop_content").height() + 17) /
        23.44 +
      "rem";
    switch (this.$props.item.type) {
      case "top":
        this.left =
          "-" +
          (this.$uic.query(this.$children[0].$el).width() / 2 - 10) +
          "px";
        break;
      case "top-end":
        this.left =
          "-" +
          (this.$uic.query(this.$children[0].$el).width() / 2 + 17) +
          "px";
        break;
    }
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_pop {
  position: relative;
  .ui_pop_content {
    width: (150 / @base);
    display: block;
    visibility: visible;
    font-size: (14 / @base);
    line-height: 1.5;
    position: absolute;
    z-index: 97;
    &[x-placement^="top"] {
      padding: (7 / @base) 0 (10 / @base);
      .arrow {
        bottom: (3 / @base);
        border-width: (7 / @base) (7 / @base) 0;
        border-top-color: hsla(0, 0%, 85%, 0.5);
      }
    }
    &[x-placement="top"] {
      .arrow {
        left: 50%;
        margin-left: (-7 / @base);
      }
    }
    &[x-placement="top-start"] {
      .arrow {
        left: (16 / @base);
      }
    }
    &[x-placement="top-end"] {
      .arrow {
        right: 16px;
      }
    }
    .content {
      .arrow {
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        border-color: transparent;
        border-style: solid;
        &:after {
          display: block;
          width: 0;
          height: 0;
          position: absolute;
          border-color: transparent;
          border-style: solid;
        }
        &::after {
          content: " ";
          bottom: (1 / @base);
          margin-left: (-7 / @base);
          border-bottom-width: 0;
          border-top-width: (7 / @base);
          border-top-color: @white;
        }
      }
      .inner {
        width: 100%;
        background-color: @white;
        background-clip: padding-box;
        border-radius: (4 / @base);
        box-shadow: 0 (1 / @base) (6 / @base) rgb(0 0 0 / 20%);
        white-space: nowrap;
        .inner_content {
          padding: @paddingAll;
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
