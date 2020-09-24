import Vue from "vue";
import VueRouter from "vue-router";

import VoiceList from "./pages/VoiceList.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: VoiceList
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
