<template>
    <div class="wrapper_1">
        <v-card
            :to="`/voices/${voice.id}`"
            width="340px"
            class="mx-auto"
            color="#FFFFFF"
            height="220px"
            outlined
            :ripple="false"
        >
            <v-list-item three-line class="px-4">
                <v-list-item-avatar tile size="80" color="grey"
                    ><v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img
                ></v-list-item-avatar>
                <v-list-item-content>
                    <div class="mb-0">
                        {{ voice.created_at | moment }}
                    </div>
                    <div>
                        {{ voice.owner.name }}
                    </div>
                    <v-list-item-title class="headline mb-1">
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
                        <v-icon>mdi-comment-multiple-outline</v-icon>
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
        <v-container class="commet_container">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-form v-if="isLogin" @submit.prevent="addComment">
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
                            background-color="grey lighten-2"
                            label="コメントを入力"
                            rows="3"
                            outlined
                            v-model="commentContent"
                        ></v-textarea>
                        <div class="text-center">
                            <v-btn type="submit" color="#F26101">
                                <span class="white--text"
                                    ><strong>投稿する</strong></span
                                ></v-btn
                            >
                        </div>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>

        <!-- コメント表示 -->
        <v-container>
            <h2 class="text-center">コメント一覧</h2>
            <v-row>
                <v-col cols="12" sm="12">
                    <ul class="ul" v-if="voice.comments.length > 0">
                        <li
                            v-for="comment in voice.comments"
                            :key="comment.content"
                        >
                            <v-card
                                class="mx-auto mb-2 blue-grey lighten-4"
                                width="340px"
                                height="100px"
                                tile
                            >
                                <v-card-title class="pb-2">
                                    {{ comment.author.name }}
                                </v-card-title>
                                <v-card-subtitle>
                                    {{ comment.created_at | moment }}
                                </v-card-subtitle>
                                <v-card-text class="pl-8">
                                    {{ comment.content }}
                                </v-card-text>
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
import moment from "moment";
import BottomNavigation from "../components/BottomNavigation";

export default {
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
    },
    filters: {
        moment: function(date) {
            return moment(date).format("YYYY/MM/DD HH:mm");
        }
    }
};
</script>
<style lang="scss" scoped>
li {
    list-style: none;
}
.ul {
    padding-left: 0;
}
.wrapper_1 {
    padding-top: 40px;
    height: 100%;
    background-color: #8aa8b0;
}
.audio {
    margin-left: 20px;
}
.errors {
    color: red;
}
.comment_container {
    width: 366px;
}
</style>
