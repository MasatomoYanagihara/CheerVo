<template>
    <div class="wrapper-1">
        <v-container>
            <v-row>
                <Voice
                    v-for="voice in voices"
                    :key="voice.filename"
                    :voice="voice"
                    @like="onLikeClick"
                    @unlike="onUnLikeClick"
                    @favorite-click="onFavoriteClick"
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
                    class="plus-button d-flex d-sm-none"
                    color="#F26101"
                    fab
                    dark
                    v-bind="attrs"
                    v-on="on"
                    v-if="isLogin"
                    :disabled="dialog2"
                    :loading="dialog2"
                >
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
                <v-progress-circular
                    class="progress-circular"
                    indeterminate
                    color="#F26101"
                    size="58"
                    width="5"
                    v-show="fileUploading"
                ></v-progress-circular>
            </template>

            <v-form @submit.prevent="submit">
                <v-card color="#FFFFFF">
                    <v-card-title>
                        <span class="headline mx-auto mt-4"
                            >ボイスを投稿する</span
                        >
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <h4>＊タイトルは12文字以内</h4>
                                    <div v-if="voicePostErrors">
                                        <ul
                                            v-if="voicePostErrors.title"
                                            class="title-error-message"
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
                                            class="file-error-message"
                                        >
                                            <li
                                                v-for="msg in voicePostErrors.voice"
                                                :key="msg"
                                            >
                                                {{ msg }}
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- <h4 class="mb-2">
                                        ＊対応している拡張子：mp3/m4a/wav
                                    </h4>
                                    <input
                                        @change="onFileChange"
                                        type="file"
                                        accept="audio/mp3, audio/mp4, audio/wav"
                                    /> -->
                                    <!-- <div>
                                        <v-btn
                                            type="button"
                                            v-if="status == 'ready'"
                                            @click="startRecording"
                                        >
                                            録音を開始する
                                        </v-btn>
                                        <v-btn
                                            type="button"
                                            v-if="status == 'recording'"
                                            @click="stopRecording"
                                        >
                                            録音を終了する
                                        </v-btn>
                                        <div id="result"></div>
                                    </div> -->
                                    <div class="text-center">
                                        <v-btn
                                            class=""
                                            v-if="!recording"
                                            @click="rec_start"
                                        >
                                            録音開始
                                        </v-btn>
                                        <v-btn
                                            v-if="recording"
                                            @click="rec_stop"
                                        >
                                            録音停止
                                        </v-btn>
                                    </div>
                                    <audio
                                        v-if="voice_veri"
                                        class="mt-5 pr-6"
                                        id="player"
                                        controls
                                    ></audio>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="submit" color="#F26101" rounded
                            ><span class="white--text"
                                ><strong>投稿する</strong></span
                            ></v-btn
                        >
                        <v-btn class="px-4" @click="clickCloseButton" rounded
                            >閉じる</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-dialog>


        <v-dialog
        v-model="dialog2"
        hide-overlay
        persistent
        width="300"
        >
        <v-card
            color="#FFA319"
            dark
        >
            <v-card-text>
            アップロード中
            <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
            ></v-progress-linear>
            </v-card-text>
        </v-card>
        </v-dialog>


        <v-snackbar v-model="snackbar" :timeout="timeout" centered>
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

        <v-snackbar v-model="snackbar2" :timeout="timeout2" centered>
            お気に入り機能は近日リリース予定です
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar2 = false"
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
            dialog: false, // ボイス投稿フォームダイアログ
            dialog2: false, // アップロード中ダイアログ
            voice: null, // 投稿用
            voices: [], // 一覧表示用
            title: "", // タイトル投稿用
            snackbar: false, // スナックバー表示用（投稿が完了）
            timeout: 3000, // スナックバー表示時間（投稿が完了）
            snackbar2: false, // スナックバー表示用（お気に入り機能）
            timeout2: 3000, // スナックバー表示時間（お気に入り機能）
            fileUploading: false,
            page: 1, // 無限スクロール用

            status: "ready", // 状況（init:ページ読み込んだ時, ready:録音ができる状態, recording:録音中）
            recorder: null, // 音声にアクセスする "MediaRecorder" のインスタンス
            audioData: [], // 入力された音声データ
            audioExtension: "", // 音声ファイルの拡張子
            recording: null, // 録音中か判定する
            localstream: null,
            voice_veri: false // 録音後の音声確認
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
            formData.append("title", this.title);
            formData.append("voice", this.voice);

            this.dialog = false;
            this.dialog2 = true;
            // this.fileUploading = true;
            this.voice_veri = false;
            const response = await axios.post("/api/voices", formData);

            if (response.status === UNPROCESSABLE_ENTITY) {
                this.$store.commit(
                    "voicePost/setVoicePostErrorMessages",
                    response.data.errors
                );
                this.dialog = true;
                this.dialog2 = false;
                this.fileUploading = false;
                return false;
            }

            this.reset();
            this.snackbar = true;
            this.fileUploading = false;
            this.dialog2 = false;
            this.fetchVoices();
            this.moveToTop();
        },
        clickCloseButton() {
            this.dialog = false;
            this.recording = false;
            this.voice_veri = false;
            this.clearError();
        },
        async fetchVoices() {
            const response = await axios.get("/api/voices");

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = response.data.data;
        },
        // 録音開始
        rec_start() {
            const self = this;
            this.recording = true;
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(function(stream) {
                    self.localstream = stream;
                    self.recorder = new MediaRecorder(stream);

                    self.recorder.start();
                })
                .catch(function(e) {
                    console.log(e);
                });
        },
        // 録音停止
        rec_stop() {
            this.recorder.stop();

            const self = this;
            this.recorder.ondataavailable = function(e) {
                self.audioData.push(e.data);
                const audioBlob = new Blob(self.audioData);
                self.voice = audioBlob;
                document.getElementById("player").src = URL.createObjectURL(
                    e.data
                );
            };
            this.localstream.getTracks().forEach(track => track.stop());
            this.recording = false;
            this.voice_veri = true;
        },
        // 音声ファイルの拡張子取得メソッド
        getExtension(audioType) {
            let extension = "wav";
            const matches = audioType.match(/audio\/([^;]+)/);

            if (matches) {
                extension = matches[1];
            }

            return "." + extension;
        },
        // いいねクリックメソッド（子コンポーネントから$emit）
        onLikeClick({ id, liked, unliked }) {
            if (liked) {
                // Goodしている
                this.notlike(id);
            } else if (!liked && !unliked) {
                // Goodしてない かつ Badしてない
                this.like(id);
            } else if (!liked && unliked) {
                // Goodしてない かつ Badしている
                this.like(id);
                this.notUnlike(id);
            }
        },
        // unlikeクリックメソッド（子コンポーネントから$emit）
        onUnLikeClick({ id, liked, unliked }) {
            if (unliked) {
                // Badしている
                this.notUnlike(id);
            } else if (!unliked && !liked) {
                // Badしてない かつ Goodしてない
                this.unlike(id);
            } else if (!unliked && liked) {
                // Badしてない かつ Goodしている
                this.unlike(id);
                this.notlike(id);
            }
        },
        onFavoriteClick() {
            this.snackbar2 = true;
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
        moveToTop() {
            window.scrollTo({
                top:0,
                behavior: "instant"
            });
        },
        infiniteHandler($state) {
            axios
                .get("/api/voices", {
                    params: {
                        page: this.page + 1,
                        per_page: 1
                    }
                })
                .then(({ data }) => {
                    setTimeout(() => {
                        if (this.page * 10 < data.total) {
                            this.page += 1;
                            this.voices.push(...data.data);
                            console.log(data);
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
.wrapper-1 {
    padding-top: 16px;
    padding-bottom: 20px;
    height: 100%;
    // background-color: #8aa8b0;
    background-color: #eee;
}
.plus-button {
    position: fixed;
    bottom: 80px;
    right: 20px;
}
.progress-circular {
    position: fixed;
    bottom: 79px;
    right: 19px;
}
.title-error-message {
    color: red;
    list-style: none;
    padding: 0;
}
.file-error-message {
    color: red;
    list-style: none;
    padding: 0;
}
.infinite-loading {
    margin: 0 auto;
}
</style>
