<template>
  <div class="ui_comment">
    <div class="ui_comment_content">
      <ui-list :item="{ footer: true, header: true }">
        <template #header>
          <div class="ui_comment_header">共{{ item.total }}条评论</div>
        </template>
        <template #content>
          <div
            class="ui_comment_list"
            :style="{ height: item.height || 220 / 23.44 + 'rem' }"
          >
            <ui-list-item v-for="(comment, index) in item.data" :key="index">
              <template #content>
                <div class="ui_comment_list_item">
                  <ui-link :item="{ url: comment.user.url }">
                    <template #content>
                      <ui-avatar
                        :item="{
                          image: comment.user.image,
                          fit: 'cover',
                          type: 'small',
                        }"
                      ></ui-avatar>
                    </template>
                  </ui-link>
                  <ui-text-item
                    :item="{
                      title: comment.user.nickName,
                      desc: comment.content,
                      type: 'mini',
                    }"
                  ></ui-text-item>
                  <slot name="itemButton" :item="{ ...comment, index }"></slot>
                </div>
              </template>
            </ui-list-item>
          </div>
        </template>
        <template #footer>
          <ui-form-item>
            <template #content>
              <div class="ui_comment_footer">
                <ui-input
                  :item="{
                    placholder: '请输入评论内容',
                    enterHandle: enterHandle,
                    inputHandle: inputHandle,
                  }"
                ></ui-input>
                <ui-button
                  :item="{
                    text: '提交',
                    class: 'primary',
                    clickHandle: submitHandle,
                  }"
                ></ui-button>
              </div>
            </template>
          </ui-form-item>
        </template>
      </ui-list>
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
      commentValue: "",
    };
  },
  methods: {
    inputHandle(v) {
      this.commentValue = v;
    },
    submitHandle() {
      this.$props.item.submitHandle &&
        this.$props.item.submitHandle(this.commentValue);
    },
    enterHandle(e, v) {
      this.commentValue = v;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_comment {
  .ui_comment_content {
    .ui_comment_header {
      padding: (5 / @base) @paddingRight (5 / @base) @paddingLeft;
      font-size: @miniFont;
    }
    .ui_comment_footer {
      .flexCenter;
      .ui_input {
        flex: 1;
        margin: 0 (5 / @base) 0 0;
      }
    }
    .ui_comment_list {
      height: (220 / @base);
      overflow: scroll;
      overflow-x: hidden;
    }
    .ui_comment_list_item {
      display: flex;
      align-items: center;
      .ui_alink {
        width: (40 / @base);
      }
      .ui_text_item {
        flex: 1;
        .ui_alink {
          width: auto;
        }
      }
    }
  }
}
</style>
