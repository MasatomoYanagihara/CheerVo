<template>
    <div>
        <v-app-bar fixed flat style="background-color: #ffa319;">
            <Router-link :to="{ name: 'home' }">
                <v-toolbar-title class="product-title white--text"
                    >CheerVo</v-toolbar-title
                >
            </Router-link>

            <v-spacer></v-spacer>

            <div v-if="isLogin" class="white--text">
                <h3>{{ userName }}</h3>
            </div>
            <div v-if="isLogin" class="plus-button d-none d-sm-flex">
                <v-btn small rounded color="#F26101">
                    <span class="white--text font-weight-bold">投稿する</span>
                </v-btn>
            </div>
            <div v-if="isLogin" class="d-none d-sm-flex">
                <v-btn
                    outlined
                    small
                    rounded
                    color="#FFFFFF"
                    @click="logout"
                    class="logout-button font-weight-bold"
                >
                    <span class="font-weight-bold">ログアウト</span>
                </v-btn>
            </div>
            <div v-if="!isLogin && this.$route.path === '/login'">
                <Router-link :to="{ name: 'register' }">
                    <v-btn
                        outlined
                        small
                        rounded
                        color="#FFFFFF"
                        class="register-button"
                    >
                        <span class="white--text font-weight-bold"
                            >会員登録</span
                        >
                    </v-btn>
                </Router-link>
            </div>
            <div v-if="!isLogin && !(this.$route.path === '/login')">
                <Router-link :to="{ name: 'login' }">
                    <v-btn
                        outlined
                        small
                        rounded
                        color="#FFFFFF"
                        class="login-button"
                    >
                        <span class="font-weight-bold">ログイン</span>
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
                <div v-if="isLogin">
                    <RouterLink :to="`/users/${userId}`">
                        <v-list-item link class="menu-item-1">
                            <v-list-item-action>
                                <v-icon>mdi-account-circle</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    マイページ
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </RouterLink>
                </div>

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
        isLogin() {
            return this.$store.getters["auth/getLoginCheck"];
        },
        userName() {
            return this.$store.getters["auth/getUserName"];
        },
        userId() {
            return this.$store.getters["auth/getUserId"];
        },
        ...mapState({
            apiStatus: state => state.auth.apiStatus
        }),
        ...mapGetters({
            isLogin: "auth/getLoginCheck"
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
.login-button {
    margin-left: 8px;
}
.logout-button {
    width: 84px;
    margin-left: 8px;
}
.plus-button {
    width: 84px;
    margin-left: 14px;
}
</style>
