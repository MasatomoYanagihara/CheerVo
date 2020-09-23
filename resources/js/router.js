import Vue from "vue";
import VueRouter from "vue-router";

import VoiceList from "./pages/VoiceList.vue";
import Login from "./pages/Login.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: VoiceList
    },
    {
        path: "/login",
        component: Login
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
