import "./common.css";
import rawTexts from "./assets/texts.txt?raw";
import * as Vue from "vue";
import App from "./components/App.vue";
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

rawTexts.split("\n").forEach(e => {
    console.log(e);
    console.log("---");
});
