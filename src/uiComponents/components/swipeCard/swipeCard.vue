<template>
  <div class="ui_swipe_card" v-if="item.data.length > 0">
    <ui-card>
      <template #content>
        <div
          class="ui_swipe_card_content"
          :style="{ height: 160 / 23.44 + 'rem' }"
        >
          <div
            class="ui_swipe_card_items"
            :style="{
              width: 375 / 23.44 + 'rem',
              height: 160 / 23.44 + 'rem',
            }"
            @touchstart="touchstartHandle"
            @touchmove="touchmoveHandle"
            @touchend="touchendHandle"
          >
            <div
              class="items"
              :style="{
                width: ((355 + 5) * item.data.length + 80) / 23.44 + 'rem',
                height: 160 / 23.44 + 'rem',
                transform: 'translateX(-' + scrollLeft / 23.44 + 'rem)',
                transition: 'all 0.3s ease 0s',
              }"
            >
              <div
                class="item"
                :style="{
                  width: 355 / 23.44 + 'rem',
                  height: 160 / 23.44 + 'rem',
                }"
                v-for="(card, index) in item.data"
                :key="index"
              >
                <slot name="item" :item="{ ...card, index: index }"></slot>
              </div>
            </div>
          </div>
          <div class="logo" v-if="item.avatar">
            <ui-avatar :item="{ ...item.avatar, type: 'large' }"></ui-avatar>
          </div>
          <div class="handle" v-if="item.avatar">
            <ui-button
              :item="{
                text: '关注',
                class: 'primary',
                clickHandle: buttonClickHandle,
              }"
            ></ui-button>
          </div>
        </div>
        <div
          class="ui_swipe_card_content bottom"
          :style="{ paddingTop: item.avatar ? 30 / 23.44 + 'rem' : '0rem' }"
        >
          <div class="dots">
            <span
              class="dot"
              v-for="(dot, index) in item.data"
              :key="index"
              :class="current === index && 'on'"
            ></span>
          </div>
          <slot name="content"></slot>
        </div>
      </template>
    </ui-card>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          data: [],
        };
      },
    },
  },
  data() {
    return { dot: [], scrollLeft: 0, current: 0 };
  },
  mounted() {
    let width = this.$uic.query(".items").width();
    this.dot.push(0);
    for (let i = 0; i < width; i++) {
      if ((i + 375) % 365 === 0) {
        this.dot.push(i);
      }
    }
  },
  methods: {
    buttonClickHandle() {
      this.$props.item.buttonClichHandle &&
        this.$props.item.buttonClichHandle(this.$props.item.avatar);
    },
    touchstartHandle(e) {
      let touch = e.touches[0];
      this.startX = touch.pageX;
      this.startY = touch.pageY;
    },
    touchmoveHandle(e) {
      let touch = e.touches[0];
      this.endX = touch.pageX;
      this.endY = touch.pageY;
    },
    touchendHandle() {
      let a = this.startX - this.endX;
      let dots = this.getCurrentPage(this.scrollLeft + a, a > 0 ? false : true);
      this.scrollLeft = dots.dot === 0 ? dots.dot : dots.dot + 10;
      this.current = dots.index;
    },
    getCurrentPage(v, bool) {
      let len = this.dot.length - 1,
        index = 0,
        dot = 0;
      for (let i = 0; i < len; i++) {
        let nextEle = this.dot[i + 1];
        if (!bool && this.dot[i] >= v && v < (nextEle || Infinity)) {
          dot = this.dot[i];
          index = i;
          break;
        } else if (bool && v >= this.dot[i] && v < (nextEle || Infinity)) {
          dot = this.dot[i];
          index = i;
          break;
        }
      }
      return { dot, index: index };
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_swipe_card {
  position: relative;
  .ui_swipe_card_items {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    .item {
      float: left;
      margin: 0 (5 / @base);
      border-top-left-radius: (5 / @base);
      border-top-right-radius: (5 / @base);
      overflow: hidden;
      &:first-child {
        margin: 0 (5 / @base) 0 (10 / @base);
      }
      &:last-child {
        margin: 0 (10 / @base) 0 (5 / @base);
      }
    }
  }
  .ui_swipe_card_content {
    &.bottom {
      padding: (30 / @base) 0 0;
      position: relative;
    }
    .dots {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-content: center;
      .dot {
        width: (5 / @base);
        height: (5 / @base);
        background-color: @moreGrey;
        border-radius: 50%;
        margin: 0 (2.5 / @base);
        &.on {
          background-color: @green;
        }
      }
    }
    .logo {
      position: absolute;
      top: (115 / @base);
      left: (30 / @base);
      padding: @paddingAll;
      background-color: @white;
      border-radius: 50%;
    }
    .handle {
      position: absolute;
      top: (165 / @base);
      right: (30 / @base);
    }
  }
}
</style>
