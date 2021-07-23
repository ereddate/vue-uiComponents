<template>
  <div class="ui_imagelist">
    <div class="ui_imagelist_content" v-if="item.data && item.data.length > 0">
      <div class="item" v-for="(cell, index) in item.data" :key="index">
        <div
          class="item_cell"
          v-if="index % 2 != 0"
          :style="{ marginLeft: 2.5 / 23.44 + 'rem' }"
        >
          <slot name="content" :item="cell"></slot>
        </div>
        <div
          class="item_cell"
          v-else
          :style="{ marginRight: 2.5 / 23.44 + 'rem' }"
        >
          <slot name="content" :item="cell"></slot>
        </div>
      </div>
    </div>
    <div class="ui_imagelist_content" v-else>暂无数据</div>
    <div class="loading" v-if="loading">
      <ui-loading
        :item="{
          type: 'default',
          text: '加载数据中...',
        }"
      ></ui-loading>
    </div>
    <div class="loaded" v-if="loaded">已经到底</div>
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
  mounted() {
    this.$uic.query(window).on("scroll", this.scrollHandle);
  },
  beforeDestroy() {
    this.$uic.query(window).off("scroll");
    this.timeout && clearTimeout(this.timeout);
  },
  methods: {
    scrollHandle() {
      let that = this;
      if (this.loaded === true) return;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        let doc = that.$uic.query(document),
          scrollTop = doc.scrollTop() + screen.height,
          docHeight = doc.height();
        if (scrollTop + 100 >= docHeight) {
          if (that.$props.item.moreHandle) {
            that.loading = true;
            that.$props.item
              .moreHandle()
              .then((v) => {
                v
                  ? (that.loading = false)
                  : ((that.loading = false), (that.loaded = true));
              })
              .catch((e) => {
                that.loading = false;
                console.log(e);
              });
          }
        }
      }, 500);
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_imagelist {
  font-size: @baseFont;
  clear: both;
  .ui_imagelist_content {
    overflow: hidden;
    padding: (5 / @base) @paddingRight (5 / @base) @paddingLeft;
    .item {
      .item_cell {
        float: left;
        width: 49%;
        overflow: hidden;
        margin-bottom: (5 / @base);
      }
    }
  }
  .loaded {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: @paddingTop @paddingRight @paddingBottom @paddingLeft;
    color: @grey;
  }
}
</style>
