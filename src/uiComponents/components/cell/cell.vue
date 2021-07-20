<template>
  <div class="ui_cell">
    <div class="ui_cell_content" v-if="!item.url">
      <article class="item">
        <header>
          <h1>
            <ui-icon :item="{ icon: item.icon }" v-if="item.icon"></ui-icon>
            <span class="text">{{ item.title }}</span>
            <ui-tag
              :item="{
                text: item.tag,
                type: item.tagType,
                close: item.close || false,
              }"
              v-if="item.tag"
            ></ui-tag>
          </h1>
          <p>{{ item.desc }}</p>
        </header>
      </article>
      <div class="item">
        <span class="item_content">{{ item.content }}</span>
      </div>
    </div>
    <ui-link :item="{ url: item.url }" v-else>
      <template #content>
        <div class="ui_cell_content">
          <article class="item">
            <header>
              <h1>
                <ui-icon :item="{ icon: item.icon }" v-if="item.icon"></ui-icon>
                <span class="text">{{ item.title }}</span>
                <ui-tag
                  :item="{
                    text: item.tag,
                    type: item.tagType,
                    close: item.close || false,
                  }"
                  v-if="item.tag"
                ></ui-tag>
              </h1>
              <p>{{ item.desc }}</p>
            </header>
          </article>
          <div class="item">
            <span class="item_content">{{ item.content }}</span>
            <ui-icon :item="{ icon: 'arrow-right-bold' }"></ui-icon>
          </div>
        </div>
      </template>
    </ui-link>
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
.ui_cell {
  padding: (10 / @base) 0;
  .ui_cell_content {
    display: flex;
    min-height: (24 / @base);
    .item {
      flex: 1;
      display: flex;
      &:first-child {
        justify-content: flex-start;
        align-items: center;
        align-content: center;
      }
      &:last-child {
        justify-content: flex-end;
        align-items: center;
        align-content: center;
      }
      header {
        h1,
        p {
          padding: 0;
          margin: 0;
        }
        h1 {
          font-size: (12 / @base);
          font-weight: 400;
          display: flex;
          .text {
            font-size: (14 / @base);
            color: #333;
            margin: 0 0 0 (5 / @base);
          } /* 
          .ui_icon {
            color: #999;
            line-height: (22 / @base);
            margin: 0 (5 / @base) 0 0;
          } */
        }
        p {
          font-size: (14 / @base);
          color: #999;
        }
      }
      .item_content {
        color: #999;
        margin: 0 (5 / @base) 0 0;
      }
      .ui_icon {
        line-height: (20 / @base);
      }
    }
  }
}
</style>
