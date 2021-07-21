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
import uiPickerColumn from "./picker-column/index";
import uiPicker from "./picker/index";
import uiStepper from "./stepper/index";
import uiActionSheet from "./actionSheet/index";
import uiSteps from "./steps/index";
import uiIconsList from "./iconsList/index";
import uiTab from "./tab/index";
import uiNavbarList from "./navbarList/index";
import uiMultipNavbar from "./multipNavbar/index";
import uiPriceNotice from "./priceNotice/index";
import uiDropdownItem from "./dropdown-item/index";
import uiToolsBar from "./toolsbar/index";
import uiOverlay from "./overlay/index";
import uiTabbar from "./tabbar/index";
import uiBadge from "./badge/index";
import uiCountdown from "./countDown/index";
import uiCell from "./cell/index";
import uiTag from "./tag/index";
import uiTreeselect from "./treeSelect/index";
import uiSidebar from "./sidebar/index";
import uiAvatar from "./avatar/index";
import uiTextarea from "./textarea/index";
import uiMore from "./more/index";
import uiVideo from "./video/index";
import uiVideoItem from "./video-item/index";

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
    uiPickerColumn,
    uiPicker,
    uiStepper,
    uiActionSheet,
    uiSteps,
    uiIconsList,
    uiTab,
    uiNavbarList,
    uiMultipNavbar,
    uiPriceNotice,
    uiDropdownItem,
    uiToolsBar,
    uiOverlay,
    uiTabbar,
    uiBadge,
    uiCountdown,
    uiCell,
    uiTag,
    uiTreeselect,
    uiSidebar,
    uiAvatar,
    uiTextarea,
    uiMore,
    uiVideo,
    uiVideoItem,
};