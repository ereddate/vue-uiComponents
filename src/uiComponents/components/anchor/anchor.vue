<template>
  <div class="ui_anchor">
    <div class="ui_anchor_ink">
      <span
        class="ui_anchor_ink_ball"
        :style="{ top: current.inkTop + 'px' }"
      ></span>
    </div>
    <div class="ui_anchor_content">
      <div
        class="item"
        v-for="(anchor, index) in item.data"
        :key="index"
        :id="'ink_' + anchor.id"
      >
        <span class="title" @click="goClickHandle" :index="index">{{
          anchor.title
        }}</span>
        <ui-anchor-link
          :item="{
            ...anchor.children,
            clickHandle: linkClickHandle,
            index: index,
          }"
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
      current: {
        inkTop: 8,
      },
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
    goClickHandle(e) {
      let index = this.$uic.query(e.target).attr("index");
      this.linkClickHandle(this.$props.item.data[index]);
    },
    linkClickHandle(v) {
      for (let i = 0; i < this.listItems.length; i++) {
        if (
          v.title === this.listItems[i].title &&
          v.id === this.listItems[i].id
        ) {
          this.$uic
            .query(this.$props.item.container || window)
            .scrollTop(this.listItems[i].top);
          break;
        }
      }
    },
    scrollHandle() {
      let that = this;
      let top = that.$uic
        .query(that.$props.item.container || window)
        .scrollTop();
      let arr = that.listItems,
        current = false;
      for (let i = 0; i < arr.length; i++) {
        let nextEle = arr[i + 1];
        if (top < arr[i].top && i === 0) {
          current = arr[i];
          break;
        } else if (
          top >= arr[i].top &&
          top < ((nextEle && nextEle.top) || Infinity)
        ) {
          current = arr[i];
          break;
        }
      }

      current && (that.current = current);
    },
    getListItem(data, bool) {
      let arr = [...data],
        len = arr.length;
      for (let i = 0; i < len; i++) {
        if (!bool) {
          arr[i] = { ...arr[i], index: i };
          if (arr[i].children) {
            let a = this.getListItem(arr[i].children.data);
            for (let n = 0; n < a.length; n++) arr.splice(i + 1, 0, a[n]);
          }
        } else {
          let top = this.$uic.query("#" + this.listItems[i].id).offset().top,
            inkTop = this.$uic
              .query("#ink_" + this.listItems[i].id)
              .offset().top;
          arr[i] = {
            ...arr[i],
            top: top,
            inkTop: inkTop - this.$props.item.offsetTop,
          };
        }
      }
      // console.log(arr);
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
