import Vue from "vue";
import uiCard from "./card/card";
import uiButton from "./button/button";
import uiIcon from "./icon/icon";
import uiLink from "./alink/alink.vue";
import uiImage from "./image/image.vue";

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
};