<template>
  <div class="ui_video_item" @click="stopButtonClickHandle">
    <video
      :height="item.height || 100"
      :width="item.width || 100"
      :loop="item.loop || false"
      :muted="item.muted || false"
      :poster="item.poster || ''"
      :preload="item.preload || false"
      :autoplay="item.autoplay || false"
      :style="{ 'object-fit': item.fit || 'fill' }"
      x-webkit-airplay="allow"
      :x5-video-player-type="true"
      x5-video-orientation="portraint"
      :x5­-video­-player­-fullscreen="false"
      :playsinline="true"
      :webkit-playsinline="true"
      :controls="false"
      ref="video"
    >
      <source
        :src="video.src"
        :type="video.type || 'video/mp4'"
        v-for="(video, index) in item.src"
        :key="index"
      />
    </video>
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
  mounted() {
    let that = this;
    let video = this.$refs["video"];
    this.video = video;
    for (let n in that.$props.item.methods) {
      video.addEventListener(n, function (e) {
        that.$props.item.methods[n] && that.$props.item.methods[n](e);
      });
    }
  },
  methods: {
    stopButtonClickHandle() {
      this.$refs["video"].pause();
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_video_item {
  background-color: @black;
  video {
    background-color: @black;
  }
}
</style>
