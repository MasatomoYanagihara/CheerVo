<template>
    <div>
        <h1>Voice List</h1>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="plus_btn"
                    color="black"
                    fab
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </template>

            <!-- 投稿フォーム -->
            <v-form @submit.prevent="submit">
                <v-card>
                    <v-card-title>
                        <span class="headline">ボイスを投稿する</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <!-- <v-col cols="12" sm="6" md="4">
                                    <v-text-field
                                        label="タイトル"
                                        required
                                    ></v-text-field>
                                </v-col> -->
                                <v-col cols="12" sm="6" md="4">
                                    <!-- <v-file-input
                                        accept="audio/*"
                                        label="File input"
                                        @change="onFileChange"
                                    ></v-file-input> -->
                                    <input
                                        @change="onFileChange"
                                        type="file"
                                        accept="audio/*"
                                    />
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                            >閉じる</v-btn
                        >
                        <v-btn color="blue darken-1" text @click="submit"
                            >投稿する</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            voice: null
        };
    },
    methods: {
        // フォームでファイルが選択されたら実行される
        onFileChange(event) {
            // 何も選択されていなかったら処理中断
            // if (event.target.files.length === 0) {
            //     this.reset();
            //     return false;
            // }

            // ファイルがaudioではなかったら処理中断
            // if (!event.target.files[0].type.match("audio.*")) {
            //     this.reset();
            //     return false;
            // }

            this.voice = event.target.files[0];
        },
        reset() {
            this.voice = null;
            // this.$el.querySelector('input[type="file"]').value = null;
        },
        async submit() {
            const formData = new FormData();
            formData.append("voice", this.voice);
            const response = await axios.post("/api/voices", formData);

            this.reset();
            this.dialog = false;
        }
    }
};
</script>
<style lang="scss" scoped>
.plus_btn {
    position: fixed;
    bottom: 80px;
    right: 40px;
}
</style>
