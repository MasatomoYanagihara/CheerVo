<template>
    <div>
        <v-app-bar fixed flat style="background-color: #313732;">
            <Router-link :to="{ name: 'home' }">
                <v-toolbar-title class="product-title white--text"
                    >CheerVo</v-toolbar-title
                >
            </Router-link>

            <v-spacer></v-spacer>

            <div v-if="isLogin" class="white--text">
                <h3>{{ username }}</h3>
            </div>
            <div v-if="isLogin" class="plus-btn d-none d-sm-flex">
                <v-btn small rounded color="#F26101">
                    <span class="white--text">投稿する</span>
                </v-btn>
            </div>
            <div v-if="isLogin" class="d-none d-sm-flex">
                <v-btn
                    outlined
                    small
                    rounded
                    color="#FFFFFF"
                    @click="logout"
                    class="logout_btn font-weight-bold"
                >
                    ログアウト
                </v-btn>
            </div>
            <div v-else class="d-none d-sm-flex">
                <Router-link :to="{ name: 'register' }">
                    <v-btn class="register_btn" outlined small rounded>
                        <span class="white--text">会員登録</span>
                    </v-btn>
                </Router-link>
                <Router-link :to="{ name: 'login' }">
                    <v-btn
                        outlined
                        small
                        rounded
                        color="#FFFFFF"
                        class="login_btn"
                    >
                        ログイン
                    </v-btn>
                </Router-link>
            </div>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                color="white"
            ></v-app-bar-nav-icon>
        </v-app-bar>
        <!-- サイドナビゲーションメニュー -->
        <v-navigation-drawer v-model="drawer" app right>
            <v-list dense>
                <v-list-item-title class="pl-2">MENU</v-list-item-title>
                <!-- ホーム -->
                <router-link to="/">
                    <v-list-item link class="menu-item-1">
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>ホーム</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>

                <!-- マイページ -->
                <RouterLink :to="`/users/${userId}`">
                    <div v-if="isLogin">
                        <v-list-item link class="menu-item-1">
                            <v-list-item-action>
                                <v-icon>mdi-account-circle</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title
                                    >マイページ</v-list-item-title
                                >
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </RouterLink>

                <!-- ヘルプ -->
                <v-list-item link class="menu-item-2">
                    <v-list-item-action>
                        <v-icon>mdi-help</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>ヘルプ</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <!-- 会員登録 -->
                <div v-if="!isLogin">
                    <router-link to="/register">
                        <v-list-item link class="menu-item">
                            <v-list-item-action>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>会員登録</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </div>
                <!-- ログイン -->
                <div v-if="!isLogin">
                    <router-link to="/login">
                        <v-list-item link class="menu-item">
                            <v-list-item-action>
                                <v-icon>mdi-login-variant</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>ログイン</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                </div>
                <!-- ログアウト -->
                <div v-if="isLogin" @click="logout">
                    <v-list-item link class="menu-item">
                        <v-list-item-action>
                            <v-icon>mdi-login-variant</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>ログアウト</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
    data() {
        return {
            drawer: false // サイドナビトグル
        };
    },
    computed: {
        // ログインチェック
        isLogin() {
            return this.$store.getters["auth/check"];
        },
        // ユーザーネーム取得
        username() {
            return this.$store.getters["auth/username"];
        },
        // ユーザーID取得
        userId() {
            return this.$store.getters["auth/userId"];
        },
        ...mapState({
            apiStatus: state => state.auth.apiStatus
        }),
        ...mapGetters({
            isLogin: "auth/check"
        })
    },
    methods: {
        async logout() {
            await this.$store.dispatch("auth/logout");

            if (this.apiStatus) {
                this.$router.push("/login");
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.product-title {
    font-size: 30px;
    font-family: "Poppins", sans-serif;
}
.login_btn {
    margin-left: 8px;
}
.logout_btn {
    width: 84px;
    margin-left: 8px;
}
.register_btn {
    background-color: #f26101;
}
.plus-btn {
    width: 84px;
    margin-left: 14px;
}
</style>
