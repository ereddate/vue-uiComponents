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
@base: 23.44rem;
.ui_multip_navbar {
  background-color: #fff;
  clear: both;
  padding: (5 / @base) 0;
  h1 {
    &.ui_multip_navbar_header {
      font-size: (14 / @base);
      line-height: (14 / @base);
      text-align: left;
      padding: (10 / @base) (10 / @base);
      display: flex;
      height: (15 / @base);
      overflow: hidden;
      margin: (5 / @base) 0 0;
      div {
        width: 10%;
        &.ui_multip_navbar_header_title {
          width: 25%;
          line-height: (14 / @base);
          overflow: hidden;
        }
        &.ui_multip_navbar_header_slogan {
          width: 65%;
          font-size: (12 / @base);
          line-height: (14 / @base);
          color: #999;
          margin: 0 0 0 (10 / @base);
          font-weight: 400;
        }
        &.ui_multip_navbar_header_more {
          font-size: (12 / @base);
          font-weight: 400;
        }
      }
    }
  }
  .ui_multip_navbar_content {
    display: flex;
    text-align: left;
    .ui_multip_navbar_item {
      box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
      position: relative;
      padding: (5 / @base) (10 / @base) (20 / @base) (10 / @base);
      margin: 0 (5 / @base);
      background-color: #ccc;
      border-radius: (5 / @base);
      &:first-child {
        margin: 0 (2.5 / @base) 0 (10 / @base);
      }
      &:last-child {
        margin: 0 (10 / @base) 0 (2.5 / @base);
      }
      &.red {
        background-color: #903749;
        a {
          color: #fff;
        }
      }
      &.blue {
        background-color: #28527a;
        a {
          color: #fff;
        }
      }
      &.yellow {
        background-color: #fb743e;
        a {
          color: #333;
        }
      }
      &.green {
        background-color: #07c160;
        a {
          color: #fff;
        }
      }
      a {
        text-decoration: none;
        header {
          h1 {
            font-size: (14 / @base);
            font-weight: 500;
            padding: 0;
            margin: 0;
          }
        }
        p {
          font-size: (10 / @base);
          height: (30 / @base);
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
          padding: 0;
          margin: 0;
        }
        .ui_icon {
          font-size: (14 / @base);
          position: absolute;
          bottom: (8 / @base);
          right: (10 / @base);
        }
      }
    }
  }
}
</style>
