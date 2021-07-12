<template>
  <div>
    <ui-navbar :item="{ goback: true, fixed: true }">
      <template #center>
        <span>title</span>
      </template>
      <template #right>
        <ui-button
          :item="{
            icon: 'search',
          }"
        ></ui-button>
      </template>
    </ui-navbar>
    <ui-animate :item="{ type: 'fadeInLeft', speed: 2 }">
      <template #content>
        <ui-panel :item="{ style: { marginTop: 56 / 23.44 + 'rem' } }">
          <template #content>
            <ui-card>
              <template #content>
                <ui-animate :item="{ type: 'fadeInLeft', speed: 3 }">
                  <template #content> ui-animate test </template>
                </ui-animate>
              </template>
            </ui-card>
            <ui-card :item="card.item">
              <template #handle>
                <ui-button
                  :item="{
                    icon: 'more',
                    text: 'more',
                    clickHandle: clickHandle,
                  }"
                ></ui-button>
              </template>
              <template #content>
                <div>content</div>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <div
                  class="content_image"
                  v-for="(img, index) in imgs"
                  :key="index"
                >
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
                      class: 'primary',
                    }"
                  ></ui-button>
                  <ui-link :item="{ router: { path: '/home' } }">
                    <template #content>test</template>
                  </ui-link>
                  <div class="loading_back">
                    <ui-loading></ui-loading>
                    <ui-loading :item="{ type: 'circle' }"></ui-loading>
                  </div>
                  <ui-input
                    :item="{
                      title: '标题',
                      name: 'name',
                      end: true,
                      enterHandle: enterHandle,
                      rules: { required: true, message: '请填写内容' },
                    }"
                  ></ui-input>
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
                      <template #task>{{ index }}</template>
                    </ui-timeline-item>
                  </template>
                </ui-timeline>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <ui-form :item="formData">
                  <template #content>
                    <ui-form-item :item="{ title: '帐号', name: 'sname' }">
                      <template #content="{ item }">
                        <ui-input
                          :item="{
                            name: item.name,
                            placholder: '请输入帐号',
                            end: true,
                            enterHandle: enterHandle,
                            rules: {
                              required: true,
                              message: '请填写正确的帐号',
                            },
                          }"
                        ></ui-input>
                      </template>
                    </ui-form-item>
                    <ui-form-item :item="{ title: '密码', name: 'password' }">
                      <template #content="{ item }">
                        <ui-input
                          :item="{
                            type: 'password',
                            name: item.name,
                            placholder: '请输入密码',
                            end: true,
                            enterHandle: enterHandle,
                            rules: {
                              required: true,
                              message: '请填写正确的密码',
                            },
                          }"
                        ></ui-input>
                      </template>
                    </ui-form-item>
                    <ui-form-item>
                      <template #content>
                        <ui-button
                          :item="{
                            type: 'submit',
                            class: 'primary',
                            text: '提交',
                          }"
                        ></ui-button>
                      </template>
                    </ui-form-item>
                    <ui-divider>
                      <template #content>test</template>
                    </ui-divider>
                    <div style="text-align: center">
                      test
                      <ui-divider :item="{ type: 'vertical' }"></ui-divider>
                      test
                      <ui-divider :item="{ type: 'vertical' }"></ui-divider>
                      test
                      <ui-divider :item="{ type: 'vertical' }"></ui-divider>
                      test
                    </div>
                  </template>
                </ui-form>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <ui-toggle-button :item="uiToggleButton"></ui-toggle-button>
                <ui-list :item="uiList">
                  <template #content="{ item }">
                    <ui-list-item
                      :item="item"
                      v-for="(column, index) in item.content"
                      :key="index"
                    >
                      <template #content>{{ column.title }}</template>
                    </ui-list-item>
                  </template>
                </ui-list>
              </template>
            </ui-card>
          </template>
        </ui-panel>
      </template>
    </ui-animate>
    <ui-gotop></ui-gotop>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uiToggleButton: {
        buttons: [
          {
            title: "Default",
          },
          {
            title: "Small",
          },
          {
            title: "Large",
          },
        ],
        changeHandle: this.changeHandle,
      },
      uiList: {
        type: "small",
        header: {
          title: "small_header",
        },
        content: [
          {
            title: 1,
          },
          {
            title: 2,
          },
          {
            title: 3,
          },
          {
            title: 4,
          },
          {
            title: 5,
          },
        ],
        footer: {
          title: "footer",
        },
      },
      formData: {
        name: "reg",
        submitHandle: this.submitHandle,
      },
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
  methods: {
    changeHandle(v) {
      let type = this.uiToggleButton.buttons[v].title.toLowerCase();
      this.uiList.type = type;
      this.uiList.header.title = "type: " + type;
    },
    submitHandle(v) {
      console.log(v);
      this.$toast(v).destroy();
    },
    clickHandle(e) {
      console.log(e);
    },
    enterHandle(e, v) {
      console.log(e, v);
    },
  },
};
</script>
<style lang="less"></style>
