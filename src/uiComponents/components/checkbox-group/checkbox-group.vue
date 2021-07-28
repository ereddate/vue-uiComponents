<template>
  <div class="ui_checkbox_group">
    <ui-checkbox
      :item="{
        ...checkbox,
        changeHandle: checkboxChangeHandle,
      }"
      v-for="(checkbox, index) in data"
      :key="index"
    ></ui-checkbox>
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
      value: [],
      data: [],
      error: {
        is: false,
        message: "",
      },
    };
  },
  created() {
    this.data = this.$props.item.data;
    this.name = this.$props.item.name || "ui-checkbox";
  },
  methods: {
    rulesValidate(v) {
      let rules = this.$props.item.rules;
      if (rules && rules.required) {
        if (this.$uic.isEmpty(v || this.value)) {
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
    checkboxChangeHandle(checked, v) {
      checked
        ? this.value.push(v)
        : this.value.indexOf(v) > -1 &&
          this.value.splice(this.value.indexOf(v), 1);
      this.$props.item.changeHandle &&
        this.$props.item.changeHandle(this.value);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_checkbox_group {
  .error {
    color: @red;
    padding: 0;
    font-size: @miniFont;
    margin: (5 / @base) 0;
  }
}
</style>
