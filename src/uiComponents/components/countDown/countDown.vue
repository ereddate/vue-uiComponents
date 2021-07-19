<template>
  <div class="ui_countdown" v-if="item.type !== 'custom'">
    <div class="item">{{ time.hours }}</div>
    <span>:</span>
    <div class="item">{{ time.minutes }}</div>
    <span>:</span>
    <div class="item">{{ time.seconds }}</div>
  </div>
  <div class="ui_countdown" v-else>
    <slot name="content" :item="time"></slot>
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
      time: {},
    };
  },
  created() {
    this.start();
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    start() {
      this.countDownHandle();
    },
    stop() {
      this.interval && clearInterval(this.interval);
    },
    countDownHandle() {
      let that = this;
      var now_time = new Date();
      var alltime =
        new Date(this.$props.item.time).getTime() - now_time.getTime(); //总的时间（毫秒）
      //var haoscend = alltime % 1000; //毫秒
      var scend = parseInt((alltime / 1000) % 60); //秒
      var minute = parseInt((alltime / 1000 / 60) % 60); //  分钟
      var hour = parseInt((alltime / 1000 / 60 / 60) % 24); //小时
      var day = parseInt((alltime / 1000 / 60 / 60 / 24) % 30); //天数
      var month = parseInt((alltime / 1000 / 60 / 60 / 24 / 30) % 12); //月
      //console.log(day, hour, minute, scend);
      if (Math.max(day, hour, minute, scend) <= 0) {
        this.interval && clearInterval(this.interval);
        this.time = {
          day: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
        this.$props.item.endHandle && this.$props.item.endHandle();
        return;
      }
      this.time =
        this.$props.item.type === "custom"
          ? {
              day: day < 10 ? "0" + day : day,
              hours: hour < 10 ? "0" + hour : hour,
              minutes: minute < 10 ? "0" + minute : minute,
              seconds: scend < 10 ? "0" + scend : scend,
            }
          : {
              hours:
                hour +
                (month > 0 ? (30 / month) * 24 : 0) +
                (day > 0 ? day * 24 : 0),
              minutes: minute < 10 ? "0" + minute : minute,
              seconds: scend < 10 ? "0" + scend : scend,
            };

      this.interval && clearInterval(this.interval);
      this.interval = setInterval(function () {
        that.countDownHandle();
      }, 1000);
      /* var time1 = document.getElementById("shi_jian");
      time1.innerHTML =
        "717倒计时：" +
        month +
        "月" +
        day +
        "天" +
        hour +
        "时" +
        minute +
        "分" +
        scend +
        "秒" +
        (haoscend < 10
          ? "00" + haoscend
          : haoscend < 100
          ? "0" + haoscend
          : haoscend); */
    },
    downCountHandle() {
      let that = this;
      this.interval && clearInterval(this.interval);
      this.interval = setInterval(function () {
        that.downCountTimeContent =
          "（" + that.downCountTime + "秒）后重新发送";
        --that.downCountTime;
        if (that.downCountTime < 0) {
          // that.downCountTimeContent = "重新发送";
          that.downCountTime = 60;
          that.isDownCount = false;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_countdown {
  display: flex;
  justify-content: center;
  span {
    line-height: (29 / @base);
  }
  .item {
    min-width: (30 / @base);
    text-align: center;
    font-size: (14 / @base);
    background-color: #efefef;
    border-radius: (5 / @base);
    margin: 0 (5 / @base);
    padding: (5 / @base);
  }
}
</style>
