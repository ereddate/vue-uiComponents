<template>
  <div class="ui_dropdown_item">
    <div class="title" @click="showMenuHandle">
      <span class="text" :class="isShow && 'select'">{{ selected.text }}</span
      ><ui-icon
        :item="{
          icon: 'arrow-up-bold',
          style: {
            transform: isShow ? 'rotate(0deg)' : 'rotate(180deg)',
            color: isShow ? '#ff0033' : '#cccccc',
          },
        }"
      ></ui-icon>
    </div>
    <div class="back" v-if="isShow" :style="{ top: top / 23.44 + 'rem' }"></div>
    <div
      class="list animate__animated animate__fadeInDown"
      v-if="isShow"
      :style="{
        'transition-duration': '0.2s',
        transition: 'transform 0.3s',
        top: top / 23.44 + 'rem',
      }"
    >
      <div
        class="list_item"
        v-for="(cell, index) in item.data"
        :class="selected.index === index && 'select'"
        :key="index"
        @click="selectItemHandle(index)"
      >
        <span class="text">{{ cell.text }}</span>
        <ui-icon
          :item="{ icon: 'select' }"
          v-if="selected.index === index"
        ></ui-icon>
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
      selected: {
        index: 0,
      },
      isShow: false,
      top: 0,
    };
  },
  created() {
    this.selected = { ...this.$props.item.data[0], index: 0 };
  },
  watch: {
    isShow(v) {
      if (v) {
        this.$uic.query(window).on("scroll", this.scrollHandle).scroll();
      } else {
        this.$uic.query(window).off("scroll");
      }
    },
  },
  beforeDestroy() {
    this.$uic.query(window).off("scroll");
  },
  methods: {
    scrollHandle() {
      let top =
        this.$uic.query(this.$el).offset().top -
        this.$uic.query(document).scrollTop();
      this.top = top + 40;
    },
    showMenuHandle() {
      this.isShow = this.isShow ? false : true;
      if (this.isShow) {
        let top = this.$uic.query(this.$el).offset().top;
        this.top = top + 40;
        // this.$uic.query("html").addClass("dialog");
      } else {
        //this.$uic.query("html").removeClass("dialog");
      }
    },
    selectItemHandle(v) {
      this.selected = { ...this.$props.item.data[v], index: v };
      this.isShow = false;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_dropdown_item {
  position: relative;
  font-size: @baseFont;
  display: block;
  flex: 1;
  min-height: (43 / @base);
  .title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: @miniFont (20 / @base);
    display: inline-block;
    background-color: @white;
    display: flex;
    z-index: 98;
    .text {
      flex: 1;
      text-align: center;
      font-size: @baseFont;
      &.select {
        color: @red;
      }
    }
    .ui_icon {
      font-size: @miniFont;
      line-height: @moreFont;
    }
  }
  .back {
    position: fixed;
    top: (44 / @base);
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 97;
  }
  .list {
    box-shadow: @easyboxshadow;
    position: fixed;
    top: (44 / @base);
    left: 0;
    right: 0;
    z-index: 97;
    background-color: @white;
    padding: @paddingTop @paddingRight @paddingBottom @paddingLeft;
    .list_item {
      padding: @paddingTop @paddingRight @paddingBottom @paddingLeft;
      display: flex;
      border-bottom: (1 / @base) @lightGrey solid;
      &:last-child {
        border: 0;
      }
      .text {
        flex: 1;
      }
      &.select {
        color: @red;
      }
    }
  }
}
.animate__fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 0.5;
    -webkit-transform: translate3d(0, -10%, 0);
    transform: translate3d(0, -10%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0.5;
    -webkit-transform: translate3d(0, -10%, 0);
    transform: translate3d(0, -10%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
