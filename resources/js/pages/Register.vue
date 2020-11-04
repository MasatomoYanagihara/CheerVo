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
            registerForm: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },

            apiStatus: computed(() => context.root.$store.state.auth.apiStatus),
            loginErrors: computed(
                () => context.root.$store.state.auth.loginErrorMessages
            ),
            registerErrors: computed(
                () => context.root.$store.state.auth.registerErrorMessages
            )
        });

        onMounted(() => clearError());

        const register = async () => {
            await context.root.$store.dispatch(
                "auth/register",
                state.registerForm
            );

            if (state.apiStatus) {
                context.root.$router.push("/");
            }
        };
        const clearError = () => {
            context.root.$store.commit("auth/setLoginErrorMessages", null);
            context.root.$store.commit("auth/setRegisterErrorMessages", null);
        };

        return {
            ...toRefs(state),
            register
        };
    }
});
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
