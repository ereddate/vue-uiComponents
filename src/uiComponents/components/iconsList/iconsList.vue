<template>
  <div class="ui_icons_list">
    <div class="ui_icons_list_top" :ref="'icons_' + item.index">
      <div
        class="ui_icons_list_content"
        :style="{
          width:
            (80 * item.data.length + item.data.length * 10) /
              (item.rowCount || 1) /
              23.44 +
            'rem',
          height: 80 / 23.44 + 'rem',
          margin:
            item.rowCount > 1 && scrollWidth <= screenWidth
              ? '0 0 0 ' + item.offset / 23.44 + 'rem'
              : '',
        }"
      >
        <div
          class="ui_icons_list_item"
          v-for="(icon, index) in item.data"
          :key="'icon_index_' + index"
        >
          <a :href="icon.url" target="_blank">
            <ui-image
              :item="{ image: icon.image, lazyload: item.lazyload || true }"
              v-if="icon.image"
            ></ui-image>
            <ui-icon :item="{ icon: icon.icon }" v-else></ui-icon>
            <p>{{ icon.title }}</p>
          </a>
        </div>
      </div>
    </div>
    <div
      class="ui_icons_list_indicators"
      :ref="'icon_indicators_' + item.index"
    >
      <div
        class="ui_icons_list_indicators_dock"
        :class="scrollWidth <= screenWidth && 'disabled'"
        :ref="'icon_indicators_dock_' + item.index"
        :style="{ left: iconDockLeft / 23.44 + 'rem' }"
      ></div>
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
      iconDockLeft: 0,
      scrollWidth: 0,
      screenWidth: 0,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(function () {
        let dom = this.$refs["icons_" + this.$props.item.index],
          that = this;
        that.scrollWidth = dom.scrollWidth;
        that.screenWidth = screen.width;
        dom.addEventListener("scroll", function (e) {
          let dockParent =
              that.$refs["icon_indicators_" + that.$props.item.index],
            dock = that.$refs["icon_indicators_dock_" + that.$props.item.index];
          let left = e.srcElement.scrollLeft,
            scrollWidth = e.srcElement.scrollWidth,
            width = e.srcElement.offsetWidth;
          that.iconDockLeft =
            (dockParent.offsetWidth - dock.offsetWidth) *
            (left / (scrollWidth - width));
        });
      });
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_icons_list {
  position: relative;
  padding: 0 0 (20 / @base) 0;
  background-color: @white;
  .ui_icons_list_top {
    padding: @paddingTop 0 @paddingBottom 0;
    overflow: scroll;
    overflow-y: hidden;
    .ui_icons_list_content {
      .ui_icons_list_item {
        float: left;
        margin: (5 / @base);
        box-shadow: @easyboxshadow;
        border-radius: @baseRadius;
        padding: 0;
        overflow: hidden;
        &:first-child {
          margin: (5 / @base) (5 / @base) 0 (5 / @base);
        }
        &:last-child {
          margin: (5 / @base) (5 / @base) 0 (5 / @base);
        }
        a {
          display: block;
          text-align: center;
          text-decoration: none;
          color: @lightBlack;
          .ui_image {
            width: (80 / @base);
            height: (80 / @base);
            background-color: @grey;
          }
          .ui_icon {
            width: (80 / @base);
            height: (40 / @base);
            line-height: (40 / @base);
          }
          p {
            font-size: @baseFont;
            padding: (5 / @base) 0;
            margin: 0;
          }
        }
      }
    }
  }
  .ui_icons_list_indicators {
    background-color: @lightGrey;
    border-radius: (20 / @base);
    height: (5 / @base);
    position: absolute;
    bottom: (10 / @base);
    left: 40%;
    right: 40%;
    overflow: hidden;
    .ui_icons_list_indicators_dock {
      height: (5 / @base);
      border-radius: (20 / @base);
      background-color: chocolate;
      width: 20%;
      position: absolute;
      top: 0;
      &.disabled {
        background-color: @moreGrey;
      }
    }
  }
}
</style>
