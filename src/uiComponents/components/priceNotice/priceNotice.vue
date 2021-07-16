<template>
  <div class="ui_price_notice" :class="item.theme === 'black' && 'black'">
    <h1 class="ui_price_notice_header" v-if="item.title">
      <div class="ui_price_notice_header_title">{{ item.title }}</div>
      <div class="ui_price_notice_header_slogan">{{ item.slogan }}</div>
      <div><slot name="right"></slot></div>
    </h1>
    <div class="ui_price_notice_content">
      <ui-link
        :item="{ url: price.url }"
        v-for="(price, index) in item.data"
        :key="'groupPrice_index_' + index"
        class="ui_price_notice_content_item"
      >
        <template #content>
          <article>
            <header>
              <h1 class="animate__animated animate__zoomIn">
                {{ price.title }}
              </h1>
              <p>
                {{ price.unit
                }}<span :class="price.trend === 'up' ? 'green' : 'red'">{{
                  price.price
                }}</span>
              </p>
            </header>
          </article>
        </template>
      </ui-link>
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
.ui_price_notice {
  margin: (10 / @base) 0;
  clear: both;
  &.black {
    .ui_price_notice_content {
      .ui_price_notice_content_item {
        a {
          text-decoration: none;
          article {
            header {
              h1 {
                background-color: #333;
                color: #fff;
                padding: (5 / @base);
                margin: 0;
              }
              p {
                color: #333;
                padding: 0;
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
  h1 {
    &.ui_price_notice_header {
      height: (15 / @base);
      font-size: (14 / @base);
      line-height: (14 / @base);
      text-align: left;
      padding: (10 / @base) (10 / @base);
      border-bottom: (1 / @base) solid #efefef;
      display: flex;
      overflow: hidden;
      color: #333;
      font-weight: 400;
      margin: 0;
      div {
        width: 10%;
        &.ui_price_notice_header_title {
          width: 25%;
          line-height: (14 / @base);
          overflow: hidden;
          height: (15 / @base);
        }
        &.ui_price_notice_header_slogan {
          width: 65%;
          font-size: (12 / @base);
          line-height: (14 / @base);
          color: #ccc;
          margin: 0 0 0 (10 / @base);
          font-weight: 400;
        }
      }
    }
  }
  .ui_price_notice_content {
    .ui_price_notice_content_item {
      float: left;
      text-align: center;
      margin: (5 / @base) (2.5 / @base);
      width: (83.5 / @base);
      a {
        text-decoration: none;
        article {
          header {
            h1 {
              font-size: (12 / @base);
              padding: (5 / @base);
              background-color: #efefef;
              color: #333;
              border-radius: (5 / @base);
              font-weight: 400;
              margin: 0;
            }
            p {
              margin: (5 / @base) 0 0;
              font-size: (12 / @base);
              color: #ccc;
              padding: 0;
              span {
                margin: 0 0 0 (5 / @base);
                &.red {
                  color: #ce1212;
                }
                &.green {
                  color: #07c160;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
