<template>
  <div>
    <ui-navbar :item="{ goback: true, fixed: true, title: 'home' }">
      <template #center>
        <span>title</span>
      </template>
      <template #right>
        <ui-button
          :item="{
            icon: 'search',
            clickHandle: searchClickHandle,
          }"
        ></ui-button>
      </template>
    </ui-navbar>
    <ui-animate :item="{ type: 'fadeInLeft', speed: 2 }">
      <template #content>
        <ui-panel
          :item="{
            title: 'Demo',
            style: {
              marginTop: 56 / 23.44 + 'rem',
              paddingBottom: 120 / 23.44 + 'rem',
            },
            loading: panelLoading,
          }"
        >
          <template #content>
            <ui-pull-refresh
              :item="{
                offset: 90,
                refresh: refreshHandle,
                success: successHandle,
                error: errorHandle,
              }"
            >
              <template #content>
                <ui-panel
                  :item="{ style: { height: '500px', 'text-align': 'center' } }"
                >
                  <template #content>
                    pullRefresh
                    <ui-empty :item="{}">
                      <template #content>
                        <ui-button
                          :item="{ text: '按钮', class: 'warning' }"
                        ></ui-button>
                      </template>
                    </ui-empty>
                  </template>
                </ui-panel>
              </template>
            </ui-pull-refresh>
            <ui-crumbs :item="crumbsData"></ui-crumbs>
            <ui-tools-bar>
              <template #content>
                <ui-dropdown-item
                  :item="{
                    ...dropDownData,
                    changeHandle: dropDownChangeHandle,
                  }"
                ></ui-dropdown-item>
                <ui-dropdown-item
                  :item="{
                    ...dropDownData,
                    changeHandle: dropDownChangeHandle,
                  }"
                ></ui-dropdown-item
                ><ui-dropdown-item
                  :item="{
                    ...dropDownData,
                    changeHandle: dropDownChangeHandle,
                  }"
                ></ui-dropdown-item>
              </template>
            </ui-tools-bar>
            <ui-card>
              <template #content>
                <ui-button :item="{text:'test',shape:'circle',class:'primary',icon:'search'}"></ui-button>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <ui-icon-shuttle
                  :item="{ ...shuttleData, clickHandle: shuttleClickHandle }"
                ></ui-icon-shuttle>
              </template>
            </ui-card>
            <ui-tabs-card
              :item="{
                data: [
                  { title: 'tab 1' },
                  { title: 'tab 2' },
                  { title: 'tab 3' },
                ],
              }"
            >
              <template #content="{ item }">
                {{ item }}
              </template>
            </ui-tabs-card>
            <ui-card>
              <template #content>
                <ui-progress :item="{ total: 1000, current: 500, text: '%' }">
                  <template #content> 500票 </template>
                </ui-progress>
                <ui-vote
                  :item="{ ...voteData, clickHandle: voteClickHandle }"
                ></ui-vote>
              </template>
            </ui-card>
            <ui-card>
              <template #content>
                <ui-result :item="{ type: 'success' }"></ui-result>
                <ui-result :item="{ type: 'warning' }"></ui-result>
                <ui-result :item="{ type: 'error' }"></ui-result>
                <ui-result :item="{ type: 'info' }"></ui-result>
              </template>
            </ui-card>
            <ui-lazyload>
              <template #content>
                <ui-swipe-card :item="swipeCardData">
                  <template #item="{ item }">
                    <ui-image :item="{ image: item.imgUrl }"></ui-image>
                  </template>
                  <template #content> 22 </template>
                </ui-swipe-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-panel
                      :item="{
                        style: { height: '30px', padding: '60px 60px 0 60px' },
                      }"
                    >
                      <template #content>
                        <ui-pop
                          :item="{ text: 'pop title', type: 'top-start' }"
                        >
                          <template #content>
                            <ui-button
                              :item="{ text: 'pop button', class: 'default' }"
                            ></ui-button>
                          </template>
                        </ui-pop>
                      </template>
                    </ui-panel>
                    <ui-panel
                      :item="{
                        style: { height: '30px', padding: '60px 60px 0 60px' },
                      }"
                    >
                      <template #content>
                        <ui-pop :item="{ text: 'pop title', type: 'top' }">
                          <template #content>
                            <ui-button
                              :item="{ text: 'pop button', class: 'default' }"
                            ></ui-button>
                          </template>
                        </ui-pop>
                      </template>
                    </ui-panel>
                    <ui-panel
                      :item="{
                        style: { height: '30px', padding: '60px 60px 0 60px' },
                      }"
                    >
                      <template #content>
                        <ui-pop :item="{ text: 'pop title', type: 'top-end' }">
                          <template #content>
                            <ui-button
                              :item="{ text: 'pop button', class: 'default' }"
                            ></ui-button>
                          </template>
                        </ui-pop>
                      </template>
                    </ui-panel>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-checkbox
                      :item="{
                        ...checkbox,
                        changeHandle: checkboxChangeHandle,
                      }"
                      v-for="(checkbox, index) in checkboxData.data"
                      :key="index"
                    ></ui-checkbox>
                    <ui-button
                      :item="{
                        text: 'getCheckboxValue',
                        clickHandle: getCheckboxValueHandle,
                      }"
                    ></ui-button>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-radio
                      :item="{
                        ...radio,
                        changeHandle: radioChangeHandle,
                      }"
                      v-for="(radio, index) in radioData.data"
                      :key="index"
                    ></ui-radio>
                    <ui-button
                      :item="{
                        text: 'getRadioValue',
                        clickHandle: getRadioValueHandle,
                      }"
                    ></ui-button>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-number-animate
                      :item="numberAniData"
                    ></ui-number-animate>
                    <ui-number-animate
                      :item="{ ...numberAniData, type: 'column' }"
                    ></ui-number-animate>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-avatar-group :item="avatarGroupData"></ui-avatar-group>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-image-view
                      :item="{
                        isShow: isImageViewShow,
                        data: swiperData.data,
                        closeHandle: closeImageViewHandle,
                      }"
                    ></ui-image-view>
                    <div @click="showImageViewHandle">
                      <ui-image
                        :item="{
                          image:
                            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic13.nipic.com%2F20110420%2F2531170_133355088479_2.jpg&refer=http%3A%2F%2Fpic13.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629857601&t=9860e6d1917a6064f02a7d0799f3e40c',
                        }"
                      ></ui-image>
                    </div>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    row
                    <ui-row :item="{ type: 'flex', align: 'center' }">
                      <template #content>
                        <ui-col>
                          <template #content>
                            col
                            <ui-row>
                              <template #content> 1row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 2row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 3row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 4row </template>
                            </ui-row>
                          </template>
                        </ui-col>
                        <ui-col>
                          <template #content>
                            col
                            <ui-row>
                              <template #content> 1row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 2row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 3row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 4row </template>
                            </ui-row>
                          </template>
                        </ui-col>
                        <ui-col>
                          <template #content>
                            col
                            <ui-row>
                              <template #content> 1row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 2row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 3row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 4row </template>
                            </ui-row>
                          </template>
                        </ui-col>
                        <ui-col>
                          <template #content>
                            col
                            <ui-row>
                              <template #content> 1row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 2row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 3row </template>
                            </ui-row>
                            <ui-row>
                              <template #content> 4row </template>
                            </ui-row>
                          </template>
                        </ui-col>
                      </template>
                    </ui-row>
                    col
                    <ui-col>
                      <template #content>
                        <ui-row>
                          <template #content> 1row </template>
                        </ui-row>
                        <ui-row>
                          <template #content> 2row </template>
                        </ui-row>
                        <ui-row>
                          <template #content> 3row </template>
                        </ui-row>
                        <ui-row>
                          <template #content> 4row </template>
                        </ui-row>
                      </template>
                    </ui-col>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <div id="test1">test1</div>
                    <ui-comment
                      :item="{
                        ...commentData,
                        submitHandle: commentSubmitHandle,
                      }"
                    ></ui-comment>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-topic-group :item="topicGroup"></ui-topic-group>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-video :item="videoData">
                      <template #content> video slot </template>
                    </ui-video>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-more :item="more">
                      <template #content> more list </template>
                    </ui-more>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <div id="test1-1">test1-1</div>
                    <ui-textarea
                      :item="{ total: 200, value: '文本框测试', clear: true }"
                    >
                      <template #content>
                        <div class="tools">
                          <ui-icon :item="{ icon: 'fav' }"></ui-icon>
                          <ui-icon :item="{ icon: 'fabulous' }"></ui-icon>
                        </div>
                      </template>
                    </ui-textarea>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <div style="display: flex">
                      <ui-avatar
                        :item="{ ...avatarData, type: 'small' }"
                      ></ui-avatar>
                      <ui-avatar
                        :item="{ ...avatarData, type: 'normal' }"
                      ></ui-avatar>
                      <ui-avatar
                        :item="{ ...avatarData, type: 'large' }"
                      ></ui-avatar>
                    </div>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-treeselect
                      :item="{
                        ...treeSelectData,
                        changeHandle: treeSelectChangeHandle,
                      }"
                    >
                      <template #content="{ item }">
                        {{ item }}
                      </template>
                    </ui-treeselect>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <div
                      class="cell_item"
                      v-for="(cell, index) in cellData"
                      :key="index"
                    >
                      <ui-cell :item="cell"></ui-cell>
                    </div>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-countdown
                      :item="{ time: new Date('2021-7-21 14:34:00').getTime() }"
                    ></ui-countdown>
                    <ui-countdown
                      :item="{
                        type: 'custom',
                        time: new Date('2021-7-19 16:09:30').getTime(),
                        endHandle: countDownEndHandle,
                      }"
                    >
                      <template #content="{ item }">
                        {{ item.day }}天{{ item.hours }}小时{{
                          item.minutes
                        }}分钟{{ item.seconds }}秒
                      </template>
                    </ui-countdown>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-banner :item="crossBannerData"></ui-banner>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-price-notice :item="priceNoticeData"></ui-price-notice>
                    <ui-price-notice :item="priceNoticeDataA"></ui-price-notice>
                  </template>
                </ui-card> </template
            ></ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <div id="test2">test2</div>
                    <ui-navbar-list :item="navbarListData"></ui-navbar-list>
                    <ui-multip-navbar
                      :item="multipNavbarData"
                    ></ui-multip-navbar>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-icons-list
                      :item="{ ...iconsListData, index: 0 }"
                    ></ui-icons-list>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-steps :item="{ ...stepsData }"></ui-steps>
                    <ui-button
                      :item="{
                        text: '下一步',
                        clickHandle: stepsButtonHandle,
                        class: 'default',
                      }"
                    ></ui-button>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-picker
                      :item="{ ...pickerData, enterHandle: pickChangeHandle }"
                    ></ui-picker
                    ><!-- 
                <ui-picker-column
                  :item="{
                    data: pickerColumn,
                    changeHandle: pickerColumnChangeHandle,
                  }"
                ></ui-picker-column> -->
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-picker
                      :item="{ ...pickerDataA, enterHandle: pickChangeHandle }"
                    ></ui-picker>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-swiper :item="swiperData">
                      <template #content="{ item }">
                        <ui-image :item="{ ...item }"></ui-image>
                      </template>
                    </ui-swiper>
                  </template>
                </ui-card> </template
            ></ui-lazyload>
            <ui-lazyload>
              <template #content>
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
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
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
              </template></ui-lazyload
            >
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-stepper
                      :item="{
                        step: 200,
                        min: 0,
                        max: 1000,
                        value: 0,
                        changeHandle: stepChangeHandle,
                      }"
                    ></ui-stepper>
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
              </template></ui-lazyload
            >
            <ui-lazyload>
              <template #content>
                <ui-card>
                  <template #content>
                    <ui-animate :item="{ type: 'fadeInLeft', speed: 3 }">
                      <template #content>ui-animate test</template>
                    </ui-animate>
                  </template>
                </ui-card>
              </template>
            </ui-lazyload>
            <ui-lazyload>
              <template #content>
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
              </template>
            </ui-lazyload>
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
                    <ui-loading
                      :item="{ type: 'default', text: 'loading' }"
                    ></ui-loading>
                    <ui-loading
                      :item="{ type: 'circle', text: 'loading' }"
                    ></ui-loading>
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
                            icon: 'search',
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
                            icon: 'search',
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
                      <template #content="{ item }">
                        <ui-input
                          :item="{
                            type: 'number',
                            name: item.name,
                            placholder: '请输入验证码',
                            end: true,
                            enterHandle: enterHandle,
                            disabled: !isVertiy,
                            rules: { required: true, message: '验证码不正确' },
                          }"
                        >
                          <template #end>
                            <ui-divider
                              :item="{ type: 'vertical' }"
                            ></ui-divider>
                            <ui-button
                              :item="{
                                text: isVertiy
                                  ? downCountTime + '秒后重发'
                                  : '发送验证码',
                                clickHandle: vertiyClickHandle,
                                disabled: isVertiy,
                              }"
                            ></ui-button>
                          </template>
                        </ui-input>
                      </template>
                    </ui-form-item>
                    <ui-form-item>
                      <template #content>
                        <ui-radio-group
                          :item="{
                            ...radioData,
                            name: 'a',
                            changeHandle: radioGroupChangeHandle,
                            rules: { required: true, message: '请选中项' },
                          }"
                        ></ui-radio-group>
                      </template>
                    </ui-form-item>
                    <ui-form-item>
                      <template #content>
                        <ui-checkbox-group
                          :item="{
                            ...checkboxData,
                            name: 'b',
                            changeHandle: checkboxGroupChangeHandle,
                            rules: { required: true, message: '请选中项' },
                          }"
                        ></ui-checkbox-group>
                      </template>
                    </ui-form-item>
                    <ui-form-item>
                      <template #content>
                        <ui-switch
                          :item="{
                            name: 'agree',
                            trueValue: 1,
                            falseValue: 0,
                            text: 'switch 1',
                            rules: { required: true, message: '请选中项' },
                          }"
                        ></ui-switch>
                      </template>
                    </ui-form-item>
                    <ui-form-item>
                      <template #content>
                        <ui-switch
                          :item="{
                            name: 'man',
                            trueValue: 1,
                            falseValue: 0,
                            text: 'switch 2',
                          }"
                        ></ui-switch>
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
            <ui-tab :item="tabData">
              <template #content>
                <ui-image-list :item="{ ...imageList, moreHandle: moreHandle }">
                  <template #content="{ item }">
                    <ui-image-list-item :item="item"></ui-image-list-item>
                  </template>
                </ui-image-list>
              </template>
            </ui-tab>
          </template>
        </ui-panel>
      </template>
    </ui-animate>
    <ui-dialog :item="{ ...dialog, cancelDialogHandle, enterDialogHandle }">
      <template #content="{ item }">
        <ui-dialog-item :item="{ ...item }"></ui-dialog-item>
      </template>
    </ui-dialog>
    <uiForm></uiForm>
    <ui-action-sheet :item="actionSheet"></ui-action-sheet>
    <ui-gotop></ui-gotop>
    <ui-tabbar :item="tabbarData"></ui-tabbar>
    <ui-startapp :item="startAppData">
      <template #content> 123456 </template>
    </ui-startapp>
    <div
      style="
        position: fixed;
        top: 56px;
        left: 10px;
        z-index: 98;
        background-color: #fff;
      "
    >
      <ui-anchor :item="anchorData"></ui-anchor>
    </div>
  </div>
