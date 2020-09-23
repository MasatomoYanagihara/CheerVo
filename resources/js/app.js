require("./bootstrap");

import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

new Vue({
    el: "#app",
    router,
    vuetify: new Vuetify(),
    components: { App },
    template: "<App />"
});
