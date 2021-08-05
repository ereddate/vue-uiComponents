<template>
  <div class="ui_icon_shuttle">
    <div class="ui_icon_shuttle_content">
      <div class="content">
        <div class="item" v-for="(icon, index) in current" :key="index">
          <ui-link
            :item="{ data: { icon, index }, clickHandle: goClickHandle }"
          >
            <template #content>
              <ui-image :item="{ image: icon.image }"></ui-image>
            </template>
          </ui-link>
          <div class="delete">
            <ui-link
              :item="{ data: { icon, index }, clickHandle: deleteClickHandle }"
              v-if="isMore"
            >
              <template #content>
                <ui-icon :item="{ icon: 'close-bold' }"></ui-icon>
              </template>
            </ui-link>
          </div>
        </div>
        <div class="item" @click="showMoreHandle">
          <div class="more">
            <ui-icon
              :item="{ icon: isMore ? 'arrow-up-bold' : 'add-bold' }"
            ></ui-icon>
          </div>
        </div>
      </div>
      <div class="more" v-if="isMore">
        <div class="item" v-for="(icon, index) in more" :key="index">
          <ui-image :item="{ image: icon.image }"></ui-image>
          <ui-link
            :item="{ data: { icon, index }, clickHandle: addClickHandle }"
          >
            <template #content>
              <ui-icon :item="{ icon: 'add-bold' }"></ui-icon>
            </template>
          </ui-link>
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
    return {
      isMore: true,
      current: [],
      more: [],
    };
  },
  created() {
    this.current = this.$props.item.data;
    this.more = this.$props.item.more;
  },
  methods: {
    goClickHandle(data) {
      this.$props.item.clickHandle && this.$props.item.clickHandle(data);
    },
    addClickHandle(data) {
      this.current.push(this.more[data.index]);
      this.more.splice(data.index, 1);
    },
    deleteClickHandle(data) {
      this.more.push(this.current[data.index]);
      this.current.splice(data.index, 1);
    },
    showMoreHandle() {
      this.isMore = this.isMore ? false : true;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_icon_shuttle {
  .ui_icon_shuttle_content {
    .content {
      .item {
        float: left;
        width: (48 / @base);
        height: (48 / @base);
        position: relative;
        margin: @marginAll;
        .ui_image {
          background-color: @white;
        }
        .delete {
          width: (16 / @base);
          height: (16 / @base);
          position: absolute;
          top: (-8 / @base);
          right: (-2 / @base);
          .ui_icon {
            border-radius: 50%;
            background-color: @red;
            padding: (5 / @base);
            color: @white;
          }
        }
        .more {
          float: left;
          width: 100%;
          height: 100%;
          .flexCenter;
          .ui_icon {
            font-size: (24 / @base);
            color: @moreGrey;
          }
        }
      }
    }
    .more {
      clear: both;
      .item {
        margin: @marginAll;
        float: left;
        width: (48 / @base);
        height: (48 / @base);
        position: relative;
        .ui_image {
          background-color: @white;
        }
        .ui_alink {
          width: (16 / @base);
          height: (16 / @base);
          position: absolute;
          top: (-8 / @base);
          right: (-2 / @base);
          .ui_icon {
            border-radius: 50%;
            background-color: @green;
            padding: (5 / @base);
            color: @white;
          }
        }
      }
    }
  }
}
</style>
