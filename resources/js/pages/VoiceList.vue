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

        <v-dialog v-model="isOpenPostDialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="plus-button d-flex d-sm-none"
                    color="#F26101"
                    fab
                    dark
                    v-bind="attrs"
                    v-on="on"
                    v-if="isLogin"
                    :loading="uploading"
                >
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </template>

            <v-form @submit.prevent="submit">
                <v-card color="#FFFFFF">
                    <v-card-title class="headline mt-4 orange lighten-2">
                        <div class="card-title">
                            <span class="white--text font-weight-bold"
                                >ボイスを投稿する</span
                            >
                        </div>
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <v-container>
                            <v-row>
                                <v-col class="pb-0" cols="12" sm="6" md="4">
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
                                        label="タイトルを入力"
                                        required
                                        clearable
                                        counter="12"
                                        v-model="postTitle"
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
                                    <div class="text-center mb-7">
                                        <v-btn
                                            color="grey darken-2"
                                            v-if="!isRecording"
                                            @click="startRecording"
                                            fab
                                            outlined
                                            style="width: 60px; height:60px;"
                                        >
                                            <v-icon size="58" color="red">
                                                mdi-circle
                                            </v-icon>
                                        </v-btn>
                                        <p v-if="!isRecording">録音する</p>
                                        <v-btn
                                            color="grey darken-2"
                                            v-if="isRecording"
                                            @click="stopRecording"
                                            fab
                                            outlined
                                            style="width: 60px; height:60px;"
                                        >
                                            <v-icon size="38" color="red">
                                                mdi-square-rounded
                                            </v-icon>
                                        </v-btn>
                                        <p
                                            v-if="isRecording"
                                            class="red--text font-weight-bold"
                                        >
                                            録音中
                                        </p>
                                    </div>
                                    <audio
                                        v-if="voice_veri && !isRecording"
                                        class="mt-0 px-auto"
                                        id="player"
                                        controls
                                    ></audio>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="pt-0">
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
            お気に入り機能は未実装です
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
            isOpenPostDialog: false,
            uploading: false, // アップロード中ローディング
            voice: null, // 投稿用
            voices: [], // 一覧表示用
            postTitle: "",
            snackbar: false, // スナックバー表示用（投稿が完了）
            timeout: 3000, // スナックバー表示時間（投稿が完了）
            snackbar2: false, // スナックバー表示用（お気に入り機能）
            timeout2: 3000, // スナックバー表示時間（お気に入り機能）
            page: 1, // 無限スクロール用

            status: "ready", // 状況（init:ページ読み込んだ時, ready:録音ができる状態, recording:録音中）
            recorder: null, // 音声にアクセスする "MediaRecorder" のインスタンス
            audioData: [], // 入力された音声データ
            audioExtension: "", // 音声ファイルの拡張子
            isRecording: null, // 録音中か判定する
            localstream: null,
            voice_veri: false // 録音後の音声確認
        };
    },
    computed: {
        isLogin() {
            return this.$store.getters["auth/getLoginCheck"];
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
            this.postTitle = "";
            this.voice = null;
            // this.$el.querySelector('input[type="file"]').value = null; なぜかエラーでる
        },
        clearError() {
            this.$store.commit("voicePost/setVoicePostErrorMessages", null);
        },
        async submit() {
            const formData = new FormData();
            formData.append("title", this.postTitle);
            formData.append("voice", this.voice);

            this.isOpenPostDialog = false;
            this.uploading = true;
            this.voice_veri = false;
            const response = await axios.post("/api/voices", formData);

            if (response.status === UNPROCESSABLE_ENTITY) {
                this.$store.commit(
                    "voicePost/setVoicePostErrorMessages",
                    response.data.errors
                );
                this.isOpenPostDialog = true;
                this.uploading = false;
                return false;
            }

            this.reset();
            this.snackbar = true;
            this.uploading = false;
            this.fetchVoices();
            this.moveToTop();
        },
        clickCloseButton() {
            this.isOpenPostDialog = false;
            this.isRecording = false;
            this.uploading = false;
            this.voice_veri = false;
            this.reset();
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
        startRecording() {
            this.isRecording = true;

            const self = this;
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
        stopRecording() {
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
            this.isRecording = false;
            this.voice_veri = true;
        },
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
                top: 0,
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
audio {
    height: 30px;
    width: 260px;
}
.wrapper-1 {
    padding-top: 16px;
    padding-bottom: 20px;
    height: 100%;
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
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}
.card-title {
    margin: 0 auto;
}
@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
