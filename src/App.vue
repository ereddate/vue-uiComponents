<template>
  <div id="app">
    <ui-card :item="card.item">
      <template #handle>
        <ui-button
          :item="{ icon: 'more', text: 'more', clickHandle: clickHandle }"
        ></ui-button>
      </template>
      <template #content>
        <div>content</div>
      </template>
    </ui-card>
    <ui-card>
      <template #content>
        <div class="content_image" v-for="(img, index) in imgs" :key="index">
          <ui-image
            :item="{ image: img.image, height: 80, fit: img.fit }"
          ></ui-image>
        </div>
      </template>
    </ui-card>
    <ui-card :item="cardA">
      <template #content>
        <div>
          content
          <ui-button
            :item="{
              icon: 'more',
              text: 'more',
              clickHandle: clickHandle,
              type: 'primary',
            }"
          ></ui-button>
          <ui-link :item="{ router: { path: '/home' } }">
            <template #content> test </template>
          </ui-link>
          <div class="loading_back">
            <ui-loading></ui-loading>
          </div>
        </div>
      </template>
    </ui-card>
    <ui-card>
      <template #content>
        <ui-banner
          :item="banner"
          v-for="(banner, index) in banners"
          :key="index"
        ></ui-banner>
      </template>
    </ui-card>
    <ui-card>
      <template #content>
        <ui-timeline :item="timeline">
          <template #item="{ item }">
            <ui-timeline-item
              :item="time"
              v-for="(time, index) in item"
              :key="index"
            >
              <template #task>
                {{ index }}
              </template>
            </ui-timeline-item>
          </template>
        </ui-timeline>
      </template>
    </ui-card>
    <ui-gotop></ui-gotop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeline: {
        data: [
          {
            date: 1625727172151,
            data: [
              {
                time: 1625727240000,
              },
              {
                time: 1625727240000,
              },
              {
                time: 1625727240000,
              },
              {
                time: 1625727240000,
              },
              {
                time: 1625727240000,
              },
            ],
          },
        ],
      },
      banners: [
        {
          type: "noun",
          title: "nounBanner",
          slogan: "test",
          data: [
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01cba25847ce44a801219c77836811.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
          ],
        },
        {
          type: "single",
          title: "singleBanner",
          slogan: "test",
          data: [
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
          ],
        },
        {
          type: "multip",
          title: "multipleBanner",
          slogan: "test",
          data: [
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01cba25847ce44a801219c77836811.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/016ef65847cf1fa801219c777af739.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/016ef65847cf1fa801219c777af739.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
          ],
        },
        {
          type: "line",
          title: "lineBanner",
          slogan: "test",
          data: [
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01cba25847ce44a801219c77836811.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/016ef65847cf1fa801219c777af739.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
          ],
        },
        {
          type: "unsymmetricLeft",
          title: "unsymmetricLeft",
          slogan: "test",
          data: [
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
          ],
        },
        {
          type: "unsymmetricRight",
          title: "unsymmetricRight",
          slogan: "test",
          data: [
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
            {
              url: "",
              image:
                "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
              title: "banner test",
              desc: "dese test",
            },
          ],
        },
      ],
      card: {
        item: {
          style: {
            margin: 10,
            fontSize: 12,
          },
          title: "Test",
          headerImage: {
            url: "/",
            image:
              "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
            height: 80,
            fit: "contain",
          },
        },
      },
      imgs: [
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
          fit: "none",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
          fit: "contain",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
          fit: "cover",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
          fit: "fill",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
          fit: "scale-down",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
        },
      ],
      cardA: {
        headerImage: {
          url: "/",
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
          height: 80,
          fit: "cover",
        },
      },
    };
  },
  created() {
    this.$uiComponents.fontSize(16);
  },
  methods: {
    clickHandle(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="less">
body {
  padding: 0;
  margin: 0;
  background-color: #efefef;
  .ui_card {
    .handle {
      font-size: 12px;
    }
    .content_image {
      display: block;
      width: 50%;
      height: 100%;
      float: left;
    }
  }
  .loading_back {
    padding: 10px;
  }
}
</style>
