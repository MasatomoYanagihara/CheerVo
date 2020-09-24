<template>
    <div>
        <v-card width="400px" class="mx-auto mt-8">
            <v-card-title>
                <h1 class="display-1">ログイン</h1>
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="login">
                    <v-text-field
                        prepend-icon="mdi-account-circle"
                        label="E-mail"
                        v-model="loginForm.email"
                    />
                    <v-text-field
                        prepend-icon="mdi-lock"
                        type="password"
                        label="Password"
                        v-model="loginForm.password"
                    />
                    <v-card-actions>
                        <v-btn type="submit">ログイン</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                email: "",
                password: ""
            }
        };
    },
    computed: {
        apiStatus() {
            return this.$store.state.auth.apiStatus;
        }
    },
    methods: {
        async login() {
            // authストアのloginアクションを呼び出す
            await this.$store.dispatch("auth/login", this.loginForm);
            console.log("ログインしました");

            // API通信に問題がなければ"/"に遷移
            if (this.apiStatus) {
                this.$router.push("/");
            }
        }
    }
};
</script>
