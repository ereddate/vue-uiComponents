import vant from "vant";
import { Lazyload } from "vant";
import "vant/lib/index.css";
console.log("import vant");
export const done = function(Vue) {
    Vue.use(vant);
    Vue.use(Lazyload);
};