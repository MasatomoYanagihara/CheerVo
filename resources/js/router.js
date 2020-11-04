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
            title: 'ホーム',
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ './pages/Login.vue'),
        meta: {
            title: 'ログイン',
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
            title: 'ボイス詳細',
        },
        props: true
    },
    {
        path: "/register",
        name: "register",
        component: () => import(/* webpackChunkName: "register" */ './pages/Register.vue'),
        meta: {
            title: '会員登録',
        },
    },
    {
        path: "/search",
        name: "search",
        component: () => import(/* webpackChunkName: "search" */ './pages/Search.vue'),
        meta: {
            title: '検索',
        },
    },
    {
        path: "/users/:id",
        name: "users",
        component: () => import(/* webpackChunkName: "users" */ './pages/User.vue'),
        meta: {
            title: 'マイページ',
        },
    },
    {
        path: "/500",
        name: "systemError",
        component: () => import(/* webpackChunkName: "systemError" */ './pages/errors/SystemError.vue'),
        meta: {
            title: 'システムエラー',
        },
    },
    {
        path: "*",
        name: "notFound",
        component: () => import(/* webpackChunkName: "notFound" */ './pages/errors/NotFound.vue'),
        meta: {
            title: 'NotFound',
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
