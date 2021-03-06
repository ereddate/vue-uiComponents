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
import uiTopicGroup from "./topicGroup/index";
import uiCrumbs from "./crumbs/index";
import uiComment from "./comment/index";
import uiRow from "./row/index";
import uiCol from "./col/index";
import uiStartapp from "./startApp/index";
import uiImageView from "./imageView/index";
import uiAnchor from "./anchor/index";
import uiAnchorLink from "./anchor-link/index";
import uiAvatarGroup from "./avatar-group/index";
import uiNumberAnimate from "./animateNumber/index";
import uiRadio from "./radio/index";
import uiRadioGroup from "./radio-group/index";
import uiCheckbox from "./checkbox/index";
import uiCheckboxGroup from "./checkbox-group/index";
import uiSwipeCard from "./swipeCard/index";
import uiSwitch from "./switch/index";
import uiTabsCard from "./tabsCard/index";
import uiPullRefresh from "./pullRefresh/index";
import uiEmpty from "./empty/index";
import uiPop from "./pop/index";
import uiLazyload from "./lazyload/index";
import uiIconShuttle from "./iconShuttle/index";
import uiResult from "./result/index";
import uiVote from "./vote/index";
import uiProgress from "./progress/index";
import uiButtonGroup from "./button-group/index"

Vue.component("ui-remote-script", {
    render: function (createElement) {
        var self = this;
        return createElement("script", {
            attrs: {
                type: "text/javascript",
                src: this.src,
            },
            on: {
                load: function (event) {
                    self.$emit("load", event);
                },
                error: function (event) {
                    self.$emit("error", event);
                },
                readystatechange: function (event) {
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
    uiTopicGroup,
    uiCrumbs,
    uiComment,
    uiRow,
    uiCol,
    uiStartapp,
    uiImageView,
    uiAnchor,
    uiAnchorLink,
    uiAvatarGroup,
    uiNumberAnimate,
    uiRadio,
    uiRadioGroup,
    uiCheckbox,
    uiCheckboxGroup,
    uiSwipeCard,
    uiSwitch,
    uiTabsCard,
    uiPullRefresh,
    uiEmpty,
    uiPop,
    uiLazyload,
    uiIconShuttle,
    uiResult,
    uiVote,
    uiProgress,
    uiButtonGroup
};