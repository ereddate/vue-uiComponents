<template>
  <div class="ui_input">
    <div class="ui_input_content" :class="error.is && 'error'">
      <label :for="item.name || 'ui-input'" v-if="item.title">
        {{
        item.title
        }}
      </label>
      <ui-icon :item="{ icon: item.icon || 'search' }" v-if="item.start && item.icon"></ui-icon>
      <slot name="start" v-if="item.start && !item.icon"></slot>
      <input
        :type="item.type || 'text'"
        v-model="text"
        :placeholder="item.placholder || i18n('lang.请输入内容')"
        :disabled="item.disabled || false"
        :maxlength="item.maxLength || 120"
        :readonly="item.readonly || false"
        :id="item.name || 'ui-input'"
        :name="item.name || 'ui-input'"
        :value="text"
        @keypress="keypressHandle"
        @blur="blurHandle"
      />
      <ui-icon :item="{ icon: item.icon || 'search' }" v-if="item.end"></ui-icon>
      <slot name="end" v-if="item.end && !item.icon"></slot>
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
      text: "",
      error: {
        is: false,
        message: "",
      },
    };
  },
  created(){
    this.$on("rulesExec", this.rulesExec)
  },
  watch: {
    "$data.text"(v) {
      this.rulesExec(v);
    },
  },
  methods: {
    rulesExec(v) {
      let rules = this.$props.item.rules;
      if (rules && rules.required) {
        if (this.$uiComponents.isEmpty(v)) {
          this.error = {
            is: true,
            message: rules.message || "内容不能为空",
          };
          return true;
        } else {
          this.error = {
            is: false,
            message: "",
          };
        }
      }
      return false;
    },
    blurHandle() {
      this.rulesExec(this.text);
    },
    keypressHandle(e) {
      if (e.keyCode === 13 || e.key === "Enter") {
        this.rulesExec(this.text);
        this.$props.item.enterHandle &&
          this.$props.item.enterHandle(e, this.text);
      }
    },
    i18n(v) {
      return this.$uiComponents.i18n(v);
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_input {
  .ui_input_content {
    display: flex;
    border: (1 / @base) solid #efefef;
    border-radius: (5 / @base);
    overflow: hidden;
    padding: (5 / @base);
    font-size: (14 / @base);
    &.error {
      color: #333;
      border: (1 / @base) solid red;
      padding: (5 / @base);
      margin: 0;
      font-size: (14 / @base);
    }
    label {
      line-height: (24 / @base);
      color: #ccc;
      border-right: (1 / @base) solid #efefef;
      padding: 0 (10 / @base) 0 (5 / @base);
    }
    .ui_icon {
      line-height: (24 / @base);
      padding: 0 (5 / @base);
      color: #cccccc;
    }
    input {
      border: 0;
      flex: 1;
      padding: 0 (10 / @base);
      height: (24 / @base);
      font-size: (14 / @base);
      &:focus {
        outline: none;
      }
    }
  }
  .error {
    color: red;
    padding: 0 (10 / @base);
    font-size: (12 / @base);
    margin: (5 / @base) 0;
  }
}
</style>
