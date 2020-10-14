<template>
    <div class="wrapper_1">
        <v-container>
            <v-row>
                <Voice
                    v-for="voice in voices"
                    :key="voice.filename"
                    :voice="voice"
                    @like="onLikeClick"
                    @unlike="onUnLikeClick"
                />
                <infinite-loading
                    class="infinite-loading"
                    ref="infiniteLoading"
                    spinner="spiral"
                    @infinite="infiniteHandler"
                >
                    <span slot="no-more"></span>
                    <span slot="no-results"></span>
                </infinite-loading>
            </v-row>
        </v-container>

        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="plus_btn"
                    color="#F26101"
                    fab
                    dark
                    v-bind="attrs"
                    v-on="on"
                    v-if="isLogin"
                    v-show="!fileUploading"
                >
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
                <v-progress-circular
                    class="progress_circular"
                    indeterminate
                    color="black"
                    size="58"
                    width="6"
                    v-show="fileUploading"
                ></v-progress-circular>
            </template>

            <v-form @submit.prevent="submit">
                <v-card class="blue-grey lighten-5">
                    <v-card-title>
                        <span class="headline mx-auto mt-4"
                            >ボイスを投稿する</span
                        >
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <h4>＊タイトルは20文字以内</h4>
                                    <div v-if="voicePostErrors">
                                        <ul
                                            v-if="voicePostErrors.title"
                                            class="titleErrorMessage"
                                        >
                                            <li
                                                v-for="msg in voicePostErrors.title"
                                                :key="msg"
                                            >
                                                {{ msg }}
                                            </li>
                                        </ul>
                                    </div>
                                    <v-text-field
                                        label="タイトル"
                                        required
                                        v-model="title"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <div v-if="voicePostErrors">
                                        <ul
                                            v-if="voicePostErrors.voice"
                                            class="fileErrorMessage"
                                        >
                                            <li
                                                v-for="msg in voicePostErrors.voice"
                                                :key="msg"
                                            >
                                                {{ msg }}
                                            </li>
                                        </ul>
                                    </div>
                                    <input
                                        @change="onFileChange"
                                        type="file"
                                        accept="audio/mp3, audio/m4a, audio/wav"
                                    />
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="submit" color="#F26101"
                            ><span class="white--text">投稿する</span></v-btn
                        >
                        <v-btn
                            @click="
                                dialog = false;
                                clearError();
                            "
                            >閉じる</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>

        <v-snackbar v-model="snackbar" :timeout="timeout">
            投稿が完了しました
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    閉じる
                </v-btn>
            </template>
        </v-snackbar>

        <BottomNavigation />
    </div>
</template>
<script>
import { OK, UNPROCESSABLE_ENTITY } from "../util";
import Voice from "../components/Voice.vue";
import BottomNavigation from "../components/BottomNavigation";

export default {
    components: {
        Voice,
        BottomNavigation
    },
    data() {
        return {
            dialog: false,
            voice: null, // 投稿用
            voices: [], // 一覧表示用
            title: "", // タイトル投稿用
            snackbar: false, // スナックバー表示用
            timeout: 3000, // スナックバー表示時間
            fileUploading: false,
            page: 1 // 無限スクロール用
        };
    },
    computed: {
        isLogin() {
            return this.$store.getters["auth/check"];
        },
        voicePostErrors() {
            return this.$store.state.voicePost.voicePostErrorMessages;
        }
    },
    methods: {
        // フォームでファイルが選択されたら実行される
        onFileChange(event) {
            this.voice = event.target.files[0];
        },
        reset() {
            this.title = "";
            this.voice = null;
            // this.$el.querySelector('input[type="file"]').value = null; なぜかエラーでる
        },
        clearError() {
            this.$store.commit("voicePost/setVoicePostErrorMessages", null);
        },
        async submit() {
            const formData = new FormData();
            formData.append("voice", this.voice);
            formData.append("title", this.title);

            this.dialog = false;
            this.fileUploading = true;
            const response = await axios.post("/api/voices", formData);

            if (response.status === UNPROCESSABLE_ENTITY) {
                this.$store.commit(
                    "voicePost/setVoicePostErrorMessages",
                    response.data.errors
                );
                this.dialog = true;
                this.fileUploading = false;
                return false;
            }

            this.reset();
            this.snackbar = true;
            this.fileUploading = false;
            this.fetchVoices();
        },
        async fetchVoices() {
            const response = await axios.get("/api/voices");

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = response.data.data;
        },
        // いいねクリックメソッド（子コンポーネントから$emit）
        onLikeClick({ id, liked }) {
            if (liked) {
                this.notlike(id);
            } else {
                this.like(id);
            }
        },
        // unlikeクリックメソッド（子コンポーネントから$emit）
        onUnLikeClick({ id, unliked }) {
            if (unliked) {
                this.notUnlike(id);
            } else {
                this.unlike(id);
            }
        },
        async like(id) {
            const response = await axios.put(`/api/voices/${id}/like`);

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = this.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.likes_count += 1;
                    voice.liked_by_user = true;
                }
                return voice;
            });
        },
        async notlike(id) {
            const response = await axios.delete(`/api/voices/${id}/like`);

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = this.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.likes_count -= 1;
                    voice.liked_by_user = false;
                }
                return voice;
            });
        },
        async unlike(id) {
            const response = await axios.put(`/api/voices/${id}/unlike`);

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = this.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.unlikes_count += 1;
                    voice.unliked_by_user = true;
                }
                return voice;
            });
        },
        async notUnlike(id) {
            const response = await axios.delete(`/api/voices/${id}/notunlike`);

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = this.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.unlikes_count -= 1;
                    voice.unliked_by_user = false;
                }
                return voice;
            });
        },
        infiniteHandler($state) {
            axios
                .get("/api/voices", {
                    params: {
                        page: this.page,
                        per_page: 1
                    }
                })
                .then(({ data }) => {
                    setTimeout(() => {
                        if (this.page < data.data.length) {
                            this.page += 1;
                            this.voices.push(...data.data);
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    }, 1500);
                })
                .catch(err => {
                    $state.complete();
                });
        }
    },
    watch: {
        $route: {
            async handler() {
                await this.fetchVoices();
            },
            immediate: true
        }
    },
    created() {
        this.clearError();
    }
};
</script>
<style lang="scss" scoped>
.wrapper_1 {
    padding-top: 30px;
    padding-bottom: 20px;
    height: 100%;
    background-color: #8AA8B0;
}
.plus_btn {
    position: fixed;
    bottom: 80px;
    right: 20px;
}
.progress_circular {
    position: fixed;
    bottom: 59px;
    right: 39px;
}
.titleErrorMessage {
    color: red;
    list-style: none;
    padding: 0;
}
.fileErrorMessage {
    color: red;
    list-style: none;
    padding: 0;
}
.infinite-loading {
    margin: 0 auto;
}
</style>
