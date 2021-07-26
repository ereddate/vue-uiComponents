<template>
  <div class="ui_anchor">
    <div class="ui_anchor_ink">
      <span
        class="ui_anchor_ink_ball"
        :style="{ top: (current && current.inkTop) || 6 + 'px' }"
      ></span>
    </div>
    <div class="ui_anchor_content">
      <div
        class="item"
        v-for="(anchor, index) in listItems"
        :key="index"
        :id="'ink_' + anchor.id"
      >
        <span class="title">{{ anchor.title }}</span>
        <ui-anchor-link
          :item="anchor.children"
          v-if="anchor.children"
        ></ui-anchor-link>
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
      listItems: [],
      current: false,
      currentTop: 0,
    };
  },
  created() {
    this.listItems = this.getListItem(this.$props.item.data);
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      this.listItems = that.getListItem(this.listItems, true);
      that.$uic
        .query(that.$props.item.container || window)
        .on("scroll", this.scrollHandle);
    });
  },
  methods: {
    scrollHandle() {
      let that = this;
      let top = that.$uic
        .query(that.$props.item.container || window)
        .scrollTop();
      /* this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => { */
      let arr = that.listItems,
        current = false;
      for (let i = 0; i < arr.length; i++) {
        let nextEle = arr[i + 1];
        if (top >= arr[i].top && top < ((nextEle && nextEle.top) || Infinity)) {
          current = arr[i];
          break;
        }
      }

      console.log(top, current);
      current && (that.current = current);

      /* that.$uic
            .query(that.$props.item.container || window)
            .offset(that.current.top) */
      /* }, 500); */
    },
    getListItem(data, bool) {
      let arr = data,
        len = arr.length;
      for (let i = 0; i < len; i++) {
        if (!bool) {
          arr[i] = { ...arr[i], index: i };
          if (arr[i].children) {
            this.getListItem(arr[i].children.data);
          }
        } else {
          let top = this.$uic.query("#" + this.listItems[i].id).offset().top,
            inkTop = this.$uic
              .query("#ink_" + this.listItems[i].id)
              .offset().top;
          arr[i] = { ...arr[i], top: top, inkTop: inkTop };
          if (arr[i].children) {
            this.getListItem(arr[i].children.data, true);
          }
        }
      }
      console.log(arr);
      return arr;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_anchor {
  padding-left: (2 / @base);
  position: relative;
  .ui_anchor_ink {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    &::before {
      content: " ";
      position: relative;
      width: 2px;
      height: 100%;
      display: block;
      background-color: #e8eaec;
      margin: 0 auto;
    }
    .ui_anchor_ink_ball {
      display: inline-block;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 2px solid #2d8cf0;
      background-color: #fff;
      left: 50%;
      transition: top 0.2s ease-in-out;
      transform: translate(-50%, 2px);
    }
  }
  .ui_anchor_content {
    padding: (8 / @base) 0 (8 / @base) (16 / @base);
    line-height: 1;
    font-size: @miniFont;
    .title {
      padding: (5 / @base) 0;
      &.on {
        color: @red;
      }
    }
  }
}
</style>
