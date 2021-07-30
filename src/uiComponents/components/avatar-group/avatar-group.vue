<template>
  <div class="ui_avatar_group">
    <div class="ui_avatar_group_content">
      <div
        class="item"
        :class="index >= 3 && 'more'"
        v-for="(avatar, index) in item.data"
        :key="index"
      >
        <ui-avatar
          :item="{ ...avatar, type: 'small' }"
          v-if="index < 3"
        ></ui-avatar>
      </div>
      <div v-if="item.data.length > 3" class="item_more">
        +{{ item.data.length - 4 }}
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
.ui_avatar_group {
  .ui_avatar_group_content {
    display: flex;
    padding: 0 0 0 (16 / @base);
    .item {
      margin: 0 0 0 (-16 / @base);
      .ui_avatar {
        border-radius: 50%;
        border: (1 / @base) @white solid;
      }
      &.more {
        display: none;
      }
    }
    .item_more {
      width: (32 / @base);
      height: (32 / @base);
      border-radius: @moreRadius;
      overflow: hidden;
      .flexCenter;
      margin: 0 0 0 (-16 / @base);
      background-color: @green;
      color: @white;
    }
  }
}
</style>
