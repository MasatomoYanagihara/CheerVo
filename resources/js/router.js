import Vue from "vue";
import VueRouter from "vue-router";

import VoiceList from "./pages/VoiceList.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import store from "./store";
import SystemError from "./pages/errors/System.vue";
import VoiceDetail from "./pages/VoiceDetail.vue";
import NotFound from "./pages/errors/NotFound.vue";
import Users from "./pages/User.vue";
import Serch from "./pages/Serch.vue";

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
        component: Login,
        beforeEnter(to, from, next) {
            // getterでログイン状態を確認
            if (store.getters["auth/check"]) {
                // ログインしていれば"/login"にアクセスせず"/"に遷移
                next("/");
            } else {
                next();
            }
        }
    },
    {
        path: "/voices/:id",
        component: VoiceDetail,
        props: true
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/serch",
        name: "serch",
        component: Serch
    },
    {
        path: "/users/:id",
        name: "users",
        component: Users
    },
    {
        path: "/500",
        component: SystemError
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes
});

export default router;
