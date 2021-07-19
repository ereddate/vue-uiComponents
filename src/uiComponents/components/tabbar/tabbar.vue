<template>
  <div class="ui_tabbar" v-if="item.data && item.data.length > 0">
    <div class="ui_tabbar_content">
      <div
        class="item"
        v-for="(tab, index) in item.data"
        :key="index"
        :style="{ width: 100 / item.data.length + '%' }"
        :class="selected === tab.url && 'select'"
      >
        <ui-link :item="{ url: tab.url }">
          <template #content>
            <ui-badge :item="{ badge: tab.badge }">
              <template #content>
                <div class="item_content">
                  <ui-icon
                    :item="{
                      icon: selected === tab.url ? tab.selectIcon : tab.icon,
                      style: {
                        color:
                          selected === tab.url ? tab.selectColor : tab.color,
                      },
                    }"
                  ></ui-icon>
                  <span
                    class="text"
                    v-if="tab.text"
                    :style="{
                      color: selected === tab.url ? tab.selectColor : tab.color,
                    }"
                    >{{ tab.text }}</span
                  >
                </div>
              </template>
            </ui-badge>
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
    return {
      selected: 0,
    };
  },
  created() {
    this.selected = this.$route.path || this.$route.name;
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  background-color: #fff;
  padding: (5 / @base) (10 / @base);
  z-index: 98;
  .ui_tabbar_content {
    display: flex;
    .item {
      width: 24%;
      margin: 0 (10 / @base);
      a {
        text-decoration: none;
        color: #333;
        .item_content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          .ui_icon {
            font-size: (18 / @base);
          }
        }
      }
    }
  }
}
</style>
