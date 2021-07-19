<template>
  <div class="ui_tab" ref="tabs" v-if="item.data">
    <div
      class="ui_tab_header"
      :class="item.isHeaderFixed && isFixed ? 'fixed' : ''"
    >
      <div
        class="ui_tab_header_content_more_menu animate__animated"
        :class="moreIsShow && 'animate__slideInDown'"
        v-if="moreIsShow"
        :style="{ top: 47 / 23.44 + 'rem' }"
        ref="tab_more_menu"
      >
        <div
          class="ui_tab_header_content_more_menu_item"
          v-for="(mtab, index) in item.data"
          :key="'mtab_index_' + index"
          @click="tabClickHandle(index, mtab)"
          :class="active === index ? 'on' : ''"
          :ref="'mtab_index_' + index"
        >
          {{ mtab.title }}
        </div>
      </div>
      <div class="ui_tab_header_bear">
        <div class="ui_tab_header_panel">
          <div
            class="ui_tab_header_content"
            :style="{
              width: (item.data.length * 60) / 23.44 + 'rem',
              height: 46 / 23.44 + 'rem',
            }"
          >
            <div
              class="ui_tab_header_item"
              v-for="(tab, index) in item.data"
              :key="'tab_index_' + index"
              @click="tabClickHandle(index, tab)"
              :class="active === index ? 'on' : ''"
            >
              {{ tab.title }}
            </div>
          </div>
        </div>
        <div class="ui_tab_header_content_more">
          <div
            @click="moreClickHandle"
            class="ui_tab_header_content_more_button"
            :class="moreIsShow && 'on'"
          >
            <ui-icon
              :item="{
                icon: !moreIsShow ? 'arrow-down-bold' : 'arrow-up-bold',
              }"
            ></ui-icon>
          </div>
        </div>
      </div>
    </div>
    <div
      class="ui_tab_content"
      :ref="'tab_content_' + index"
      v-for="(tab, index) in item.data"
      :key="'tabcontent_index' + index"
      v-show="active === index"
    >
      <slot
        name="content"
        :tabItem="tab"
        :index="index"
        :active="active"
      ></slot>
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
      active: 0,
      activeTabItem: {},
      moreIsShow: false,
      isFixed: false,
      top: 0,
    };
  },
  mounted() {
    let that = this;
    this.$uic.query(window).on("scroll", function (e) {
      that.scrollHandle(e);
    });
  },
  watch: {
    active(v) {
      let that = this;
      that.$uic.query(".ui_tab_header_panel").animate(
        {
          scrollLeft: that.$uic.query(".ui_tab_header_item").eq(v).offset()
            .left,
        },
        "fast"
      );
    },
  },
  beforeDestroy() {
    this.$uic.query(window).off("scroll");
  },
  methods: {
    scrollHandle(e) {
      let top = (e.target.documentElement || e.target.body).scrollTop,
        domTop = this.$uic.query(".ui_tab").offset().top;
      if (top >= domTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    tabClickHandle() {
      this.active = arguments[0];
      this.activeTabItem = this.$props.item.data[arguments[0]];
      this.moreIsShow = false;
    },
    moreClickHandle() {
      this.moreIsShow = this.moreIsShow ? false : true;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_tab {
  position: relative;
  .ui_tab_header {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
    &.fixed {
      position: fixed;
    }
    .ui_tab_header_bear {
      z-index: 2;
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      .ui_tab_header_panel {
        overflow: scroll;
        overflow-y: hidden;
        width: 90%;
        .ui_tab_header_content {
          height: (46 / @base);
          .ui_tab_header_item {
            line-height: (46 / @base);
            float: left;
            font-size: (14 / @base);
            width: (60 / @base);
            text-align: center;
            &.on {
              border-bottom: (1 / @base) solid red;
            }
          }
        }
      }
      .ui_tab_header_content_more {
        width: 10%;
        line-height: (46 / @base);
        font-size: (14 / @base);
        .ui_tab_header_content_more_button {
          border-left: (1 / @base) solid #efefef;
          line-height: (23 / @base);
          margin: (12 / @base) 0;
          display: flex;
          justify-content: center;
          &.on {
            color: red;
          }
        }
      }
    }
  }
  .ui_tab_header_content_more_menu {
    z-index: 1;
    position: absolute;
    top: (48 / @base);
    left: 0;
    right: 0;
    overflow: scroll;
    overflow-x: hidden;
    background-color: #fff;
    text-align: left;
    padding: (5 / @base) (10 / @base);
    box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
    .ui_tab_header_content_more_menu_item {
      font-size: (14 / @base);
      padding: (10 / @base) 0;
      display: inline-block;
      padding: (5 / @base) (15 / @base);
      text-align: center;
      margin: (5 / @base) 0;
      border-radius: (5 / @base);
      &.on {
        border: (1 / @base) solid red;
        background-color: red;
        color: #fff;
      }
    }
  }
  .ui_tab_content {
    min-height: (500 / @base);
    padding: (46 / @base) 0 0;
  }

  @keyframes slideInDown {
    0% {
      transform: translate3d(0, -15%, 0);
      visibility: visible;
    }
  }
}
</style>
