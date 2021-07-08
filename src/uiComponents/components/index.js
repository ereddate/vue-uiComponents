import Vue from "vue";
import uiCard from "./card/card";
import uiButton from "./button/button";
import uiIcon from "./icon/icon";
import uiLink from "./alink/alink";
import uiImage from "./image/image";
import uiBanner from "./banner/banner";
import uiGotop from "./gotop/gotop";
import uiLoading from "./loading/loading";
import uiTimeline from "./timeline/timeline";
import uiTimelineItem from "./timeline-item/timeline-item";
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
};