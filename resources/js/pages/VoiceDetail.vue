<template>
    <div class="wrapper_1">
        <v-card v-if="voice" class="mx-auto" width="340px">
            <div>
                {{ voice.owner.name }}
            </div>
            <div>
                {{ voice.title }}
            </div>
            <audio
                :src="voice.url"
                controls
                controlslist="nodownload"
                class="audio"
            ></audio>
            <div>
                <h2><i class="icon ion-md-chatboxes"></i>コメント</h2>
                <!-- コメント投稿フォーム（ログイン中のみ表示） -->
                <form v-if="isLogin" @submit.prevent="addComment" class="form">
                    <!-- エラー表示 -->
                    <div v-if="commentErrors" class="errors">
                        <ul v-if="commentErrors.content">
                            <li v-for="msg in commentErrors.content" :key="msg">
                                {{ msg }}
                            </li>
                        </ul>
                    </div>
                    <textarea
                        class="form__item"
                        v-model="commentContent"
                    ></textarea>
                    <div class="form__button">
                        <button type="submit">
                            投稿する
                        </button>
                    </div>
                </form>
                <!-- コメント表示 -->
                <ul v-if="voice.comments.length > 0">
                    <li
                        v-for="comment in voice.comments"
                        :key="comment.content"
                    >
                        <p>
                            {{ comment.author.name }}
                        </p>
                        <p>
                            {{ comment.content }}
                        </p>
                    </li>
                </ul>
            </div>
        </v-card>
    </div>
</template>

<script>
import { OK, CREATED, UNPROCESSABLE_ENTITY } from "../util";

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            voice: null, // ボイス取得用
            commentContent: "", // コメント投稿用
            commentErrors: null // エラー用
        };
    },
    computed: {
        isLogin() {
            return this.$store.getters["auth/check"];
        }
    },
    methods: {
        async fetchVoice() {
            const response = await axios.get(`/api/voices/${this.id}`);

            // if (response.status !== OK) {
            //     this.$store.commit("error/setCode", response.status);
            //     return false;
            // }

            this.voice = response.data;
        },
        async addComment() {
            const response = await axios.post(
                `/api/voices/${this.id}/comments`,
                {
                    content: this.commentContent
                }
            );

            // バリデーションエラー
            if (response.status === UNPROCESSABLE_ENTITY) {
                this.commentErrors = response.data.errors;
                return false;
            }

            this.commentContent = "";

            this.commentErrors = null;

            // その他のエラー
            if (response.status !== CREATED) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voice.comments = [response.data, ...this.voice.comments];
        }
    },
    watch: {
        $route: {
            async handler() {
                await this.fetchVoice();
            },
            immediate: true
        }
    }
};
</script>
<style lang="scss" scoped>
.wrapper_1 {
    padding-top: 40px;
    height: 100%;
}
.audio {
    margin-left: 20px;
}
</style>
