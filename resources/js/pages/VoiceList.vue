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
                    v-if="isLogin && !fileUploading"
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
import {
    defineComponent,
    reactive,
    computed,
    toRefs,
    onMounted
} from "@vue/composition-api";

export default defineComponent({
    components: {
        Voice,
        BottomNavigation
    },
    setup(prop, context) {
        const state = reactive({
            dialog: false,
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
            voice_veri: false, // 録音後の音声確認

            isLogin: computed(() => context.root.$store.state.voicePost),
            voicePostErrors: computed(
                () => context.root.$store.state.voicePost.voicePostErrorMessages
            )
        });

        // フォームでファイルが選択されたら実行される
        const onFileChange = event => (state.voice = event.target.files[0]);
        const reset = () => {
            state.title = "";
            state.voce = null;
        };
        const clearError = () => {
            context.root.$store.commit(
                "voicePost/setVoicePostErrorMessages",
                null
            );
        };
        const submit = async () => {
            const formData = new FormData();
            formData.append("title", state.title);
            formData.append("voice", state.voice);

            state.dialog = false;
            state.fileUploading = true;
            state.voice_veri = false;
            const response = await axios.post("/api/voices", formData);

            if (response.status === UNPROCESSABLE_ENTITY) {
                context.root.$store.commit(
                    "voicePost/setVoicePostErrorMessages",
                    response.data.errors
                );
                state.dialog = true;
                state.fileUploading = false;
                return false;
            }

            state.snackbar = true;
            state.fileUploading = false;
            reset();
            fetchVoices();
        };
        const clickCloseButton = () => {
            state.dialog = false;
            state.recording = false;
            state.voice_veri = false;
            clearError();
        };
        const fetchVoices = async () => {
            const response = await axios.get("/api/voices");

            if (response.status !== OK) {
                context.root.$store.commit("error/setCode", response.status);
                return false;
            }

            state.voices = response.data.data;
            state.fileUploading = false;
        };
        const rec_start = () => {
            state.recording = true;
            navigator.mediaDevices
                .getUserMedia({ audio: true })
                .then(function(stream) {
                    state.localstream = stream;
                    state.recorder = new MediaRecorder(stream);

                    state.recorder.start();
                })
                .catch(function(e) {
                    console.log(e);
                });
        };
        const rec_stop = () => {
            state.recorder.stop();

            state.recorder.ondataavailable = function(e) {
                state.audioData.push(e.data);
                const audioBlob = new Blob(state.audioData);
                state.voice = audioBlob;
                document.getElementById("player").src = URL.createObjectURL(
                    e.data
                );
            };
            state.localstream.getTracks().forEach(track => track.stop());
            state.recording = false;
            state.voice_veri = true;
        };
        const getExtension = audioType => {
            let extension = "wav";
            const matches = audioType.match(/audio\/([^;]+)/);

            if (matches) {
                extension = matches[1];
            }

            return "." + extension;
        };
        const onLikeClick = ({ id, liked, unliked }) => {
            if (liked) {
                // Goodしている
                notlike(id);
            } else if (!liked && !unliked) {
                // Goodしてない かつ Badしてない
                like(id);
            } else if (!liked && unliked) {
                // Goodしてない かつ Badしている
                like(id);
                notUnlike(id);
            }
        };
        const onUnLikeClick = ({ id, liked, unliked }) => {
            if (unliked) {
                // Badしている
                notUnlike(id);
            } else if (!unliked && !liked) {
                // Badしてない かつ Goodしてない
                unlike(id);
            } else if (!unliked && liked) {
                // Badしてない かつ Goodしている
                unlike(id);
                notlike(id);
            }
        };
        const onFavoriteClick = () => {
            state.snackbar2 = true;
        };
        const like = async id => {
            const response = await axios.put(`/api/voices/${id}/like`);

            if (response.status !== OK) {
                context.root.$store.commit("error/setCode", response.status);
                return false;
            }

            state.voices = state.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.likes_count += 1;
                    voice.liked_by_user = true;
                }
                return voice;
            });
        };
        const notlike = async id => {
            const response = await axios.delete(`/api/voices/${id}/like`);

            if (response.status !== OK) {
                context.root.$store.commit("error/setCode", response.status);
                return false;
            }

            state.voices = state.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.likes_count -= 1;
                    voice.liked_by_user = false;
                }
                return voice;
            });
        };
        const unlike = async id => {
            const response = await axios.put(`/api/voices/${id}/unlike`);

            if (response.status !== OK) {
                context.root.$store.commit("error/setCode", response.status);
                return false;
            }

            state.voices = state.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.unlikes_count += 1;
                    voice.unliked_by_user = true;
                }
                return voice;
            });
        };
        const notUnlike = async id => {
            const response = await axios.delete(`/api/voices/${id}/notunlike`);

            if (response.status !== OK) {
                context.root.$store.commit("error/setCode", response.status);
                return false;
            }

            state.voices = state.voices.map(voice => {
                if (voice.id === response.data.voice_id) {
                    voice.unlikes_count -= 1;
                    voice.unliked_by_user = false;
                }
                return voice;
            });
        };
        const infiniteHandler = $state => {
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
                            state.voices.push(...data.data);
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
        };

        onMounted(() => {
            fetchVoices(), clearError();
        });

        return {
            ...toRefs(state),
            onFileChange,
            reset,
            clearError,
            submit,
            clickCloseButton,
            fetchVoices,
            rec_start,
            rec_stop,
            getExtension,
            onLikeClick,
            onUnLikeClick,
            onFavoriteClick,
            notlike,
            unlike,
            notUnlike,
            infiniteHandler
        };
    }
});
</script>
<style lang="scss" scoped>
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
</style>
