<template>
  <span class="ui_alink">
    <a
      :href="item.url"
      v-if="item.url"
      :style="{ height: item.height ? item.height / 23.44 + 'rem' : 'auto' }"
      :target="item.target || '_blank'"
    >
      <slot name="content"></slot>
    </a>
    <a @click.prevent="clickHandle" v-else>
      <slot name="content"></slot>
    </a>
  </span>
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
  methods: {
    clickHandle() {
      this.$router.push(this.$props.item.router);
    },
  },
};
</script>
<style lang="less">
.ui_alink {
  display: block;
  width: 100%;
  height: 100%;
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
}
</style>
