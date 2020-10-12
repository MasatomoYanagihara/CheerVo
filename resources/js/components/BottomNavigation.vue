<template>
    <v-bottom-navigation fixed>
        <v-btn @click="moveToTop">
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn>
            <RouterLink :to="`/users/${userId}`">
                <v-icon>mdi-account-circle</v-icon>
            </RouterLink>
        </v-btn>
    </v-bottom-navigation>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
    methods: {
        // ホーム画面なら一番上までスクロール、その他のページならホーム画面に移動
        moveToTop() {
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
        }
    },
    computed: {
        // ユーザーID取得
        userId() {
            return this.$store.getters["auth/userId"];
        }
    }
};
</script>
<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>
