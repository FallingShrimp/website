import "./common.css";
import rawTexts from "./assets/texts.txt?raw";
import * as Vue from "vue";
import App from "./components/App.vue";
import "./articles";
import { isDev } from "./utils";
import { articles } from "./articles";
// import Fallen from "./components/Fallen.vue";

const app = Vue.createApp(App);
app.mixin({
    data() {
        return {
            window
        };
    }
});
app.mount("#app");

if (isDev()) {
    console.log(articles);
} else {
    rawTexts.split("\n").forEach(e => {
        console.log(e);
        console.log("---");
    });
}
