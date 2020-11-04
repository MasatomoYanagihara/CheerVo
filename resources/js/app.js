import "./bootstrap";
import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // アイコン
import "material-design-icons-iconfont/dist/material-design-icons.css"; // アイコン
import InfiniteLoading from 'vue-infinite-loading';
import VueCompositionApi from '@vue/composition-api';


Vue.use(Vuetify);
Vue.use(InfiniteLoading);
Vue.use(VueCompositionApi) ;

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
