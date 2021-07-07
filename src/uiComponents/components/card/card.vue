<template>
  <div class="ui_card">
    ui-card{{ $t("lang.你好") }}
    <ui-button
      :item="{ text: text, clickHandle: setLangHandle, icon: 'time' }"
    ></ui-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "切换",
      bool: false,
    };
  },
  methods: {
    setLangHandle() {
      this.bool = this.bool ? false : true;
      console.log(this.bool);
      this.$i18n.set(this.bool ? "zh" : "en");
    },
  },
};
</script>
<style lang="less">
.ui_card {
}
</style>
