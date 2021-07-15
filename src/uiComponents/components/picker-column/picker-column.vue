<template>
  <div
    class="ui_picker_column"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  >
    <div class="back">
      <div class="back_content"></div>
    </div>
    <div class="ui_picker_column_content">
      <ul
        class="list"
        :style="{
          transform: 'translate3d(0px, ' + scrollValue + 'px, 0px)',
          'transition-duration': '0ms',
          'transition-property': 'none',
        }"
      >
        <li
          class="item"
          v-for="(cell, index) in item.data"
          :key="index"
          :class="getIndex() && getIndex().index === index && 'selected'"
          @click="pickerItemClickHandle(index)"
        >
          <div class="ellipsis">{{ cell.title }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "picker-column",
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
      scrollValue: 0,
      lastValue: 0,
      listItemDot: [],
      selected: {},
      touch: {
        startX: 0,
        startY: 0,
        x: 0,
        y: 0,
        endX: 0,
        endY: 0,
      },
    };
  },
  created() {
    this.lastValue = parseFloat("-" + (this.$props.item.data.length - 1) * 44);
    this.listItemDot = [];
    for (let i = 0; i < this.$props.item.data.length; i++)
      this.listItemDot.push({
        y: parseFloat("-" + i * 44),
        title: this.$props.item.data[i].title,
        data: this.$props.item.data[i],
      });
    this.selected = {
      ...this.getIndex(this.scrollValue),
      pickerid: this.$props.item.index || 0,
    };
    //console.log(this.listItemDot);
  },
  methods: {
    pickerItemClickHandle(v) {
      this.scrollValue = this.listItemDot[v].y;
      this.selected = {
        ...this.getIndex(this.scrollValue),
        pickerid: this.$props.item.index || 0,
      };
    },
    getIndex(v) {
      //console.log(v);
      if (v) {
        return {
          index: v,
          y: this.listItemDot[v].y,
          title: this.listItemDot[v].title,
        };
      }
      for (let i = 0; i < this.listItemDot.length; i++) {
        if (
          this.scrollValue >= this.listItemDot[i].y - 43 &&
          this.scrollValue <= this.listItemDot[i].y
        ) {
          return {
            index: i,
            y: this.listItemDot[i].y,
            title: this.listItemDot[i].title,
          };
        }
      }
      return false;
    },
    touchstart(e) {
      // console.log(e.touches);
      let touch = e.touches[0];
      this.touch.startX = touch.clientX;
      this.touch.startY = this.scrollValue + touch.clientY;
    },
    touchmove(e) {
      //console.log(e.touches);
      let touch = e.touches[0];
      this.touch.x = touch.clientX;
      this.touch.y = touch.clientY;
      this.touch.endY = this.touch.startY - this.touch.y;

      if (this.touch.endY >= 0) {
        this.scrollValue = 0;
      } else if (this.touch.endY <= this.lastValue) {
        this.scrollValue = this.lastValue;
      } else {
        this.scrollValue = this.touch.endY;
      }
    },
    touchend() {
      let v = this.getIndex();
      if (v) {
        this.scrollValue = v.y;
        this.selected = {
          ...this.selected,
          pickerid: this.$props.item.index || 0,
        };
        this.$props.item.changeHandle &&
          this.$props.item.changeHandle(this.selected);
      }
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_picker_column {
  height: (264 / @base);
  font-size: (14 / @base);
  position: relative;
  cursor: grab;
  overflow: hidden;
  .back {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    .back_content {
      position: absolute;
      left: 0;
      top: (110 / @base);
      right: 0;
      z-index: 3;
      height: (44 / @base);
      border-top: (1 / @base) #efefef solid;
      border-bottom: (1 / @base) #efefef solid;
    }
  }
  .ui_picker_column_content {
    width: 100%;
    height: 44px;
    position: absolute;
    left: 0;
    top: 110px;
    z-index: 3;
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      &.list {
        transition-timing-function: cubic-bezier(0.23, 1, 0.68, 1);
      }
      li {
        padding: 0;
        margin: 0;
        &.item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: (44 / @base);
          color: #ccc;
          &.selected {
            color: #333;
            font-size: (18 / @base);
          }
          .ellipsis {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
