<template>
  <span class="ui_alink">
    <a
      :href="item.url"
      v-if="item.url"
      :style="{ height: item.height ? item.height / 23.44 + 'rem' : 'auto' }"
      :target="item.target || '_blank'"
      :class="item.type || 'info'"
    >
      <slot name="content"></slot>
    </a>
    <router-link :to="item.to" v-else-if="item.to"></router-link>
    <a @click.prevent="clickHandle" v-else :class="item.type || 'info'">
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
      //this.$router.push(this.$props.item.router);
      this.$props.item.clickHandle &&
        this.$props.item.clickHandle(this.$props.item.data);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_alink {
  .auto;
  a {
    .auto;
    text-decoration: none;
    &.primary {
      color: @blue;
    }
    &.success {
      color: @green;
    }
    &.warning {
      color: @yellow;
    }
    &.danger {
      color: @red;
    }
    &.info {
      color: @lightBlack;
    }
  }
}
</style>
