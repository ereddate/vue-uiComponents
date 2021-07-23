<template>
  <div class="ui_crumbs">
    <div class="ui_crumbs_content">
      <div class="item" v-for="(crumbs, index) in item.data" :key="index">
        <div class="item_dot" v-if="crumbs.url">
          <ui-link :item="{ url: crumbs.url }">
            <template #content>
              <ui-icon
                :item="{ icon: crumbs.icon || 'map-filling' }"
                v-if="crumbs.icon"
              ></ui-icon>
              <span class="text">{{ crumbs.text }}</span>
              <ui-icon :item="{ icon: 'arrow-right-bold' }"></ui-icon>
            </template>
          </ui-link>
        </div>
        <div v-else class="item_dot">
          <ui-icon
            :item="{ icon: crumbs.icon || 'map-filling' }"
            v-if="crumbs.icon"
          ></ui-icon>
          <span class="text">{{ crumbs.text }}</span>
          <ui-icon :item="{ icon: 'arrow-right-bold' }"></ui-icon>
        </div>
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
@import "../../style/common.less";
.ui_crumbs {
  .ui_crumbs_content {
    display: flex;
    padding: @paddingAll;
    background-color: @white;
    .item {
      display: inline-block;
      margin: 0 @marginRight 0 0;
      border-radius: @largeRadius;
      font-size: @miniFont;
      background-color: @lightGrey;
      .item_dot {
        .flexCenter;
        padding: (2 / @base) (5 / @base);
        a {
          .flexCenter;
        }
        .text {
          margin: 0 (3 / @base);
        }
        .ui_icon {
          padding: (1 / @base);
          font-size: @spotFont;
          border-radius: 50%;
          width: (12 / @base);
          height: (12 / @base);
          overflow: hidden;
          line-height: (14 / @base);
          &:first-child {
            color: @white;
            background-color: #000;
          }
        }
      }
    }
  }
}
</style>
