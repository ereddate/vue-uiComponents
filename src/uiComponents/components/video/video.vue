<template>
  <div class="ui_video">
    <div class="ui_video_content" :class="reload && 'reload'">
      <ui-video-item
        :item="{
          ...item,
          methods: {
            play: playHandle,
            pause: pauseHandle,
            error: errorHandle,
            progress: progressHandle,
            timeupdate: timeupdateHandle,
          },
        }"
      ></ui-video-item>
      <div
        class="up_video_reload"
        v-if="reload && item.showTip"
        @click="playButtonClickHandle"
        :style="{ height: item.height / 23.44 + 'rem' }"
      >
        <ui-icon :item="{ icon: 'refresh' }"></ui-icon>
      </div>
      <div class="ui_video_info" v-if="item.showTip">
        <div class="ui_video_title" v-if="item.title">{{ item.title }}</div>
        <div class="ui_video_tip">{{ current }}/{{ total }}</div>
      </div>

      <div class="ui_video_timeupdate" v-if="item.controls">
        <div
          class="timeupdate"
          :style="{
            width: timeupdate + '%',
          }"
        >
          <i v-if="timeupdate >= 2"></i>
        </div>
      </div>
      <slot name="content"></slot>
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
      current: "00:00",
      total: "00:00",
      timeupdate: 0,
      reload: false,
      play: false,
    };
  },
  mounted() {
    this.video = this.$children[0].video;
    this.$props.item.currentTimeUpdate &&
      (this.video.currentTime = this.$props.item.currentTimeUpdate);
  },
  watch: {
    "$props.item.currentTimeUpdate"(v) {
      let that = this;
      this.$nextTick(() => {
        that.video.pause();
        that.video.currentTime = v;
        that.video.play();
      });
    },
  },
  methods: {
    playButtonClickHandle() {
      this.video.play();
    },
    playHandle() {
      // console.log(e);
      this.reload = false;
    },
    pauseHandle() {
      //console.log(e);
      this.reload = true;
    },
    errorHandle() {
      // console.log(e);
    },
    progressHandle() {
      // console.log(e);
    },
    timeupdateHandle(e) {
      // console.log(e, this.getTime(e.target.currentTime, e.target.duration));
      this.current = this.getTime(e.target.currentTime, e.target.duration);
      this.total = this.getTime(e.target.duration);
      this.timeupdate = (e.target.currentTime / e.target.duration) * 100;
      this.$props.item.timeUpdateHandle &&
        this.$props.item.timeUpdateHandle(e, this.$props.item);
    },
    getTime(a, c) {
      c = c || a;
      var d = Math.floor(a % 60),
        e = Math.floor((a / 60) % 60),
        g = Math.floor(a / 3600),
        h = Math.floor((c / 60) % 60),
        k = Math.floor(c / 3600);
      if (isNaN(a) || Infinity === a) g = e = d = "-";
      g = 0 < g || 0 < k ? g + ":" : "";
      return (
        g +
        (((g || 10 <= h) && 10 > e ? "0" + e : e) + ":") +
        (10 > d ? "0" + d : d)
      );
    },
  },
};
</script>
<style lang="less">
@import "../../style/common.less";
.ui_video {
  .ui_video_content {
    position: relative;
    display: flex;
    flex-direction: column;

    .ui_video_info {
      position: absolute;
      top: (10 / @base);
      left: (10 / @base);
      color: @white;
      font-size: @miniFont;
    }
    &.reload {
      .up_video_reload {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        .ui_icon {
          color: @white;
          font-size: @largeFont;
          padding: @paddingAll;
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: @largeRadius;
        }
      }
    }
    .ui_video_timeupdate {
      background-color: @grey;
      height: (3 / @base);
      .timeupdate {
        background-color: #1bb0bf;
        height: (3 / @base);
        display: flex;
        justify-content: flex-end;
        align-content: center;
        align-items: center;
        i {
          width: (6 / @base);
          height: (6 / @base);
          border-radius: 50%;
          background-color: #1bb0bf;
          border: (2 / @base) @white solid;
          margin: 0 -5px 0 0;
        }
      }
    }
  }
}
</style>
