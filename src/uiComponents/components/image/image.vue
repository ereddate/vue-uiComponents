<template>
  <span class="ui_image">
    <img
      :src="item.image"
      class="ui_image_back"
      @load="imgLoadHandle"
      v-if="!loaded"
    />
    <img :src="item.image" :style="{ objectFit: item.fit || '' }" v-else />
    <!-- <span
      :style="{
        backgroundImage: 'url(' + item.image + ')',
        height: item.height ? item.height / 23.44 + 'rem' : '100%',
      }"
      class="ui_image_success"
      v-else
    ></span> -->
  </span>
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
      loaded: false,
    };
  },
  created() {
    //console.log(this.$props.item);
  },
  methods: {
    imgLoadHandle() {
      this.loaded = true;
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_image {
  .auto;
  img {
    .auto;
    &.ui_image_back {
      width: 0;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }
  }
  span {
    &.ui_image_success {
      background-color: @moreGrey;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      .auto;
    }
  }
}
</style>
