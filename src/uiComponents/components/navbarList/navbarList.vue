<template>
  <div class="ui_navbar_list">
    <h1 class="ui_navbar_list_header" v-if="item.title">
      <div class="ui_navbar_list_header_title">{{ item.title }}</div>
      <div class="ui_navbar_list_header_slogan">
        {{ item.slogan }}
      </div>
      <div class="ui_navbar_list_header_more">
        <slot name="navbarHeaderRight" :item="item"></slot>
      </div>
    </h1>
    <div class="ui_navbar_list_content">
      <div
        class="ui_navbar_list_content_item"
        v-for="(sitem, index) in item.data"
        :key="'navbarList_item_' + index"
      >
        <ui-link :item="{ url: sitem.router }">
          <template #content>
            <ui-image :item="{ image: sitem.image, fit: 'contain' }"></ui-image>
            <article>
              <header>
                <h1>{{ sitem.title }}</h1>
              </header>
              <p>{{ sitem.desc }}</p>
            </article>
          </template>
        </ui-link>
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
    return {};
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_navbar_list {
  background-color: #fff;
  overflow: hidden;
  clear: both;
  h1 {
    &.ui_navbar_list_header {
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
        &.ui_navbar_list_header_title {
          width: 25%;
          line-height: (14 / @base);
          overflow: hidden;
        }
        &.ui_navbar_list_header_slogan {
          width: 65%;
          font-size: (12 / @base);
          line-height: (14 / @base);
          color: #999;
          margin: 0 0 0 (10 / @base);
          font-weight: 400;
        }
        &.ui_navbar_list_header_more {
          font-size: (12 / @base);
          font-weight: 400;
        }
      }
    }
  }
  .ui_navbar_list_content {
    padding: 0 (7.5 / @base);
    .ui_navbar_list_content_item {
      width: 48.4%;
      float: left;
      text-align: left;
      margin: (5 / @base) (2.5 / @base);
      a {
        text-decoration: none;
        color: #333;
        .ui_image {
          width: 100%;
          height: (84 / @base);
          border-radius: (5 / @base);
          background-color: #efefef;
          overflow: hidden;
        }
        article {
          header {
            h1 {
              font-size: (14 / @base);
              font-weight: 500;
              padding: (5 / @base) 0;
              margin: 0;
            }
          }
          p {
            font-size: (10 / @base);
            color: #ccc;
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
