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
@import "../../style/common.less";
.ui_price_notice {
  margin: @marginTop 0 @marginBottom 0;
  clear: both;
  &.black {
    .ui_price_notice_content {
      .ui_price_notice_content_item {
        a {
          text-decoration: none;
          article {
            header {
              h1 {
                background-color: @lightBlack;
                color: @white;
                padding: (5 / @base);
                margin: 0;
              }
              p {
                color: @lightBlack;
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
      font-size: @baseFont;
      line-height: @baseFont;
      text-align: left;
      padding: @paddingAll;
      border-bottom: (1 / @base) solid @lightGrey;
      display: flex;
      overflow: hidden;
      color: @lightBlack;
      font-weight: 400;
      margin: 0;
      div {
        width: 10%;
        &.ui_price_notice_header_title {
          width: 25%;
          line-height: @baseFont;
          overflow: hidden;
          height: (15 / @base);
        }
        &.ui_price_notice_header_slogan {
          width: 65%;
          font-size: @miniFont;
          line-height: @baseFont;
          color: @moreGrey;
          margin: 0 0 0 @marginLeft;
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
              font-size: @miniFont;
              padding: (5 / @base);
              background-color: @lightGrey;
              color: @lightBlack;
              border-radius: @baseRadius;
              font-weight: 400;
              margin: 0;
            }
            p {
              margin: (5 / @base) 0 0;
              font-size: @miniFont;
              color: @moreGrey;
              padding: 0;
              span {
                margin: 0 0 0 (5 / @base);
                &.red {
                  color: @red;
                }
                &.green {
                  color: @green;
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
