import Vue from "vue";
import uiCard from "./card/index";
import uiButton from "./button/index";
import uiIcon from "./icon/index";
import uiLink from "./alink/index";
import uiImage from "./image/index";
import uiBanner from "./banner/index";
import uiGotop from "./gotop/index";
import uiLoading from "./loading/index";
import uiTimeline from "./timeline/index";
import uiTimelineItem from "./timeline-item/index";
import uiNavbar from "./navbar/index";
import uiPanel from "./panel/index";
import uiInput from "./input/index";
import uiForm from "./form/index";
import uiFormItem from "./form-item/index";
import uiDivider from "./divider/index";
import uiToast from "./toast/index";
import uiList from "./list/index";
import uiListItem from "./list-item/index";
import uiToggleButton from "./toggle-button/index";
import uiAnimate from "./animate/index";
import uiTextItem from "./text-item/index";
import uiImageTextItem from "./imageText-item/index";
import uiScrollView from "./scroll-view/index";
import uiCollapse from "./collapse/index";
import uiCollapseGroup from "./collapse-group/index";
import uiSwiper from "./swiper/index";
import uiDialog from "./dialog/index";
import uiDialogItem from "./dialog-item/index";
import uiImageList from "./imageList/index";
import uiImageListItem from "./imageList-item/index";
Vue.component("ui-remote-script", {
    render: function(createElement) {
        var self = this;
        return createElement("script", {
            attrs: {
                type: "text/javascript",
                src: this.src,
            },
            on: {
                load: function(event) {
                    self.$emit("load", event);
                },
                error: function(event) {
                    self.$emit("error", event);
                },
                readystatechange: function(event) {
                    if (this.readyState == "complete") {
                        self.$emit("load", event);
                    }
                },
            },
        });
    },
    props: {
        src: {
            type: String,
            required: true,
        },
    },
});

export const components = {
    uiCard,
    uiButton,
    uiIcon,
    uiLink,
    uiImage,
    uiBanner,
    uiGotop,
    uiLoading,
    uiTimeline,
    uiTimelineItem,
    uiNavbar,
    uiPanel,
    uiInput,
    uiForm,
    uiFormItem,
    uiDivider,
    uiToast,
    uiList,
    uiListItem,
    uiToggleButton,
    uiAnimate,
    uiTextItem,
    uiImageTextItem,
    uiScrollView,
    uiCollapse,
    uiCollapseGroup,
    uiSwiper,
    uiDialog,
    uiDialogItem,
    uiImageList,
    uiImageListItem,
};