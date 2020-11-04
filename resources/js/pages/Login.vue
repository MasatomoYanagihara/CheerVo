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
                        <ul v-if="loginErrors.email" class="error-message">
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
                        <ul v-if="loginErrors.password" class="error-message">
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
                        <v-btn class="login-button" type="submit"
                            >ログイン</v-btn
                        >
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import {
    defineComponent,
    reactive,
    toRefs,
    computed,
    onMounted
} from "@vue/composition-api";

export default defineComponent({
    setup(prop, context) {
        const state = reactive({
            loginForm: {
                email: "",
                password: ""
            },

            apiStatus: computed(() => context.root.$store.state.auth.apiStatus),
            loginErrors: computed(
                () => context.root.$store.state.auth.loginErrorMessages
            )
        });

        onMounted(() => clearError());

        const login = async () => {
            await context.root.$store.dispatch("auth/login", state.loginForm);

            // API通信に問題がなければ"/"に遷移
            if (state.apiStatus) {
                context.root.$router.push("/");
            }
        };
        const clearError = () => {
            context.root.$store.commit("auth/setLoginErrorMessages", null);
        };

        return {
            ...toRefs(state),
            login
        };
    }
});
</script>
<style lang="scss" scoped>
.login-button {
    display: block;
    margin: 0 0 0 auto;
}
.error-message {
    color: red;
    list-style-type: none;
}
</style>
