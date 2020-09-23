<template>
    <div>
        <v-app-bar color="white" dense>
            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn outlined small>
                ログイン
            </v-btn>
            <v-btn outlined small class="register_btn">
                会員登録
            </v-btn>
        </v-app-bar>
    </div>
</template>

<style lang="scss" scoped>
.register_btn {
  margin-left: 2%;
}
</style>