<template>
  <div class="ui_radio">
    <div class="ui_radio_content">
      <label @click.prevent="clickHandle">
        <span
          class="ui_radio_main"
          :class="(isChecked && 'checked') || (item.disabled && 'disabled')"
        >
          <span class="ui_radio_main_inner"></span>
          <input
            type="radio"
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
    this.name = this.$props.item.name || "ui-radio";
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
      this.isChecked = true;
      this.$props.item.changeHandle &&
        this.$props.item.changeHandle(this.$props.item.value);
    },
    i18n(v) {
      return this.$uic.i18n(v);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_radio {
  .ui_radio_content {
    label {
      font-size: @baseFont;
      vertical-align: middle;
      display: inline-block;
      position: relative;
      white-space: nowrap;
      margin-right: (8 / @base);
      cursor: pointer;
      .ui_radio_main {
        &.checked {
          input {
            cursor: not-allowed;
          }
          .ui_radio_main_inner {
            border-color: #2d8cf0;
            &::before {
              opacity: 1;
              transform: scale(1);
              transition: all 0.2s;
            }
          }
        }
        &.disabled {
          .ui_radio_main_inner {
            border-color: #dcdee2;
            background-color: #f3f3f3;
            &::before {
              background-color: #ccc;
            }
          }
        }
        display: inline-block;
        margin-right: (4 / @base);
        white-space: nowrap;
        position: relative;
        line-height: 1;
        vertical-align: middle;
        cursor: pointer;
        input {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          opacity: 0;
          cursor: pointer;
        }
        .ui_radio_main_inner {
          display: inline-block;
          width: (16 / @base);
          height: (16 / @base);
          position: relative;
          top: 0;
          left: 0;
          background-color: #fff;
          border: (1 / @base) solid #dcdee2;
          border-radius: 50%;
          transition: all 0.2s ease-in-out;
          &::before {
            position: absolute;
            width: (12 / @base);
            height: (12 / @base);
            left: (2 / @base);
            top: (2 / @base);
            border-radius: (6 / @base);
            display: table;
            border-top: 0;
            border-left: 0;
            content: " ";
            background-color: #2d8cf0;
            opacity: 0;
            transition: all 0.2s ease-in-out;
            transform: scale(0);
          }
        }
      }
    }
  }
}
</style>
