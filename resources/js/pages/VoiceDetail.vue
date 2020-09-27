<template>
    <div>
        <div v-if="voice">
            <div>
                {{ voice.owner.name }}
            </div>
            <audio controls controlslist="nodownload" class="audio">
                <source :src="voice.url" />
            </audio>
            <div>
                <h2 class="photo-detail__title">
                    <i class="icon ion-md-chatboxes"></i>コメント
                </h2>
                <!-- コメント投稿フォーム -->
                <form @submit.prevent="addComment" class="form">
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
            </div>
        </div>
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
