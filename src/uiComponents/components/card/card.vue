<template>
  <div
    class="ui_card"
    :style="{
      margin:
        item.style && item.style.margin
          ? item.style.margin / 23.44 + 'rem ' + 10 / 23.44 + 'rem'
          : 10 / 23.44 + 'rem',
    }"
  >
    <div class="ui_card_header img" v-if="item.headerImage">
      <ui-link :item="item.headerImage">
        <template #content>
          <ui-image :item="item.headerImage"></ui-image>
        </template>
      </ui-link>
    </div>
    <div class="ui_card_header" v-if="item.title">
      <div
        class="ui_card_header_item title"
        :style="{
          fontSize:
            item.style && item.style.fontSize
              ? item.style.fontSize / 23.44 + 'rem'
              : 16 / 23.44 + 'rem',
          fontWeight: '500',
        }"
      >
        {{ i18n("lang." + item.title) }}
      </div>
      <div class="ui_card_header_item handle">
        <slot name="handle"></slot>
      </div>
    </div>
    <div class="ui_card_content">
      <slot name="content"></slot>
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
      text: "切换",
      bool: false,
    };
  },
  methods: {
    i18n(v) {
      return this.$uiComponents.i18n(v);
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_card {
  clear: both;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: (5 / @base);
  font-size: (14 / @base);
  .ui_card_header {
    padding: (5 / @base) (10 / @base);
    border-bottom: (1 / @base) solid #efefef;
    display: flex;
    &.img {
      display: block;
      padding: 0;
      min-height: (80 / @base);
      border: 0;
      a {
        width: 100%;
        min-height: (80 / @base);
        background-color: #cccccc;
      }
    }
    .ui_card_header_item {
      width: 50%;
      &.title {
        display: flex;
        align-items: center;
      }
      &.handle {
        text-align: right;
      }
    }
  }
  .ui_card_content {
    overflow: hidden;
    padding: (10 / @base);
  }
}
</style>
