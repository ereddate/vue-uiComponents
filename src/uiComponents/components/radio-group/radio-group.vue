<template>
  <div class="ui_radio_group">
    <ui-radio
      :item="{
        ...radio,
        changeHandle: radioChangeHandle,
      }"
      v-for="(radio, index) in data"
      :key="index"
    ></ui-radio>
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
      data: [],
      error: {
        is: false,
        message: "",
      },
    };
  },
  created() {
    this.data = this.$props.item.data;
    this.name = this.$props.item.name || "ui-radio";
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
    radioChangeHandle(v) {
      this.value = v;
      for (let i = 0; i < this.data.length; i++) {
        if (v === this.data[i].value) {
          this.data[i].checked = true;
        } else {
          this.data[i].checked = false;
        }
      }
      this.$props.item.changeHandle &&
        this.$props.item.changeHandle(this.value);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_radio_group {
  .error {
    color: @red;
    padding: 0;
    font-size: @miniFont;
    margin: (5 / @base) 0;
  }
}
</style>
