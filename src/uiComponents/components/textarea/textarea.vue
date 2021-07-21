<template>
  <div class="ui_textarea">
    <div class="ui_textarea_content">
      <textarea
        v-model="value"
        :placeholder="item.placeholder || '请输入内容'"
        :disabled="item.disabled || false"
        :maxlength="item.total || 200"
        @input="inputHandle"
      ></textarea>
      <span class="textarea_tip">{{ current }}/{{ item.total || 200 }}</span>
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
      value: "",
      current: 0,
    };
  },
  created() {
    this.value = this.$props.item.value;
  },
  watch: {
    "$props.item.value"(v) {
      this.value = v;
    },
  },
  methods: {
    inputHandle() {
      this.current = this.value.length;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_textarea {
  .ui_textarea_content {
    position: relative;
    display: flex;
    flex-direction: column;
    textarea {
      min-height: 100px;
      outline: 0;
      display: block;
      box-sizing: border-box;
      width: 100%;
      min-width: 0;
      margin: 0;
      padding: 0;
      color: #1a1a1a;
      text-align: left;
      background-color: transparent;
      border: 0;
      resize: none;
    }
    .textarea_tip {
      position: absolute;
      bottom: (5 / @base);
      right: (10 / @base);
      text-align: right;
      color: @grey;
      font-size: @miniFont;
      background-color: @white;
    }
  }
}
</style>
