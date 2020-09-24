import "./bootstrap";
import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // アイコン
import "material-design-icons-iconfont/dist/material-design-icons.css"; // アイコン

Vue.use(Vuetify);

const createApp = async () => {
    // ログイン確認処理
    await store.dispatch("auth/currentUser");

    new Vue({
        el: "#app",
        router,
        store,
        vuetify: new Vuetify(),
        components: { App },
        template: "<App />"
    });
};

createApp();
