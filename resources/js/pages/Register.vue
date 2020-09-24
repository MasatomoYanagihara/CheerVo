<template>
    <div>
        <v-card width="400px" class="mx-auto mt-8">
            <v-card-title>
                <h1 class="display-1">会員登録</h1>
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="register">
                    <v-text-field
                        prepend-icon="mdi-account-circle"
                        label="Name"
                        v-model="registerForm.name"
                    />
                    <v-text-field
                        prepend-icon="mdi-account-circle"
                        label="E-mail"
                        v-model="registerForm.email"
                    />
                    <v-text-field
                        prepend-icon="mdi-lock"
                        type="password"
                        label="Password"
                        v-model="registerForm.password"
                    />
                    <v-text-field
                        prepend-icon="mdi-lock"
                        type="password"
                        label="Password (confirm)"
                        v-model="registerForm.password_confirmation"
                    />
                    <v-card-actions>
                        <v-btn type="submit">登録する</v-btn>
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
            registerForm: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    },
    methods: {
        // 会員登録メソッド
        async register() {
            // authストアのresigterアクションを呼び出す
            await this.$store.dispatch("auth/register", this.registerForm);
            console.log('会員登録しました')

            this.$router.push("/");
        }
    }
};
</script>
