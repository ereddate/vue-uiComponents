<template>
  <div class="ui_more">
    <div class="ui_more_content">
      <div class="item">
        <div class="normal" v-if="!loading && !loaded">
          <ui-button
            :item="{
              text: item.moreButtonText || '点击加载更多',
              clickHandle: moreClickHandle,
            }"
          ></ui-button>
        </div>
        <div class="loading" v-if="loading && !loaded">
          <ui-loading
            :item="{
              type: 'default',
              text: item.loadButtonText || '加载数据中...',
            }"
          ></ui-loading>
        </div>

        <span class="loaded" v-if="!loading && loaded">{{
          item.loadedButtonText || "已经到底"
        }}</span>
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
      loading: false,
      loaded: false,
    };
  },
  created() {
    this.loading = this.$props.item.loading;
    this.loaded = this.$props.item.loaded;
  },
  watch: {
    "$props.item.loading"(v) {
      this.loading = v;
    },
    "$props.item.loaded"(v) {
      this.loaded = v;
    },
  },
  methods: {
    moreClickHandle() {
      this.$props.item.loadingHandle && this.$props.item.loadingHandle();
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_more {
  .ui_more_content {
    .item {
      .flexCenter;
      flex-direction: column;
      .normal {
        height: (30 / @base);
        .flexCenter;
        flex-direction: column;
      }
      .loading {
        height: (30 / @base);
        .flexCenter;
        flex-direction: column;
      }
      .loaded {
        height: (30 / @base);
        text-align: center;
        color: @grey;
        padding: (10 / @base);
        .flexCenter;
        flex-direction: column;
      }
    }
  }
}
</style>
