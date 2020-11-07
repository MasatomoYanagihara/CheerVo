<template>
    <div>
        <v-card width="400px" class="mx-auto mt-8">
            <v-card-title>
                <h1 class="display-1 mx-auto">会員登録</h1>
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="register">
                    <!-- 名前エラーメッセージ表示 -->
                    <div v-if="registerErrors" class="error-message">
                        <ul v-if="registerErrors.name">
                            <li v-for="msg in registerErrors.name" :key="msg">
                                {{ msg }}
                            </li>
                        </ul>
                    </div>
                    <v-text-field
                        prepend-icon="mdi-account-circle"
                        label="名前（15文字以内）"
                        v-model="registerForm.name"
                    />
                    <!-- メールアドレスエラーメッセージ表示 -->
                    <div v-if="registerErrors" class="error-message">
                        <ul v-if="registerErrors.email">
                            <li v-for="msg in registerErrors.email" :key="msg">
                                {{ msg }}
                            </li>
                        </ul>
                    </div>
                    <v-text-field
                        prepend-icon="mdi-email"
                        label="メールアドレス"
                        v-model="registerForm.email"
                    />
                    <!-- パスワードエラーメッセージ表示 -->
                    <div v-if="registerErrors" class="error-message">
                        <ul v-if="registerErrors.password">
                            <li
                                v-for="msg in registerErrors.password"
                                :key="msg"
                            >
                                {{ msg }}
                            </li>
                        </ul>
                    </div>
                    <v-text-field
                        prepend-icon="mdi-lock"
                        type="password"
                        label="パスワード"
                        v-model="registerForm.password"
                    />
                    <v-text-field
                        prepend-icon="mdi-lock"
                        type="password"
                        label="パスワード (再入力)"
                        v-model="registerForm.password_confirmation"
                    />
                    <v-card-actions>
                        <v-btn class="register-button" type="submit"
                            >登録する</v-btn
                        >
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
            registerForm: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    },
    computed: mapState({
        apiStatus: state => state.auth.apiStatus,
        loginErrors: state => state.auth.loginErrorMessages,
        registerErrors: state => state.auth.registerErrorMessages
    }),
    methods: {
        // 会員登録メソッド
        async register() {
            // authストアのresigterアクションを呼び出す
            await this.$store.dispatch("auth/register", this.registerForm);

            // API通信に問題がなければ"/"に遷移
            if (this.apiStatus) {
                this.$router.push("/");
            }
        }
    },
    clearError() {
        this.$store.commit("auth/setLoginErrorMessages", null);
        this.$store.commit("auth/setRegisterErrorMessages", null);
    }
};
</script>
<style lang="scss" scoped>
.register-button {
    display: block;
    margin: 0 0 0 auto;
}
.error-message {
    color: red;
}
</style>
