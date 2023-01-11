import {createApp} from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./routes";

const app = createApp(App);
app.use(router);
app.mount("#app");
