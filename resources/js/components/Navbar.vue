<template>
  <div>
    <v-app-bar color="grey lighten-4" fixed>
      <Router-link :to="{ name: 'home' }">
        <v-toolbar-title class="black--text">Voice</v-toolbar-title>
      </Router-link>

      <v-spacer></v-spacer>

      <div v-if="isLogin">
        {{ username }}
      </div>
      <div v-if="isLogin">
        <v-btn
          outlined
          small
          rounded
          @click="logout"
          class="logout_btn font-weight-bold"
        >
          ログアウト
        </v-btn>
      </div>
      <div v-else>
        <Router-link :to="{ name: 'login' }">
          <v-btn outlined small rounded> ログイン </v-btn>
        </Router-link>
        <Router-link :to="{ name: 'register' }">
          <v-btn outlined small rounded class="register_btn"> 会員登録 </v-btn>
        </Router-link>
      </div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- サイドナビゲーションメニュー -->
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-list-item-title style="padding-left: 12px">MENU</v-list-item-title>

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
                <v-list-item-title>マイページ</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </RouterLink>

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
      drawer: false, // サイドナビトグル
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
      apiStatus: (state) => state.auth.apiStatus,
    }),
    ...mapGetters({
      isLogin: "auth/check",
    }),
  },
  methods: {
    async logout() {
      await this.$store.dispatch("auth/logout");

      if (this.apiStatus) {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.logout_btn {
  width: 68px;
  margin-left: 14px;
}
</style>