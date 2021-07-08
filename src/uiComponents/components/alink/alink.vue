<template>
  <span class="ui_alink">
    <a
      :href="item.url"
      v-if="item.url"
      :style="{ height: item.height ? item.height / 23.44 + 'rem' : 'auto' }"
      ><slot name="content"></slot
    ></a>
    <a @click="clickHandle" v-else><slot name="content"></slot></a>
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
  a {
    display: block;
  }
}
</style>
