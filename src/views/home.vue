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
                <ui-swiper :item="swiperData">
                  <template #content="{ item }">
                    <ui-image :item="{ ...item }"></ui-image>
                  </template>
                </ui-swiper>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <ui-collapse-group :item="collapseData">
                  <template #content="{ item }">
                    <ui-collapse
                      v-for="(collapse, index) in item.data"
                      :key="index"
                      :item="{
                        title: collapse.title,
                        collapse: item.current === index ? true : false,
                        index: index,
                      }"
                    >
                      <template #content> 123456 </template>
                    </ui-collapse>
                  </template>
                </ui-collapse-group>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <ui-scroll-view
                  :item="{
                    flex: 'row',
                    width: 335,
                    scrollTo: scrollValue || 30,
                    scrolltolower: scrolltolower,
                    scrolltoupper: scrolltoupper,
                    scroll: scrollHandle,
                  }"
                >
                  <template #content>
                    <div :style="{ width: (4 * 200) / 23.44 + 'rem' }">
                      <div
                        v-for="(i, index) in [1, 2, 3, 4]"
                        :key="index"
                        :style="{
                          width: 200 / 23.44 + 'rem',
                          height: 30 / 23.44 + 'rem',
                          float: 'left',
                        }"
                      >
                        {{ i }}
                      </div>
                    </div>
                  </template>
                </ui-scroll-view>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <button @click="scrollValue += 200">+</button
                ><button @click="scrollValue -= 200">-</button>
                <ui-scroll-view
                  :item="{
                    flex: 'column',
                    height: 200,
                    scrollTo: scrollValue || 30,
                    scrolltolower: scrolltolower,
                    scrolltoupper: scrolltoupper,
                    scroll: scrollHandle,
                  }"
                >
                  <template #content>
                    <div :style="{ width: (4 * 200) / 23.44 + 'rem' }">
                      <div
                        v-for="(i, index) in [1, 2, 3, 4]"
                        :key="index"
                        :style="{
                          width: '100%',
                          height: 200 / 23.44 + 'rem',
                        }"
                      >
                        {{ i }}
                      </div>
                    </div>
                  </template>
                </ui-scroll-view>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <ui-animate :item="{ type: 'fadeInLeft', speed: 3 }">
                  <template #content>ui-animate test</template>
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
                      <ui-divider :item="{ type: 'vertical' }"></ui-divider>test
                      <ui-divider :item="{ type: 'vertical' }"></ui-divider>test
                      <ui-divider :item="{ type: 'vertical' }"></ui-divider>test
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
            <ui-card>
              <template #content>
                <ui-list :item="uiListA">
                  <template #content="{ item }">
                    <ui-list-item :item="item">
                      <template #content>
                        <ui-image-text-item
                          :item="{ ...imageTexts, type: 'top' }"
                        ></ui-image-text-item>
                      </template>
                    </ui-list-item>
                    <ui-list-item :item="item">
                      <template #content>
                        <ui-image-text-item
                          :item="{ ...imageTexts, type: 'left' }"
                        ></ui-image-text-item>
                      </template>
                    </ui-list-item>
                    <ui-list-item :item="item">
                      <template #content>
                        <ui-image-text-item
                          :item="{ ...imageTexts, type: 'bottom' }"
                        ></ui-image-text-item>
                      </template>
                    </ui-list-item>
                    <ui-list-item :item="item">
                      <template #content>
                        <ui-image-text-item
                          :item="{ ...imageTexts, type: 'right' }"
                        ></ui-image-text-item>
                      </template>
                    </ui-list-item>
                  </template>
                </ui-list>
              </template>
            </ui-card>
            <ui-image-list :item="{ data: imageList }">
              <template #content="{ item }">
                <ui-image-list-item :item="item"></ui-image-list-item>
              </template>
            </ui-image-list>
          </template>
        </ui-panel>
      </template>
    </ui-animate>
    <ui-gotop></ui-gotop>
    <ui-dialog :item="{ ...dialog, cancelDialogHandle, enterDialogHandle }">
      <template #content="{ item }">
        <ui-dialog-item :item="{ ...item }"></ui-dialog-item>
      </template>
    </ui-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageList: [
        {
          type: "goods",
          data: {
            image: [
              "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/175554/34/17766/223577/60deb22bE3c2d674c/98fd91bb8925e6b7.jpg!q70.dpg.webp",
            ],
            title:
              "艾森雅 意式科技布沙发三人位小户型客厅组合沙发 三人位（2.1米） 高回弹海绵款",
            price: 1490,
            unit: "¥",
          },
        },
        {
          type: "goods",
          data: {
            image: [
              "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/175554/34/17766/223577/60deb22bE3c2d674c/98fd91bb8925e6b7.jpg!q70.dpg.webp",
            ],
            title:
              "艾森雅 意式科技布沙发三人位小户型客厅组合沙发 三人位（2.1米） 高回弹海绵款",
            price: 1490,
            unit: "¥",
          },
        },
        {
          type: "goods",
          data: {
            image: [
              "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/175554/34/17766/223577/60deb22bE3c2d674c/98fd91bb8925e6b7.jpg!q70.dpg.webp",
            ],
            title:
              "艾森雅 意式科技布沙发三人位小户型客厅组合沙发 三人位（2.1米） 高回弹海绵款",
            price: 1490,
            unit: "¥",
          },
        },
        {
          type: "goods",
          data: {
            image: [
              "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/175554/34/17766/223577/60deb22bE3c2d674c/98fd91bb8925e6b7.jpg!q70.dpg.webp",
            ],
            title:
              "艾森雅 意式科技布沙发三人位小户型客厅组合沙发 三人位（2.1米） 高回弹海绵款",
            price: 1490,
            unit: "¥",
          },
        },
        {
          type: "goods",
          data: {
            image: [
              "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/175554/34/17766/223577/60deb22bE3c2d674c/98fd91bb8925e6b7.jpg!q70.dpg.webp",
            ],
            title:
              "艾森雅 意式科技布沙发三人位小户型客厅组合沙发 三人位（2.1米） 高回弹海绵款",
            price: 1490,
            unit: "¥",
          },
        },
      ],
      dialog: {
        width: 200,
        isShow: false,
        type: "default",
      },
      swiperData: {
        width: 335,
        height: 160,
        autoPlay: true,
        loop: true,
        speed: 2,
        data: [
          {
            image:
              "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/192539/39/12312/101788/60e6db3aE0d576a57/4b80b83036d1edaf.jpg!cr_1053x420_4_0!q70.jpg.dpg",
          },
          {
            image:
              "https://imgcps.jd.com/ling4/41438815868/5LyR6Zey5pe25YWJ/5paH5Lu25pS257qz5aW95biu5omL/p-5d91a4f642dd5b7c7d52cbcf/7ec597ee/cr_1053x420_4_0/s1125x690/q70.jpg",
          },
          {
            image:
              "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172985/20/11254/250873/60ab712bE2cfd0e52/f184257039a404d1.png!cr_1053x420_4_0!q70.jpg.dpg",
          },
          {
            image:
              "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/20133/31/7038/158978/5c675d70E85733fe0/989fe25311a37e2f.jpg!cr_1125x449_0_166!q70.jpg.dpg",
          },
          {
            image:
              "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/179092/31/12467/102983/60e6af65E4b2fbef7/0691a58b9fb5177b.jpg!cr_1053x420_4_0!q70.jpg.dpg",
          },
          {
            image:
              "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/178764/20/13914/201953/60eca470Ef0753e01/2cdb8520c2fc59c5.jpg!cr_1125x449_0_166!q70.jpg.dpg",
          },
        ],
      },
      collapseData: {
        data: [
          {
            title: "test",
          },
          {
            title: "test",
          },
          {
            title: "test",
          },
          {
            title: "test",
          },
        ],
      },
      scrollValue: 0,
      imageTexts: {
        type: "right",
        image:
          "http://img.mp.itc.cn/upload/20170816/7ec1b62f383249d0b050b67625478563_th.jpg",
        title: "一文理解ES6中的代理模式——Proxy",
        desc: "forEach(observer => observer());return result;}观察者函数都放进Set集合，当修改obj的值，在会set函数中拦截，自动执行Set所有的观察者 ",
        url: "",
      },
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
      uiListA: {
        type: "small",
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
  created() {
    let that = this;
    that.$message("你确认吗？", function () {
      that.$confirm(
        "你需要再确认吗？",
        function () {
          console.log("enter!");
        },
        function () {
          console.log("cancel!");
        }
      );
    });
  },
  methods: {
    cancelDialogHandle() {
      this.dialog.isShow = false;
    },
    enterDialogHandle() {
      this.dialog.isShow = false;
    },
    scrollHandle(v) {
      console.log(v, v.handle);
    },
    scrolltoupper(v) {
      console.log(v, v.handle);
    },
    scrolltolower(v) {
      console.log(v, v.handle);
    },
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
