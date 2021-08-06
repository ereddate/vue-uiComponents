<template>
  <div class="ui_multip_navbar">
    <h1 class="ui_multip_navbar_header" v-if="item.title">
      <div class="ui_multip_navbar_header_title">{{ item.title }}</div>
      <div class="ui_multip_navbar_header_slogan">
        {{ item.slogan }}
      </div>
      <div class="ui_multip_navbar_header_more">
        <slot name="multipNavbarHeaderRight" :item="item"></slot>
      </div>
    </h1>
    <div class="ui_multip_navbar_content">
      <article
        class="ui_multip_navbar_item"
        v-for="(sitem, index) in item.data"
        :key="'multipnavbar_item_' + index"
        :class="sitem.color"
        :style="{ width: (100 / item.data.length).toFixed(2) + '%' }"
        v-show="index < 3"
      >
        <ui-link :item="{ url: sitem.router }">
          <template #content>
            <header>
              <h1>{{ sitem.title }}</h1>
            </header>
            <p>{{ sitem.desc }}</p>
            <ui-icon :item="{ icon: sitem.icon }"></ui-icon>
          </template>
        </ui-link>
      </article>
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
    return {};
  },
  mounted() {},
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_multip_navbar {
  background-color: @white;
  clear: both;
  padding: (5 / @base) 0;
  h1 {
    &.ui_multip_navbar_header {
      font-size: @baseFont;
      line-height: @baseFont;
      text-align: left;
      padding: @paddingAll;
      display: flex;
      height: (15 / @base);
      overflow: hidden;
      margin: (5 / @base) 0 0;
      div {
        width: 10%;
        &.ui_multip_navbar_header_title {
          width: 25%;
          line-height: @baseFont;
          overflow: hidden;
        }
        &.ui_multip_navbar_header_slogan {
          width: 65%;
          font-size: @miniFont;
          line-height: @baseFont;
          color: @grey;
          margin: 0 0 0 @marginLeft;
          font-weight: 400;
        }
        &.ui_multip_navbar_header_more {
          font-size: @miniFont;
          font-weight: 400;
        }
      }
    }
  }
  .ui_multip_navbar_content {
    display: flex;
    text-align: left;
    .ui_multip_navbar_item {
      box-shadow: @easyboxshadow;
      position: relative;
      padding: (5 / @base) @paddingRight (20 / @base) @paddingLeft;
      margin: 0 (5 / @base);
      background-color: @moreGrey;
      border-radius: @baseRadius;
      &:first-child {
        margin: 0 (2.5 / @base) 0 @marginLeft;
      }
      &:last-child {
        margin: 0 @marginRight 0 (2.5 / @base);
      }
      &.red {
        background-color: @red;
        a {
          color: @white;
        }
      }
      &.blue {
        background-color: @blue;
        a {
          color: @white;
        }
      }
      &.yellow {
        background-color: @yellow;
        a {
          color: @lightBlack;
        }
      }
      &.green {
        background-color: @green;
        a {
          color: @white;
        }
      }
      a {
        text-decoration: none;
        header {
          h1 {
            font-size: @baseFont;
            font-weight: 500;
            padding: 0;
            margin: 0;
          }
        }
        p {
          font-size: @miniFont;
          height: (30 / @base);
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
          padding: 0;
          margin: 0;
        }
        .ui_icon {
          font-size: @baseFont;
          position: absolute;
          bottom: (8 / @base);
          right: (10 / @base);
        }
      }
    }
  }
}
</style>
