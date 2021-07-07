<template>
  <div class="ui_button" @click="buttonClickHandle">
    <ui-icon :item="{ icon: item.icon }" v-if="item.icon"></ui-icon>
    {{ $t("lang." + item.text) }}
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
    return {};
  },
  methods: {
    buttonClickHandle() {
      this.$props.item.clickHandle();
    },
  },
};
</script>
<style lang="less">
.ui_button {
  cursor: pointer;
}
</style>
