<template>
  <div
    class="ui_pull_refresh"
    @touchstart="touchStartHandle"
    @touchmove="touchMoveHandle"
    @touchend="touchEndHandle"
  >
    <div
      class="content"
      :style="{
        transform: 'translateY(' + top / 23.44 + 'rem)',
        transition: 'all 0.3s ease 0s',
      }"
    >
      <div class="pulling" v-if="pulling">下拉即可刷新</div>
      <div class="loosing" v-if="loosing">释放即可刷新</div>
      <div class="loading" v-if="loading">加载中...</div>
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
      pulling: false,
      loosing: false,
      loading: false,
      top: 0,
    };
  },
  methods: {
    touchStartHandle(e) {
      if (this.loading) return false;
      let touch = e.touches[0];
      this.startY = touch.pageY;
    },
    touchMoveHandle(e) {
      if (this.loading) return false;
      let touch = e.touches[0];
      this.endY = touch.pageY;
      let y = this.endY - this.startY;
      if (y >= (this.$props.item.offset || 90)) {
        this.y = this.$props.item.offset || 90;
      } else {
        this.y = y;
      }
      if (this.y > 0 && this.y < 60) {
        this.pulling = true;
      } else if (this.y > 60 && this.y < (this.$props.item.offset || 90)) {
        this.pulling = false;
        this.loosing = true;
      }
      //console.log(this.y);
      this.top = this.y;
    },
    touchEndHandle() {
      if (this.loading) return false;
      if (this.top < 60) {
        this.pulling = false;
        this.loosing = false;
        this.loading = false;
        this.top = 0;
        return false;
      }
      //this.y = this.endY - this.startY;
      //console.log(this.y);
      this.pulling = false;
      this.loosing = false;
      this.loading = true;
      this.top = 0;
      let that = this;
      this.$props.item.refresh &&
        this.$props.item
          .refresh()
          .then((v) => {
            that.pulling = false;
            that.loosing = false;
            that.loading = false;
            that.$props.item.success && that.$props.item.success(v);
          })
          .catch((e) => {
            that.$props.item.error && that.$props.item.error(e);
          });
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_pull_refresh {
  .content {
    .pulling,
    .loosing,
    .loading {
      .flexCenter;
      font-size: @miniFont;
      color: @grey;
      padding: @paddingAll;
    }
  }
}
</style>
