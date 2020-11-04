<template>
    <div>
        <v-bottom-navigation class="d-sm-none" fixed>
            <v-btn @click="moveToTopOrHomepage">
                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn @click="moveToTopOrSerchPage">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn @click="moveToTopOrFavoritePage">
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn @click="moveToTopOrMypage">
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </v-bottom-navigation>
        <v-snackbar v-model="snackbar1" :timeout="timeout1" color="#313732" centered>
            お気に入り機能は近日リリース予定です
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar1 = false"
                >
                    閉じる
                </v-btn>
            </template>
        </v-snackbar>
        <v-snackbar v-model="snackbar2" :timeout="timeout2" color="#313732" centered>
            ログインしてください
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar2 = false"
                >
                    閉じる
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
} from '@vue/composition-api';

export default defineComponent({
    setup(prop, context) {
        const state = reactive({
            snackbar1: false,
            timeout1: 3000,
            snackbar2: false,
            timeout2: 3000,

            // ログインチェック
            isLogin: computed(
                () => context.root.$store.getters["auth/check"],
            ),
            // ユーザーID取得
            userId: computed(
                () => context.root.$store.getters["auth/userId"],
            ),
        })

        const moveToTopOrHomepage = () => {
            if (context.root.$route.path === "/") {
                const duration = 300; // 移動速度（0.3秒で終了）
                const interval = 20; // 0.020秒ごとに移動
                const step = -window.scrollY / Math.ceil(duration / interval); // 1回に移動する距離
                const timer = setInterval(() => {
                    window.scrollBy(0, step); // スクロール位置を移動

                    if (window.scrollY <= 0) {
                        clearInterval(timer);
                    }
                }, interval);
            } else {
                context.root.$router.push({ name: "home" });
            }
        }

        const moveToTopOrSerchPage = () => {
            if (context.root.$route.path === "/search") {
                const duration = 300; // 移動速度（0.3秒で終了）
                const interval = 20; // 0.020秒ごとに移動
                const step = -window.scrollY / Math.ceil(duration / interval); // 1回に移動する距離
                const timer = setInterval(() => {
                    window.scrollBy(0, step); // スクロール位置を移動

                    if (window.scrollY <= 0) {
                        clearInterval(timer);
                    }
                }, interval);
            } else {
                context.root.$router.push({ name: "search" });
            }
        }

        const moveToTopOrFavoritePage = () => {
            state.snackbar1 = true;
        }

        const moveToTopOrMypage = () => {
            if (state.isLogin) {
                if (context.root.$route.path === `/users/${state.userId}`) {
                    const duration = 300; // 移動速度（0.3秒で終了）
                    const interval = 20; // 0.020秒ごとに移動
                    const step =
                        -window.scrollY / Math.ceil(duration / interval); // 1回に移動する距離
                    const timer = setInterval(() => {
                        window.scrollBy(0, step); // スクロール位置を移動

                        if (window.scrollY <= 0) {
                            clearInterval(timer);
                        }
                    }, interval);
                } else {
                    context.root.$router.push(`/users/${state.userId}`);
                }
            } else {
                state.snackbar2 = true;
            }
        }

        return {
            ...toRefs(state),
            moveToTopOrHomepage,
            moveToTopOrSerchPage,
            moveToTopOrFavoritePage,
            moveToTopOrMypage
        };
    }
})
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>
