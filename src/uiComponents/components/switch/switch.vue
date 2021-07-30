<template>
  <div class="ui_switch">
    <div class="ui_switch_content">
      <label @click.prevent="clickHandle" @keydown.space="clickHandle">
        <span
          class="ui_switch_item"
          :class="value === item.trueValue && 'checked'"
        >
          <input type="hidden" :name="item.name" :value="value" />
          <span class="ui_switch_inner">
            <slot name="open" v-if="value === item.trueValue"></slot>
            <slot name="close" v-if="value === item.falseValue"></slot>
          </span>
        </span>
        {{ item.text }}
      </label>
    </div>
    <div class="error" v-if="error.is">{{ error.message }}</div>
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
      name: "",
      value: "",
      error: {
        is: false,
        message: "",
      },
    };
  },
  created() {
    this.value = this.$props.item.falseValue;
    this.name =
      (!this.isEmpty(this.$props.item.name) && this.$props.item.name + "") ||
      "ui-switch";
  },
  methods: {
    isEmpty(v) {
      return this.$uic.isEmpty(v);
    },
    clickHandle() {
      if (this.$props.item.disabled || this.$props.item.loading) {
        return false;
      }
      this.value = this.value
        ? this.$props.item.falseValue
        : this.$props.item.trueValue;
      this.$props.item.changeHandle &&
        this.$props.item.changeHandle(this.value);
    },
    rulesValidate() {
      let rules = this.$props.item.rules;
      if (rules && rules.required) {
        if (this.value !== this.$props.item.trueValue) {
          this.error = {
            is: true,
            message: rules.message || "内容没有选中",
          };
          return this.error;
        } else {
          this.error = {
            is: false,
            message: "",
          };
        }
      }
      return {
        is: false,
        message: "",
      };
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_switch {
  .ui_switch_content {
    label {
      font-size: @baseFont;
      vertical-align: middle;
      display: inline-block;
      position: relative;
      white-space: nowrap;
      margin-right: (8 / @base);
      cursor: pointer;
      .ui_switch_item {
        display: inline-block;
        width: (44 / @base);
        height: (22 / @base);
        line-height: (20 / @base);
        border-radius: (22 / @base);
        vertical-align: middle;
        border: (1 / @base) solid #ccc;
        background-color: #ccc;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition: all 0.2s ease-in-out;
        &::after {
          content: "";
          width: (18 / @base);
          height: (18 / @base);
          border-radius: (18 / @base);
          background-color: #fff;
          position: absolute;
          left: (2 / @base);
          top: (2 / @base);
          cursor: pointer;
          transition: left 0.2s ease-in-out, width 0.2s ease-in-out;
        }
        &.checked {
          border-color: #2d8cf0;
          background-color: #2d8cf0;
          .ui_switch_inner {
            left: (10 / @base);
          }
          &::after {
            left: (24 / @base);
          }
        }
        input {
        }
        .ui_switch_inner {
          color: #fff;
          font-size: (12 / @base);
          position: absolute;
          left: (23 / @base);
        }
      }
    }
  }
  .error {
    color: @red;
    padding: 0;
    font-size: @miniFont;
    margin: (5 / @base) 0;
  }
}
</style>
