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
          <ui-image :item="{ image: img.image, height: 80 }"></ui-image>
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
        </div>
      </template>
    </ui-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
          },
        },
      },
      imgs: [
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
        },
        {
          image:
            "https://gzajwlb-1252035736.file.myqcloud.com/awb/pro/admin/20210302/a5db1a4c8a9739423f54b5b0122518c0.png?imageMogr2/thumbnail/355x80",
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
}
</style>
