<template>
  <div class="ui_banner">
    <h1 class="ui_banner_header" v-if="item.title">
      <div class="ui_banner_header_title">{{ item.title }}</div>
      <div class="ui_banner_header_slogan">{{ item.slogan }}</div>
      <div><slot name="right"></slot></div>
    </h1>
    <div v-if="item.type === 'single' && item.data" class="ui_banner_single">
      <a
        :href="banner.url"
        v-for="(banner, index) in item.data"
        :key="'banner_index_' + index"
      >
        <img :src="banner.image" />
      </a>
    </div>
    <div
      v-if="item.type === 'singleNoTask' && item.data"
      class="ui_banner_single_notask"
    >
      <a
        :href="banner.url"
        v-for="(banner, index) in item.data"
        :key="'banner_index_' + index"
      >
        <img :src="banner.image" />
        <span>{{ banner.title }}</span>
      </a>
    </div>
    <div
      v-if="item.type === 'singleTask' && item.data"
      class="ui_banner_singletask"
      :style="{ background: 'url(' + item.data.image + ') no-repeat top left' }"
      v-show="isSignleTaskShow"
    >
      <div class="ui_banner_singletask_left">
        <article>
          <header>
            <h1>{{ item.data.title }}</h1>
            <p>{{ item.data.desc }}</p>
          </header>
        </article>
      </div>
      <div class="ui_banner_singletask_right">
        <button
          type="button"
          @click="bannerButtonClickHandle(item.data)"
          :style="item.data.buttonStyle"
        >
          {{ item.data.buttonText }}
        </button>
        <van-icon name="cross" @click="bannerCloseClickHandle" />
      </div>
    </div>
    <div v-if="item.type === 'multip' && item.data" class="ui_banner_multip">
      <a
        :href="banner.url"
        v-for="(banner, index) in item.data"
        :key="'banner_index_' + index"
      >
        <img :src="banner.image" />
      </a>
    </div>
    <div
      v-if="item.type === 'unsymmetricLeft' && item.data"
      class="ui_banner_unsymmetric_left"
    >
      <a
        :href="item.data[0].url"
        class="left animate__animated animate__fadeInLeft"
      >
        <img :src="item.data[0].image" />
      </a>
      <div
        class="
          ui_banner_unsymmetric_left_right
          animate__animated animate__fadeInRight
        "
      >
        <a :href="item.data[1].url">
          <img :src="item.data[1].image" />
        </a>
        <a :href="item.data[2].url">
          <img :src="item.data[2].image" />
        </a>
      </div>
    </div>
    <div
      v-if="item.type === 'unsymmetricRight' && item.data"
      class="ui_banner_unsymmetric_right"
    >
      <div
        class="
          ui_banner_unsymmetric_right_left
          animate__animated animate__fadeInLeft
        "
      >
        <a :href="item.data[0].url">
          <img :src="item.data[0].image" />
        </a>
        <a :href="item.data[1].url">
          <img :src="item.data[1].image" />
        </a>
      </div>
      <a
        :href="item.data[2].url"
        class="right animate__animated animate__fadeInRight"
      >
        <img :src="item.data[2].image" />
      </a>
    </div>
    <div v-if="item.type === 'line' && item.data" class="ui_banner_line">
      <a
        :href="banner.url"
        v-for="(banner, index) in item.data"
        :key="'banner_index_' + index"
      >
        <img :src="banner.image" />
      </a>
    </div>
    <div v-if="item.type === 'noun' && item.data" class="ui_banner_noun">
      <a
        :href="banner.url"
        v-for="(banner, index) in item.data"
        :key="'banner_index_' + index"
      >
        <img :src="banner.image" />
      </a>
    </div>
    <div
      v-if="item.type === 'symmetryTask' && item.data"
      class="ui_banner_symmetry_task"
    >
      <router-link
        :to="banner.url"
        v-for="(banner, index) in item.data"
        :key="'symmetry_banner_' + index"
        class="ui_banner_symmetry_task_item"
      >
        <span class="ui_banner_symmetry_task_item_desc">{{ banner.desc }}</span>
        <h1 class="ui_banner_symmetry_task_item_title">
          {{ banner.title }}
        </h1>
        <p class="ui_banner_symmetry_task_item_aside">
          {{ banner.asideTitle }}
          <span class="ui_banner_symmetry_task_item_aside_data">{{
            banner.asideData
          }}</span>
        </p>
      </router-link>
    </div>
    <div v-if="item.type === 'cross' && item.data" class="ui_banner_cross">
      <div
        class="ui_banner_cross_item"
        v-for="(banner, index) in item.data"
        :key="'cross_banner_' + index"
      >
        <a :href="banner.url" target="_blank" v-if="/[034]/.test(index)">
          <img :src="banner.image" />
        </a>
        <a :href="banner.url" target="_blank" v-if="/[125]/.test(index)">
          <h1>
            {{ banner.title }}<span>{{ banner.desc }}</span>
          </h1>
          <p>
            <i>{{ banner.unit }}{{ banner.pastPrice }}</i> {{ banner.unit
            }}<span>{{ banner.currentPrice }}</span>
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
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
      isSignleTaskShow: true,
      isFloatLeftShow: true,
      isFloatRightShow: true,
    };
  },
  mounted() {
    //console.log(this.$props.item);
  },
  methods: {
    bannerCloseClickHandle() {
      this.isSignleTaskShow = false;
    },
    bannerButtonClickHandle(v) {
      this.$parent.$emit("bannerButtonClickHandle", v);
    },
    floatCloseClickHandle(name) {
      this[name] = false;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.ui_banner {
  background-color: #fff;
  padding: (5 / @base);
  display: block;
  overflow: hidden;
  clear: both;
  h1 {
    &.ui_banner_header {
      font-size: (14 / @base);
      line-height: (14 / @base);
      text-align: left;
      padding: (10 / @base) (5 / @base);
      border-bottom: (1 / @base) solid #efefef;
      background-color: #fff;
      display: flex;
      height: (15 / @base);
      overflow: hidden;
      margin: (5 / @base) 0;
      color: #333;
      font-weight: 400;
      div {
        width: 10%;
        &.ui_banner_header_title {
          width: 25%;
          line-height: (14 / @base);
          overflow: hidden;
        }
        &.ui_banner_header_slogan {
          width: 65%;
          font-size: (12 / @base);
          line-height: (14 / @base);
          color: #ccc;
          margin: 0 0 0 (10 / @base);
          font-weight: 400;
        }
      }
    }
  }
  .ui_banner_cross {
    .ui_banner_cross_item {
      float: left;
      width: 50%;
      text-align: left;
      display: flex;
      a {
        display: block;
        width: 100%;
        height: (160 / @base);
        text-decoration: none;
        color: #333;
        img {
          width: 100%;
          height: 100%;
        }
        h1 {
          font-size: (14 / @base);
          font-weight: 400;
          padding: (10 / @base);
          margin: 0;
          span {
            font-size: (12 / @base);
            color: #ccc;
            display: block;
          }
        }
        p {
          color: #ce1212;
          font-size: (12 / @base);
          padding: 0 (10 / @base);
          margin: 0;
          i {
            font-style: normal;
            font-size: (12 / @base);
            color: #ccc;
            text-decoration: line-through;
            margin: 0 0 (5 / @base) 0;
            display: block;
          }
          span {
            font-size: (16 / @base);
          }
        }
      }
    }
  }
  .ui_banner_unsymmetric_left {
    display: flex;
    a {
      display: block;
      overflow: hidden;
      &.left {
        width: 50%;
        height: (165 / @base);
        border-radius: (5 / @base);
        img {
          width: 100%;
          height: (165 / @base);
          overflow: hidden;
          background-color: #999;
        }
      }
    }
    .ui_banner_unsymmetric_left_right {
      width: 50%;
      margin: 0 0 0 (5 / @base);
      a {
        display: block;
        overflow: hidden;
        height: (80 / @base);
        border-radius: (5 / @base);
        &:first-child {
          margin: 0 0 (5 / @base) 0;
        }
        img {
          width: 100%;
          height: (80 / @base);
          overflow: hidden;
          background-color: #999;
        }
      }
    }
  }
  .ui_banner_unsymmetric_right {
    display: flex;
    .ui_banner_unsymmetric_right_left {
      width: 50%;
      a {
        display: block;
        overflow: hidden;
        height: (80 / @base);
        border-radius: (5 / @base);
        &:first-child {
          margin: 0 0 (5 / @base) 0;
        }
        img {
          width: 100%;
          height: (80 / @base);
          overflow: hidden;
          background-color: #999;
        }
      }
    }
    a {
      display: block;
      overflow: hidden;
      &.right {
        width: 50%;
        height: (165 / @base);
        margin: 0 0 0 (5 / @base);
        border-radius: (5 / @base);
        img {
          width: 100%;
          height: (165 / @base);
          overflow: hidden;
          background-color: #999;
        }
      }
    }
  }
  .ui_banner_single {
    overflow: hidden;
    border-radius: (5 / @base);
    a {
      display: block;
      width: 100%;
      height: (160 / @base);
      img {
        width: 100%;
        height: 100%;
        background-color: #999;
      }
    }
  }
  .ui_banner_single_notask {
    overflow: hidden;
    border-radius: (5 / @base);
    a {
      display: flex;
      width: 100%;
      height: 100%;
      img {
        width: (60 / @base);
        height: (60 / @base);
        background-color: #999;
        overflow: hidden;
        border-radius: (5 / @base);
      }
      span {
        display: block;
        width: 80%;
        text-align: left;
        margin: auto 0 auto (10 / @base);
      }
    }
  }
  .ui_banner_singletask {
    display: flex;
    font-size: (14 / @base);
    padding: (10 / @base) (15 / @base);
    border-radius: (5 / @base);
    .ui_banner_singletask_left {
      width: 65%;
      text-align: left;
      article {
        header {
          h1 {
            font-size: (14 / @base);
            font-weight: 400;
            padding: (2.5 / @base) 0;
          }
          p {
            font-size: (12 / @base);
            color: #666;
          }
        }
      }
    }
    .ui_banner_singletask_right {
      width: 35%;
      button {
        vertical-align: middle;
        border-radius: (10 / @base);
        border: 0;
        font-size: (12 / @base);
        margin: (5 / @base) 0 0;
        padding: (5 / @base);
      }
      .van-icon {
        margin: (5 / @base) 0 0 (15 / @base);
        vertical-align: middle;
      }
    }
  }
  .ui_banner_multip {
    border-radius: (5 / @base);
    overflow: hidden;
    a {
      display: block;
      float: left;
      width: 50%;
      height: (80 / @base);
      img {
        width: 100%;
        height: 100%;
        background-color: #999;
      }
    }
  }
  .ui_banner_line {
    display: flex;
    overflow: hidden;
    border-radius: (5 / @base);
    a {
      display: block;
      width: 25%;
      height: (80 / @base);
      img {
        width: 100%;
        height: 100%;
        background-color: #999;
      }
    }
  }
  .ui_banner_noun {
    display: flex;
    overflow: hidden;
    border-radius: (5 / @base);
    a {
      display: block;
      width: 50%;
      height: (80 / @base);
      img {
        width: 100%;
        height: 100%;
        background-color: #999;
      }
    }
  }
  .ui_banner_symmetry_task {
    display: flex;
    .ui_banner_symmetry_task_item {
      width: 50%;
      text-align: center;
      border-right: (1 / @base) solid #efefef;
      padding: (10 / @base) 0;
      &:last-child {
        border: 0;
      }
      .ui_banner_symmetry_task_item_desc {
        font-size: (12 / @base);
        color: #999;
      }
      .ui_banner_symmetry_task_item_title {
        font-size: (14 / @base);
        color: #333;
      }
      .ui_banner_symmetry_task_item_aside {
        font-size: (12 / @base);
        color: #999;
        .ui_banner_symmetry_task_item_aside_data {
          margin: 0 0 0 (5 / @base);
        }
      }
    }
  }
  .ui_banner_float {
    .ui_banner_float_item {
      position: fixed;
      border-radius: (5 / @base);
      box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
      width: (120 / @base);
      background-color: #fff;
      .van-icon {
        position: absolute;
        background-color: #fff;
        color: #333;
        width: (20 / @base);
        height: (20 / @base);
        border-radius: (20 / @base);
        display: block;
        overflow: hidden;
        font-size: (14 / @base);
        line-height: (20 / @base);
        box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
        top: -(5 / @base);
        right: -(5 / @base);
      }
      &.left {
        bottom: (100 / @base);
        left: 5%;
      }
      &.right {
        bottom: (100 / @base);
        right: 5%;
      }
    }
  }
}
</style>
