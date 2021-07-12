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
      <slot name="start" v-if="item.start && !item.icon"></slot>
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
      />
      <ui-icon
        :item="{ icon: item.icon || 'search' }"
        v-if="item.end"
      ></ui-icon>
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
    this.$on("rulesValidate", this.rulesValidate);
  },
  watch: {
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
@base: 23.44rem;
.ui_input {
  label {
    line-height: (36 / @base);
    color: #ccc;
    padding: 0 (10 / @base) 0 (5 / @base);
    min-width: (50 / @base);
  }
  .ui_input_content {
    flex: 1;
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
    padding: 0;
    font-size: (12 / @base);
    margin: (5 / @base) 0;
  }
}
</style>
