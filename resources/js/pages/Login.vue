<template>
  <div>
    <v-card width="400px" class="mx-auto mt-8">
      <v-card-title>
        <h1 class="display-1 mx-auto">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <!-- メールアドレスエラーメッセージ表示 -->
          <div v-if="loginErrors">
            <ul v-if="loginErrors.email" class="errorMessage">
              <li v-for="msg in loginErrors.email" :key="msg">
                {{ msg }}
              </li>
            </ul>
          </div>
          <v-text-field
            prepend-icon="mdi-email"
            label="メールアドレス"
            v-model="loginForm.email"
          />
          <!-- パスワードエラーメッセージ表示 -->
          <div v-if="loginErrors">
            <ul v-if="loginErrors.password" class="errorMessage">
              <li v-for="msg in loginErrors.password" :key="msg">
                {{ msg }}
              </li>
            </ul>
          </div>
          <v-text-field
            prepend-icon="mdi-lock"
            type="password"
            label="パスワード"
            v-model="loginForm.password"
          />
          <v-card-actions>
            <v-btn class="login_btn" type="submit">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState({
      apiStatus: (state) => state.auth.apiStatus,
      loginErrors: (state) => state.auth.loginErrorMessages,
    }),
  },
  methods: {
    async login() {
      // authストアのloginアクションを呼び出す
      await this.$store.dispatch("auth/login", this.loginForm);

      // API通信に問題がなければ"/"に遷移
      if (this.apiStatus) {
        this.$router.push("/");
      }
    },
    clearError() {
      this.$store.commit("auth/setLoginErrorMessages", null);
    },
  },
  created() {
    this.clearError();
  },
};
</script>
<style lang="scss" scoped>
.login_btn {
  display: block;
  margin: 0 0 0 auto;
}
.errorMessage {
  color: red;
}
</style>
