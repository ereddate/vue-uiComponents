<template>
  <div class="ui_collapse">
    <div class="ui_collapse_content">
      <div class="title" @click="toggleHandle">
        <div class="item">
          {{ item.title }}
        </div>
        <div class="item">
          <ui-icon
            :item="{
              icon: item.icon || 'arrow-up-bold',
              style: {
                transform: collapse ? 'rotate(0deg)' : 'rotate(180deg)',
              },
            }"
          ></ui-icon>
        </div>
      </div>
      <div
        class="content"
        :style="{
          height: collapse
            ? item.contentHeight
              ? item.contentHeight / 23.44 + 'rem'
              : '60px'
            : '0px',
          'will-change': collapse ? 'height' : 'auto',
        }"
      >
        <slot name="content"></slot>
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
      collapse: false,
    };
  },
  mounted() {
    this.collapse = this.$props.item.collapse;
  },
  watch: {
    "$props.item.collapse"(v) {
      this.collapse = v;
    },
    "$data.collapse"(v) {
      if (v) this.$parent.$emit("changeHandle", this.$props.item.index);
    },
  },
  methods: {
    toggleHandle() {
      this.collapse = this.collapse ? false : true;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_collapse {
  .ui_collapse_content {
    .title {
      display: flex;
      padding: (5 / @base) (10 / @base);
      border-bottom: (1 / @base) #efefef solid;
      margin: (5 / @base) 0;
      .item {
        flex: 19;
        &:last-child {
          flex: 1;
          text-align: center;
        }
      }
    }
    .content {
      transition-property: height;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
      height: 0;
      overflow: hidden;
    }
  }
}
</style>