</template>
<script>
import UIComponents from "../uiComponents/index";
export default {
  components: {
    uiForm: UIComponents.components.uiForm,
  },
  data() {
    return {
      voteData: {
        total: 1000,
        unit: "票",
        title: "测试选票投递",
        desc: "单选",
        data: [
          {
            text: "选项1",
            count: 300,
          },
          {
            text: "选项2",
            count: 100,
          },
          {
            text: "选项3",
            count: 500,
          },
          {
            text: "选项4",
            count: 260,
          },
          {
            text: "选项5",
            count: 390,
          },
        ],
      },
      shuttleData: {
        data: [
          {
            image:
              "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg",
          },
          {
            image:
              "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg",
          },
          {
            image:
              "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg",
          },
        ],
        more: [
          {
            image:
              "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg",
          },
          {
            image:
              "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg",
          },
        ],
      },
      swipeCardData: {
        avatar: {
          image:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
        },
        data: [
          {
            title: "title 1",
            desc: "desc 1",
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            title: "title 2",
            desc: "desc 1",
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            title: "title 3",
            desc: "desc 1",
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            title: "title 4",
            desc: "desc 1",
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            title: "title 5",
            desc: "desc 1",
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
        ],
      },
      checkboxData: {
        data: [
          { text: "Checkbox 1", value: "1", checked: false },
          { text: "Checkbox 2", value: "2", checked: false, disabled: true },
          { text: "Checkbox 3", value: "3", checked: false },
        ],
      },
      radioData: {
        data: [
          { text: "Radio 1", value: "1", checked: false },
          { text: "Radio 2", value: "2", checked: false, disabled: true },
          { text: "Radio 3", value: "3", checked: false },
        ],
      },
      checkboxValue: [],
      radioValue: "",
      numberAniData: {
        type: "row",
        data: [{ value: "100,109,99" }, { value: "88.635" }, { value: "1956" }],
      },
      avatarGroupData: {
        data: [
          {
            image:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            image:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            image:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            image:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
          {
            image:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
          },
        ],
      },
      anchorData: {
        offsetTop: 56,
        data: [
          {
            title: "test1",
            id: "test1",
            children: {
              data: [
                {
                  title: "test1-1",
                  id: "test1-1",
                },
              ],
            },
          },
          {
            title: "test2",
            id: "test2",
          },
        ],
      },
      isImageViewShow: false,
      startAppData: {},
      commentData: {
        total: 5,
        data: [
          {
            user: {
              nickName: "用户昵称",
              image:
                "https://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg",
              url: "/user/123456",
            },
            content: "评论内容，评论内容测试。",
          },
          {
            user: {
              nickName: "用户昵称",
              image:
                "https://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg",
              url: "/user/123456",
            },
            content: "评论内容，评论内容测试。",
          },
          {
            user: {
              nickName: "用户昵称",
              image:
                "https://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg",
              url: "/user/123456",
            },
            content: "评论内容，评论内容测试。",
          },
          {
            user: {
              nickName: "用户昵称",
              image:
                "https://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg",
              url: "/user/123456",
            },
            content: "评论内容，评论内容测试。",
          },
          {
            user: {
              nickName: "用户昵称",
              image:
                "https://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg",
              url: "/user/123456",
            },
            content: "评论内容，评论内容测试。",
          },
        ],
      },
      crumbsData: {
        data: [
          {
            icon: "map-filling",
            text: "万宁",
            url: "/home",
          },
          {
            icon: "map-filling",
            text: "石梅湾",
          },
          { text: "你的位置" },
        ],
      },
      topicGroup: {
        type: "video",
        title: "问题：xxx",
        topic: {
          width: 335,
          height: 160,
          controls: true,
          fit: "fill",
          poster:
            "https://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg",
          src: [
            {
              src: "https://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.m4v",
              type: "video/mp4",
            },
            {
              src: "https://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.webm",
              type: "video/webm",
            },
          ],
        },
        options: {
          data: [
            {
              title: "答案1",
              timeUpdate: { start: 1, end: 10, next: 1 },
              showButtons: [2, 3],
              captions: "字幕1",
            },
            {
              title: "答案2",
              timeUpdate: { start: 10, end: 30, next: 2 },
              showButtons: [1, 3],
              captions: "字幕2",
            },
            {
              title: "答案3",
              timeUpdate: { start: 30, end: 40, next: 3 },
              showButtons: [3, 1],
              captions: "字幕3",
            },
            {
              title: "答案4",
              timeUpdate: { start: 40, end: 50, next: 0 },
              showButtons: [0, 1],
              captions: "字幕4",
            },
          ],
        },
      },
      videoData: {
        width: 335,
        height: 160,
        autoplay: false,
        controls: true,
        title: "内容标题",
        fit: "fill",
        poster:
          "https://easyhtml5video.com/assets/video/Penguins_of_Madagascar.jpg",
        src: [
          {
            src: "https://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.m4v",
            type: "video/mp4",
          },
          {
            src: "https://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.webm",
            type: "video/webm",
          },
        ],
      },
      more: {
        loading: false,
        loaded: false,
        loadingHandle: this.loadingHandle,
      },
      avatarData: {
        image:
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
      },
      treeSelectData: {
        data: [
          {
            title: "tab",
          },
          {
            title: "tab",
          },
          {
            title: "tab",
            badge: 2,
          },
          {
            title: "tab",
          },
        ],
      },
      cellData: [
        {
          icon: "add-circle",
          title: "单元格",
          desc: "简述",
          content: "内容",
          url: "/home",
        },
        {
          title: "单元格",
          tag: "标签",
          tagType: "primary",
          desc: "简述",
          content: "内容",
        },
        {
          icon: "add-circle",
          title: "单元格",
          content: "内容",
          tag: "标签",
          tagType: "danger",
          close: true,
        },
        {
          title: "单元格1",
          content: "内容",
          url: "/home",
        },
      ],
      isVertiy: false,
      second: 0,
      downCountTime: 60,
      tabbarData: {
        data: [
          {
            icon: "search",
            selectIcon: "search",
            color: "#333",
            selectColor: "red",
            text: "tab1",
            url: "/home",
          },
          {
            icon: "search",
            selectIcon: "search",
            color: "#333",
            selectColor: "red",
            text: "tab2",
            url: "/search",
          },
          {
            icon: "search",
            selectIcon: "search",
            color: "#333",
            selectColor: "red",
            text: "tab3",
            url: "/search",
            badge: 2,
          },
          {
            icon: "search",
            selectIcon: "search",
            color: "#333",
            selectColor: "red",
            text: "tab4",
            url: "/search",
          },
        ],
      },
      dropDownData: {
        data: [
          { text: "1111", value: 1 },
          { text: "2222", value: 2 },
          { text: "3333", value: 3 },
          { text: "4444", value: 4 },
        ],
      },
      crossBannerData: {
        title: "Cross Banner",
        slogan: "test",
        type: "cross",
        data: [
          {
            url: "",
            image:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
            title: "米家直流变频落地扇1X",
            desc: "模拟自然风算法 支持AI语音",
            currentPrice: "279",
            pastPrice: "330",
            unit: "CNY",
          },
          {
            url: "",
            image:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
            title: "米家直流变频落地扇1X",
            desc: "模拟自然风算法 支持AI语音",
            currentPrice: "279",
            pastPrice: "330",
            unit: "CNY",
          },
          {
            url: "",
            image:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
            title: "米家直流变频落地扇1X",
            desc: "模拟自然风算法 支持AI语音",
            currentPrice: "279",
            pastPrice: "330",
            unit: "CNY",
          },
          {
            url: "",
            image:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
            title: "米家直流变频落地扇1X",
            desc: "模拟自然风算法 支持AI语音",
            currentPrice: "279",
            pastPrice: "330",
            unit: "CNY",
          },
          {
            url: "",
            image:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
            title: "米家直流变频落地扇1X",
            desc: "模拟自然风算法 支持AI语音",
            currentPrice: "279",
            pastPrice: "330",
            unit: "CNY",
          },
          {
            url: "",
            image:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360",
            title: "米家直流变频落地扇1X",
            desc: "模拟自然风算法 支持AI语音",
            currentPrice: "279",
            pastPrice: "330",
            unit: "CNY",
          },
        ],
      },
      priceNoticeData: {
        title: "各国价格",
        slogan: "人民币",
        theme: "black",
        data: [
          {
            url: "",
            title: "中国",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "印度尼西亚",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "斯里兰卡",
            price: "9.9",
            unit: "CNY",
            trend: "down",
          },
          {
            url: "",
            title: "牙买加",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "中国",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "印度尼西亚",
            price: "9.9",
            unit: "CNY",
            trend: "down",
          },
          {
            url: "",
            title: "斯里兰卡",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "牙买加",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
        ],
      },
      priceNoticeDataA: {
        title: "各国价格",
        slogan: "人民币",
        theme: "white",
        data: [
          {
            url: "",
            title: "中国",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "印度尼西亚",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "斯里兰卡",
            price: "9.9",
            unit: "CNY",
            trend: "down",
          },
          {
            url: "",
            title: "牙买加",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "中国",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "印度尼西亚",
            price: "9.9",
            unit: "CNY",
            trend: "down",
          },
          {
            url: "",
            title: "斯里兰卡",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
          {
            url: "",
            title: "牙买加",
            price: "9.9",
            unit: "CNY",
            trend: "up",
          },
        ],
      },
      multipNavbarData: {
        data: [
          {
            title: "领券中心",
            desc: "2张券待取",
            icon: "search",
            color: "blue",
            router: "coupon",
          },
          {
            title: "领券中心",
            desc: "2张券待取",
            icon: "search",
            color: "red",
            router: "coupon",
          },
          {
            title: "领券中心",
            desc: "2张券待取",
            icon: "search",
            color: "green",
            router: "coupon",
          },
        ],
      },
      navbarListData: {
        data: [
          {
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "什么什么专区福利",
            desc: "参与送周边",
            router: "game",
          },
          {
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "什么什么专区福利",
            desc: "参与送周边",
            router: "game",
          },
          {
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "什么什么专区福利",
            desc: "参与送周边",
            router: "game",
          },
          {
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "什么什么专区福利",
            desc: "参与送周边",
            router: "game",
          },
          {
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "什么什么专区福利",
            desc: "参与送周边",
            router: "game",
          },
          {
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "什么什么专区福利",
            desc: "参与送周边",
            router: "game",
          },
        ],
      },
      tabData: {
        isHeaderFixed: true,
        data: [
          {
            title: "手机",
            api: "telephone",
            listRowsCount: 3,
          },
          {
            title: "食品",
            api: "xxx",
            listRowsCount: 3,
          },
          {
            title: "饮料",
            api: "aaa",
            listRowsCount: 3,
          },
          {
            title: "电脑",
            api: "bbbb",
            listRowsCount: 3,
          },
          {
            title: "汽车",
            api: "auto",
            listRowsCount: 3,
          },
          {
            title: "手饰",
            api: "cccc",
            listRowsCount: 3,
          },
          {
            title: "房产",
            api: "house",
            listRowsCount: 3,
          },
        ],
      },
      iconsListData: {
        rowCount: 1,
        offset: 2,
        data: [
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
          {
            url: "",
            image:
              "https://img.zcool.cn/community/01f1485847ce2ea8012060c8a7823e.jpg@1280w_1l_2o_100sh.jpg",
            title: "test",
          },
        ],
      },
      stepsData: {
        current: 2,
        data: [
          {
            title: "在流程一",
          },
          {
            title: "在流程二",
          },
          {
            title: "在流程三",
          },
          {
            title: "在流程四",
          },
          {
            title: "在流程五",
          },
        ],
      },
      actionSheet: {
        isShow: false,
        title: "这是标题测试，test",
        type: "down",
        data: [
          {
            text: "1",
            desc: "test 1",
            value: 1,
          },
          {
            text: "2",
            value: 2,
          },
          {
            text: "3",
            desc: "test 3",
            value: 3,
          },
          {
            text: "4",
            desc: "test 4",
            value: 4,
          },
        ],
      },
      pickerDataA: {
        data: [
          {
            data: [
              {
                title: "辽宁1",
                children: {
                  data: [
                    {
                      title: "辽宁1-1",
                    },
                    {
                      title: "辽宁1-2",
                    },
                    {
                      title: "辽宁1-3",
                    },
                  ],
                },
              },
              {
                title: "辽宁2",
                children: {
                  data: [
                    {
                      title: "辽宁2-1",
                    },
                    {
                      title: "辽宁2-2",
                    },
                    {
                      title: "辽宁2-3",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      pickerData: {
        data: [
          {
            data: [
              {
                title: "辽宁1",
              },
              {
                title: "辽宁2",
              },
            ],
          },
          {
            data: [
              {
                title: "辽宁1",
              },
              {
                title: "辽宁2",
              },
            ],
          },
          {
            data: [
              {
                title: "辽宁1",
              },
              {
                title: "辽宁2",
              },
            ],
          },
        ],
        title: "省份",
      },
      imageList: {
        data: [
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
      },
      pn: -1,
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
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn20%2F699%2Fw2000h2699%2F20181029%2F56f8-hnaivxq4820200.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629860085&t=0ace19bd4ca7aa7d868fb2cbca65ac81",
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
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20171112%2F5740889a9e9a428c9a6da8e539d2317f.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629860217&t=d33fbe46911413bed19669ddc840aaf6",
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
        current: 0,
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
      panelLoading: true,
    };
  },
  created() {
    this.actionSheet = {
      ...this.actionSheet,
      selectHandle: this.actionSheetSelectHandle,
    };
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
    setTimeout(() => {
      that.panelLoading = false;
    }, 1000);
  },
  methods: {
    voteClickHandle(data) {
      let that = this;
      return new Promise((resolve, reject) => {
        try {
          that.voteData.data[data.index].count += 1;
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    },
    shuttleClickHandle(data) {
      console.log(JSON.stringify(data));
    },
    refreshHandle() {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            resolve();
          }, 2000);
        } catch (e) {
          reject();
        }
      });
    },
    successHandle() {
      console.log("success");
    },
    errorHandle() {
      console.log("error");
    },
    checkboxGroupChangeHandle(v) {
      console.log(v);
    },
    checkboxChangeHandle(checked, v) {
      checked
        ? this.checkboxValue.push(v)
        : this.checkboxValue.indexOf(v) > -1 &&
          this.checkboxValue.splice(this.checkboxValue.indexOf(v), 1);
    },
    getCheckboxValueHandle() {
      console.log(this.checkboxValue);
    },
    radioGroupChangeHandle(v) {
      console.log(v);
    },
    radioChangeHandle(v) {
      this.radioValue = v;
      for (let i = 0; i < this.radioData.data.length; i++) {
        if (v === this.radioData.data[i].value) {
          this.radioData.data[i].checked = true;
        } else {
          this.radioData.data[i].checked = false;
        }
      }
    },
    getRadioValueHandle() {
      console.log(this.radioValue);
    },
    commentSubmitHandle(v) {
      this.$toast(v);
    },
    moreHandle() {
      let that = this;
      return new Promise((resolve, reject) => {
        try {
          if (that.pn + 1 >= 3) {
            resolve(false);
          } else {
            that.imageList.data = that.imageList.data.concat(
              that.imageList.data
            );
            that.pn += 1;
            resolve(that.pn + 1 >= 3 ? false : true);
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    loadingHandle() {
      let that = this;
      that.more.loading = true;
      this.loadTimeout && clearTimeout(this.loadTimeout);
      this.loadTimeout = setTimeout(() => {
        that.more.loading = false;
      }, 3000);
    },
    treeSelectChangeHandle(v) {
      console.log(v);
    },
    vertiyClickHandle() {
      this.isVertiy = true;
      let that = this;
      this.interval && clearInterval(this.interval);
      this.interval = setInterval(function () {
        /*  that.downCountTimeContent =
          "（" + that.downCountTime + "秒）后重新发送"; */
        --that.downCountTime;
        if (that.downCountTime <= 0) {
          // that.downCountTimeContent = "重新发送";
          that.downCountTime = 60;
          that.isVertiy = false;
        }
      }, 1000);
    },
    countDownEndHandle() {
      console.log("end");
    },
    dropDownChangeHandle() {
      console.log(arguments);
    },
    stepsButtonHandle() {
      if (this.stepsData.current >= this.stepsData.data.length - 1) {
        this.stepsData.current = 0;
        return;
      }
      this.stepsData.current += 1;
    },
    actionSheetSelectHandle(value, index) {
      this.$toast({ value, index });
    },
    searchClickHandle() {
      this.actionSheet.isShow = true;
    },
    stepChangeHandle(v) {
      this.scrollValue = v;
    },
    pickChangeHandle(v) {
      console.log(v);
    },
    pickerColumnChangeHandle(v) {
      this.$toast(JSON.stringify(v));
    },
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
    showImageViewHandle() {
      this.isImageViewShow = true;
    },
    closeImageViewHandle() {
      this.isImageViewShow = false;
    },
  },
};
</script>
<style lang="less">
@base: 23.44rem;
.cell_item {
  padding: 0;
  border-bottom: (1 / @base) solid #efefef;
  &:last-child {
    border: 0;
  }
}
</style>
