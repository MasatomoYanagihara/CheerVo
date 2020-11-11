<template>
    <div class="wrapper-1">
        <v-card
            :to="`/voices/${voice.id}`"
            width="340px"
            class="mx-auto"
            color="#FFFFFF"
            height="194px"
            outlined
            :ripple="false"
        >
            <v-list-item three-line class="px-4">
                <v-list-item-avatar size="80" color="grey"
                    ><v-img
                        class="elevation-6"
                        alt=""
                        :src="voice.owner.img_url"
                    ></v-img
                ></v-list-item-avatar>
                <v-list-item-content>
                    <div class="mb-0 created_at-text">
                        {{ voice.created_at | moment }}
                    </div>
                    <div>
                        {{ voice.owner.name }}
                    </div>
                    <v-list-item-title class="mb-1">
                        {{ voice.title }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item-content class="px-4 py-0">
                <audio
                    :src="voice.url"
                    controls
                    controlslist="nodownload"
                ></audio>
            </v-list-item-content>

            <!-- goodボタン、badボタン、コメント数 -->
            <v-card-actions>
                <v-row class="px-10" justify="space-between">
                    <v-btn icon color="grey darken-3" @click.prevent="like">
                        <v-icon>mdi-thumb-up-outline</v-icon>
                        <span class="subheading ml-1">{{
                            voice.likes_count
                        }}</span>
                    </v-btn>
                    <v-btn icon color="grey darken-3" @click.prevent="unlike">
                        <v-icon>mdi-thumb-down-outline</v-icon>
                        <span class="subheading ml-1">{{
                            voice.unlikes_count
                        }}</span>
                    </v-btn>
                    <v-btn icon color="grey darken-3">
                        <v-icon>mdi-comment-outline</v-icon>
                        <span class="subheading ml-1">{{
                            voice.comments_count
                        }}</span>
                    </v-btn>
                    <v-btn icon color="grey darken-3">
                        <v-icon>mdi-heart-outline</v-icon>
                        <span class="subheading ml-1">0</span>
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>

        <!-- コメント投稿フォーム（ログイン中のみ表示） -->
        <v-container class="commet_container pb-0">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-form v-if="isLogin" @submit.prevent="addComment">
                        <div v-show="!showTextarea" class="text-center mb-4">
                            <v-btn
                                @click="showTextarea = !showTextarea"
                                color="#F26101"
                                rounded
                            >
                                <span class="white--text font-weight-bold"
                                    >コメントする</span
                                ></v-btn
                            >
                        </div>
                        <div v-show="showTextarea" class="text-center mb-4">
                            <v-btn type="submit" color="#F26101" rounded>
                                <span class="white--text font-weight-bold"
                                    >コメントを投稿する</span
                                ></v-btn
                            >
                        </div>
                        <!-- エラー表示 -->
                        <div v-if="commentErrors" class="errors">
                            <ul v-if="commentErrors.content">
                                <li
                                    v-for="msg in commentErrors.content"
                                    :key="msg"
                                >
                                    {{ msg }}
                                </li>
                            </ul>
                        </div>
                        <v-textarea
                            class="textarea"
                            background-color="grey lighten-5"
                            label="コメントを入力"
                            rows="3"
                            outlined
                            v-model="commentContent"
                            v-show="showTextarea"
                        ></v-textarea>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
        <hr />

        <!-- コメント表示 -->
        <v-container class="pt-0">
            <v-row>
                <v-col cols="12" sm="12">
                    <ul class="ul" v-if="voice.comments.length > 0">
                        <li
                            v-for="comment in voice.comments"
                            :key="comment.content"
                        >
                            <v-card
                                class="mx-auto mb-2"
                                width="340px"
                                color="grey lighten-5"
                                min-height="100px"
                                outlined
                                :ripple="false"
                            >
                                <v-list-item>
                                    <v-list-item-avatar size="60" color="grey"
                                        ><v-img
                                            :src="comment.author.img_url"
                                        ></v-img
                                    ></v-list-item-avatar>
                                    <v-list-item-content>
                                        <span class="mb-0 created_at-text">
                                            {{ comment.created_at | moment }}
                                        </span>
                                        <v-list-item-title class="mb-1">
                                            {{ comment.author.name }}
                                        </v-list-item-title>
                                        <div class="comment-content">
                                            {{ comment.content }}
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
        <BottomNavigation />
    </div>
</template>

<script>
import { OK, CREATED, UNPROCESSABLE_ENTITY } from "../util";
import Mixin from "../mixins/mixin";
import BottomNavigation from "../components/BottomNavigation";

export default {
    mixins: [Mixin],
    components: {
        BottomNavigation
    },
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
            commentErrors: null, // エラー用
            showTextarea: false
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

            this.showTextarea = false;
            this.voice.comments = [response.data, ...this.voice.comments];
            this.fetchVoice();
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
audio {
    height: 30px;
}
li {
    list-style: none;
}
.ul {
    padding-left: 0;
}
.wrapper-1 {
    background-color: #eee;
    padding-top: 40px;
    height: 100%;
}
.audio {
    margin-left: 20px;
}
.errors {
    color: red;
}
.comment-content {
    margin-top: 4px;
    font-size: 16px;
}
.textarea {
    width: 340px;
    margin: 0 auto;
}
.created_at-text {
    color: #424242;
}
</style>
