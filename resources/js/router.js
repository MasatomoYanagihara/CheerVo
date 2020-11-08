import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ './pages/VoiceList.vue'),
        meta: {
            title: 'CheerVo',
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue'),
        meta: {
            title: 'CheerVo - ログイン',
        },
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
        name: "voiceDetail",
        component: () => import(/* webpackChunkName: "voiceDetail" */ './pages/VoiceDetail.vue'),
        meta: {
            title: 'CheerVo - ボイス詳細',
        },
        props: true
    },
    {
        path: "/register",
        name: "register",
        component: () => import(/* webpackChunkName: "register" */ './pages/Register.vue'),
        meta: {
            title: 'CheerVo - 会員登録',
        },
    },
    {
        path: "/search",
        name: "search",
        component: () => import(/* webpackChunkName: "search" */ './pages/Search.vue'),
        meta: {
            title: 'CheerVo - 検索',
        },
    },
    {
        path: "/users/:id",
        name: "users",
        component: () => import(/* webpackChunkName: "users" */ './pages/User.vue'),
        meta: {
            title: 'CheerVo - マイページ',
        },
    },
    {
        path: "/500",
        name: "systemError",
        component: () => import(/* webpackChunkName: "systemError" */ './pages/errors/SystemError.vue'),
        meta: {
            title: 'CheerVo - システムエラー',
        },
    },
    {
        path: "*",
        name: "notFound",
        component: () => import(/* webpackChunkName: "notFound" */ './pages/errors/NotFound.vue'),
        meta: {
            title: 'CheerV0 - NotFound',
        },
    }
];

const router = new VueRouter({
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes
});

router.afterEach(to => {
    // meta.titleがなけらばreturn
    if (!to.meta.title) {
        return;
    }

    // meta.titleがあればtitleに表示
    document.title = to.meta.title;
});

export default router;
