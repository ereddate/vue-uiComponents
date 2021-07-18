<template>
  <div class="ui_dropdown_item">
    <div class="title" @click="showMenuHandle">
      <span class="text">{{ selected.text }}</span
      ><ui-icon
        :item="{ icon: isShow ? 'arrow-up-bold' : 'arrow-down-bold' }"
      ></ui-icon>
    </div>
    <!-- <div class="back" v-if="isShow" :style="{ top: top / 23.44 + 'rem' }"></div> -->

    <div
      class="list animate__animated animate__fadeInDown"
      v-if="isShow"
      :style="{ 'transition-duration': '0.2s', transition: 'transform 0.3s' }"
    >
      <div
        class="list_item"
        v-for="(cell, index) in item.data"
        :class="selected.index === index && 'select'"
        :key="index"
        @click="selectItemHandle(index)"
      >
        <span class="text">{{ cell.text }}</span>
        <ui-icon
          :item="{ icon: 'select' }"
          v-if="selected.index === index"
        ></ui-icon>
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
      selected: {
        index: 0,
      },
      isShow: false,
      top: 0,
    };
  },
  created() {
    this.selected = { ...this.$props.item.data[0], index: 0 };
  },
  methods: {
    showMenuHandle() {
      this.isShow = this.isShow ? false : true;
      /* if (this.isShow) {
        let top = this.$uic.query(this.$el).offset().top;
        console.log(top);
        this.top = top + 40;
      } */
    },
    selectItemHandle(v) {
      this.selected = { ...this.$props.item.data[v], index: v };
      this.isShow = false;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_dropdown_item {
  position: relative;
  font-size: (14 / @base);
  display: block;
  flex: 1;
  min-height: (43 / @base);
  .title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: (12 / @base) (20 / @base);
    display: inline-block;
    background-color: #fff;
    display: flex;
    z-index: 2;
    .text {
      flex: 1;
    }
  }
  .back {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
  .list {
    box-shadow: 0 2px 12px rgb(100 101 102 / 12%);
    position: absolute;
    top: (44 / @base);
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #fff;
    padding: (10 / @base) (10 / @base);
    .list_item {
      padding: (10 / @base);
      display: flex;
      border-bottom: (1 / @base) #efefef solid;
      &:last-child {
        border: 0;
      }
      .text {
        flex: 1;
      }
      &.select {
        color: red;
      }
    }
  }
}
.animate__fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
