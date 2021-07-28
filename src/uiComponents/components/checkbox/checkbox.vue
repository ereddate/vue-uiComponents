<template>
  <div class="ui_checkbox">
    <div class="ui_checkbox_content">
      <label @click.prevent="clickHandle">
        <span
          class="ui_checkbox_main"
          :class="(isChecked && 'checked') || (item.disabled && 'disabled')"
        >
          <span class="ui_checkbox_main_inner"></span>
          <input
            type="checkbox"
            :name="name"
            :value="item.value"
            :checked="isChecked"
            :disabled="item.disabled"
          />
        </span>
        {{ item.text }}
      </label>
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
      name: "",
      isChecked: false,
    };
  },
  created() {
    this.name = this.$props.item.name || "ui-checkbox";
    this.isChecked = this.$props.item.checked;
    if (this.isChecked) {
      this.$props.item.changeHandle &&
        this.$props.item.changeHandle(this.$props.item.value);
    }
  },
  watch: {
    "$props.item.checked"(v) {
      this.isChecked = v;
    },
  },
  methods: {
    clickHandle() {
      if (this.$props.item.disabled) {
        return;
      }
      this.isChecked = this.isChecked ? false : true;
      this.$props.item.changeHandle &&
        this.$props.item.changeHandle(this.isChecked, {
          [this.name]: this.$props.item.value,
        });
    },
    i18n(v) {
      return this.$uic.i18n(v);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_checkbox {
  .ui_checkbox_content {
    label {
      font-size: @baseFont;
      vertical-align: middle;
      display: inline-block;
      position: relative;
      white-space: nowrap;
      margin-right: (8 / @base);
      cursor: pointer;
      .ui_checkbox_main {
        &.checked {
          input {
            cursor: not-allowed;
          }
          .ui_checkbox_main_inner {
            border-color: #2d8cf0;
            background-color: #2d8cf0;
            &::before {
              content: "";
              display: table;
              width: 4px;
              height: 8px;
              position: absolute;
              top: 2px;
              left: 5px;
              border: 2px solid #fff;
              border-top: 0;
              border-left: 0;
              transform: rotate(45deg) scale(1);
              transition: all 0.2s ease-in-out;
            }
          }
        }
        &.disabled {
          .ui_checkbox_main_inner {
            border-color: #dcdee2;
            background-color: #f3f3f3;
            &::before {
              background-color: #ccc;
            }
          }
        }
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
        cursor: pointer;
        line-height: 1;
        position: relative;
        input {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          cursor: pointer;
          opacity: 0;
        }
        .ui_checkbox_main_inner {
          display: inline-block;
          width: 16px;
          height: 16px;
          position: relative;
          top: 0;
          left: 0;
          border: 1px solid #dcdee2;
          border-radius: 2px;
          background-color: #fff;
          transition: border-color 0.2s ease-in-out,
            background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          &::before {
            content: "";
            display: table;
            width: 4px;
            height: 8px;
            position: absolute;
            top: 1px;
            left: 4px;
            border: 2px solid #fff;
            border-top: 0;
            border-left: 0;
            transform: rotate(45deg) scale(0);
            transition: all 0.2s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
