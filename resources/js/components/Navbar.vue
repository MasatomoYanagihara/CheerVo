<template>
    <div>
        <v-app-bar color="white" dense>
            <Router-link :to="{ name: 'home' }">
                <v-toolbar-title class="black--text"
                    >Page title</v-toolbar-title
                >
            </Router-link>

            <v-spacer></v-spacer>

            <Router-link :to="{ name: 'login' }">
                <v-btn outlined small>
                    ログイン
                </v-btn>
            </Router-link>
            <Router-link :to="{ name: 'logout' }">
                <v-btn outlined small @click="logout">
                    ログアウト
                </v-btn>
            </Router-link>
            <Router-link :to="{ name: 'register' }">
                <v-btn outlined small class="register_btn">
                    会員登録
                </v-btn>
            </Router-link>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    methods: {
        async logout() {
            await this.$store.dispatch("auth/logout");
            console.log('ログアウトしました')

            this.$router.push("/login");
        }
    }
};
</script>
