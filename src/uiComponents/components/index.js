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
};