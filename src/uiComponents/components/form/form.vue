<template>
  <div class="ui_form">
    <div class="ui_form_content">
      <form
        @submit.prevent="submitHandle"
        :autocomplete="autocomplete"
        :ref="item.name || 'ui-form'"
      >
        <slot name="content" :item="item"></slot>
      </form>
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
      autocomplete: "on",
    };
  },
  mounted() {},
  methods: {
    submitHandle() {
      let error = { is: false, message: "" },
        values = {};
      for (let i = 0; i < this.$children.length; i++) {
        let item = this.$children[i].$children[0];
        error = item && item.rulesValidate ? item.rulesValidate() : error;
        if (error.is) {
          break;
        }
        item && item.name && item.value && (values[item.name] = item.value);
      }
      if (error.is) {
        this.$props.item.faildHandle && this.$props.item.faildHandle(error);
        return;
      }
      this.$props.item.submitHandle && this.$props.item.submitHandle(values);
    },
  },
};
</script>
<style lang="less">
.ui_form {
  .ui_form_content {
  }
}
</style>
