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
  methods: {
    imgLoadHandle() {
      this.loaded = true;
    },
  },
};
</script>
<style lang="less">
.ui_image {
  display: block;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    &.ui_image_back {
      width: 0;
      height: 0;
      overflow: hidden;
      opacity: 0;
    }
  }
  span {
    &.ui_image_success {
      background-color: #cccccc;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
