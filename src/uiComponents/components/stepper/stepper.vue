<template>
  <div class="ui_stepper">
    <div class="ui_stepper_content">
      <div class="ui_stepper_item">
        <ui-button
          :item="{
            class: 'default',
            text: '-',
            clickHandle: removeClickHandle,
          }"
        ></ui-button>
      </div>
      <div class="ui_stepper_item">
        <ui-input
          :item="{
            type: 'number',
            readonly: true,
            value: value,
          }"
        ></ui-input>
      </div>
      <div class="ui_stepper_item">
        <ui-button
          :item="{ class: 'default', text: '+', clickHandle: addClickHandle }"
        ></ui-button>
      </div>
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
      value: 0,
    };
  },
  created() {
    this.value = this.$props.item.value;
  },
  watch: {
    value(v) {
      this.$props.item.changeHandle && this.$props.item.changeHandle(v);
    },
  },
  methods: {
    removeClickHandle() {
      let v = this.value - this.$props.item.step;
      if (v <= this.$props.item.min) v = this.$props.item.min;
      this.value = v;
    },
    addClickHandle() {
      let v = this.value + this.$props.item.step;
      if (v >= this.$props.item.max) v = this.$props.item.max;
      this.value = v;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_stepper {
  .ui_stepper_content {
    display: flex;
    padding: (10 / @base) 0;
    .ui_stepper_item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ui_input .ui_input_content input {
      display: inline;
      text-align: center;
    }
  }
}
</style>
