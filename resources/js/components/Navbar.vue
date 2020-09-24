<template>
    <div>
        <v-app-bar color="white" dense>
            <Router-link :to="{ name: 'home' }">
                <v-toolbar-title class="black--text"
                    >Page title</v-toolbar-title
                >
            </Router-link>

            <v-spacer></v-spacer>

            <div v-if="isLogin">
                <div>
                    {{ username }}
                </div>
                <v-btn outlined small @click="logout">
                    ログアウト
                </v-btn>
            </div>
            <div v-else>
                <Router-link :to="{ name: 'login' }">
                    <v-btn outlined small>
                        ログイン
                    </v-btn>
                </Router-link>
                <Router-link :to="{ name: 'register' }">
                    <v-btn outlined small class="register_btn">
                        会員登録
                    </v-btn>
                </Router-link>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    computed: {
        // ログインチェック
        isLogin() {
            return this.$store.getters["auth/check"];
        },
        // ユーザーネーム取得
        username() {
            return this.$store.getters["auth/username"];
        }
    },
    methods: {
        async logout() {
            await this.$store.dispatch("auth/logout");
            console.log("ログアウトしました");

            this.$router.push("/login");
        }
    }
};
</script>
