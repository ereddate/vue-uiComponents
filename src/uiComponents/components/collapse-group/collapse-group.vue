<template>
  <div class="ui_collapse_group">
    <div class="ui_collapse_group_content">
      <slot name="content" :item="{ ...item, current }"></slot>
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
      current: 0,
    };
  },
  created() {
    this.$on("changeHandle", this.changeHandle);
  },
  methods: {
    changeHandle(v) {
      this.current = v;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_collapse_group {
}
</style>
