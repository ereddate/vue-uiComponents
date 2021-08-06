<template>
  <div class="ui_result">
    <div class="ui_result_content">
      <div class="icon" :class="item.type || 'success'">
        <ui-icon :item="{ icon: getIcon(item.type).icon }"></ui-icon>
      </div>
      <div class="title">
        {{ item.title || getIcon(item.type).defaultTitle }}
        <p>{{ item.desc || getIcon(item.type).defaultDesc }}</p>
      </div>
      <ui-button
        :item="{
          text: '返回',
          class: 'primary',
          clickHandle: buttonClickHandle,
        }"
      ></ui-button>
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
  methods: {
    getIcon(type) {
      let result = {
        icon: "",
        defaultTitle: "",
        defaultDesc: "",
      };
      switch (type) {
        case "success":
          result.icon = "success-result";
          result.defaultTitle = "成功提示";
          result.defaultDesc = "请根据提示进行操作";
          break;
        case "warning":
          result.icon = "warning-result";
          result.defaultTitle = "警告提示";
          result.defaultDesc = "请根据提示进行操作";
          break;
        case "error":
          result.icon = "error-result";
          result.defaultTitle = "失败提示";
          result.defaultDesc = "请根据提示进行操作";
          break;
        case "info":
          result.icon = "help-result";
          result.defaultTitle = "信息提示";
          result.defaultDesc = "请根据提示进行操作";
          break;
      }
      return result;
    },
    buttonClickHandle() {
      this.$props.item.clickHandle && this.$props.item.clickHandle();
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_result {
  padding: @paddingAll;
  .ui_result_content {
    .flexCenter;
    flex-direction: column;
    font-size: @baseFont;
    .title {
      .flexCenter;
      flex-direction: column;
      color: @grey;
      p {
        padding: @paddingAll;
        color: @lightBlack;
      }
    }
    .icon {
      width: (48 / @base);
      height: (48 / @base);
      margin: @marginAll;
      .flexCenter;
      border-radius: 50%;
      .iconfont {
        font-size: (48 / @base);
      }
      &.success {
        color: @green;
      }
      &.warning {
        color: @yellow;
      }
      &.error {
        color: @red;
      }
      &.info {
        color: @moreGrey;
      }
    }
  }
}
</style>
