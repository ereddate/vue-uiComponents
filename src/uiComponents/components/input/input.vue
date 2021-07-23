<template>
  <div class="ui_input">
    <!-- <label
      :for="(item.name && item.name + '_id') || 'ui-input'"
      v-if="item.title"
    >
      {{ item.title }}
    </label> -->
    <div class="ui_input_content" :class="error.is && 'error'">
      <ui-icon
        :item="{ icon: item.icon || 'search' }"
        v-if="item.start && item.icon"
      ></ui-icon>
      <span class="slot" v-if="item.start && !item.icon"
        ><slot name="start"></slot
      ></span>
      <span class="input">
        <input
          :type="item.type || 'text'"
          v-model="value"
          :placeholder="item.placholder || i18n('lang.请输入内容')"
          :disabled="item.disabled || false"
          :maxlength="item.maxLength || 120"
          :readonly="item.readonly || false"
          :id="(item.name && item.name + '_id') || 'ui-input'"
          :name="item.name || 'ui-input'"
          :value="value"
          @keypress="keypressHandle"
          @blur="blurHandle"
          @input="inputHandle"
        />
      </span>
      <ui-icon
        :item="{ icon: item.icon || 'search' }"
        v-if="item.end && item.icon"
      ></ui-icon>
      <span class="slot" v-if="item.end && !item.icon"
        ><slot name="end"></slot
      ></span>
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
      value: "",
      name: "",
      error: {
        is: false,
        message: "",
      },
    };
  },
  created() {
    this.name = this.$props.item.name || "ui-input";
    this.value =
      (typeof this.$props.item.value !== "undefined" &&
        this.$props.item.value + "") ||
      "";
    this.$on("rulesValidate", this.rulesValidate);
  },
  watch: {
    "$props.item.value"(v) {
      this.value = v;
    },
    "$data.value"(v) {
      this.rulesValidate(v);
    },
  },
  methods: {
    rulesValidate(v) {
      let rules = this.$props.item.rules;
      if (rules && rules.required) {
        if (this.$uic.isEmpty(v || this.value)) {
          this.error = {
            is: true,
            message: rules.message || "内容不能为空",
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
    blurHandle() {
      this.rulesValidate(this.value);
    },
    inputHandle(e) {
      //console.log(e);
      this.$props.item.inputHandle &&
        this.$props.item.inputHandle(e.target.value);
    },
    keypressHandle(e) {
      if (e.keyCode === 13 || e.key === "Enter") {
        this.rulesValidate(this.value);
        this.$props.item.enterHandle &&
          this.$props.item.enterHandle(e, this.value);
      }
    },
    i18n(v) {
      return this.$uic.i18n(v);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_input {
  label {
    line-height: (36 / @base);
    color: @moreGrey;
    padding: 0 @paddingRight 0 (5 / @base);
    min-width: (50 / @base);
  }
  .ui_input_content {
    flex: 1;
    display: flex;
    border: (1 / @base) solid @lightGrey;
    border-radius: @baseRadius;
    overflow: hidden;
    padding: (5 / @base);
    font-size: @baseFont;
    &.error {
      color: @lightBlack;
      border: (1 / @base) solid @red;
      padding: (5 / @base);
      margin: 0;
      font-size: @baseFont;
    }
    .slot {
      //flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ui_icon {
      line-height: (24 / @base);
      padding: 0 (5 / @base);
      color: @moreGrey;
    }
    .input {
      flex: 1;
      display: flex;
      input {
        border: 0;
        // padding: 0 (10 / @base);
        //height: (24 / @base);
        font-size: @baseFont;
        width: 100%;
        &:focus {
          outline: none;
        }
        &:disabled {
          background-color: @white;
          color: @moreGrey;
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
