<template>
  <div class="ui_vote">
    <div class="ui_vote_content">
      <div class="title">{{ item.title }}</div>
      <div class="vote">
        <div class="vote_items" v-if="!isSubmit">
          <div class="item" v-for="(vote, index) in voteData" :key="index">
            <ui-button
              :item="{
                text: vote.text,
                clickHandle: voteSubmitHandle,
                data: { ...vote },
                class: 'default',
                index: index,
              }"
            ></ui-button>
          </div>
        </div>
        <div class="vote_items" v-else>
          <div class="item" v-for="(vote, index) in voteData" :key="index">
            <ui-progress
              :item="{
                total: item.total,
                current: vote.count,
                type: current === index ? 'primary' : 'info',
                text: vote.text,
              }"
            >
              <template #content> {{ vote.count }}{{ item.unit }} </template>
            </ui-progress>
          </div>
        </div>
      </div>
      <div class="desc">{{ item.desc }}</div>
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
      isSubmit: false,
      current: -1,
      voteData: [],
    };
  },
  created() {
    this.voteData = this.$props.item.data;
  },
  watch: {
    "$props.item.data"(v) {
      this.voteData = v;
    },
  },
  methods: {
    voteSubmitHandle(data) {
      let that = this;
      this.$props.item.clickHandle &&
        this.$props.item
          .clickHandle(data)
          .then(() => {
            that.current = data.index;
            that.isSubmit = true;
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_vote {
  padding: @paddingAll;
  .ui_vote_content {
    .title {
      font-size: @baseFont;
    }
    .vote {
      .vote_items {
        margin: @marginTop 0;
        .item {
          .ui_button {
            width: 100%;
          }
          .ui_progress {
            margin: @marginTop 0;
          }
        }
      }
    }
    .desc {
      font-size: @miniFont;
      color: @moreGrey;
    }
  }
}
</style>
