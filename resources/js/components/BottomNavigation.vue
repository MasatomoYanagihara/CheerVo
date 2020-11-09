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
            お気に入り機能は未実装です
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
import { mapState, mapGetters } from "vuex";

export default {
    data() {
        return {
            snackbar1: false,
            timeout1: 3000,
            snackbar2: false,
            timeout2: 3000
        };
    },
    computed: {
        // ログインチェック
        isLogin() {
            return this.$store.getters["auth/check"];
        },
        // ユーザーID取得
        userId() {
            return this.$store.getters["auth/userId"];
        }
    },
    methods: {
        moveToTopOrHomepage() {
            if (this.$route.path === "/") {
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
                this.$router.push({ name: "home" });
            }
        },
        moveToTopOrSerchPage() {
            if (this.$route.path === "/search") {
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
                this.$router.push({ name: "search" });
            }
        },
        moveToTopOrFavoritePage() {
            this.snackbar1 = true;
        },
        moveToTopOrMypage() {
            if (this.isLogin) {
                if (this.$route.path === `/users/${this.userId}`) {
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
                    this.$router.push(`/users/${this.userId}`);
                }
            } else {
                this.snackbar2 = true;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>
