<template>
  <div class="ui_card">
    ui-card{{ $t("lang.你好") }}
    <div class="ui_card_button" @click="setLangHandle('zh')">setLang("zh")</div>
    <div class="ui_card_button" @click="setLangHandle('en')">setLang("en")</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    setLangHandle(v) {
      this.$i18n.set(v);
    },
  },
};
</script>
<style lang="less">
.ui_card {
}
</style>
