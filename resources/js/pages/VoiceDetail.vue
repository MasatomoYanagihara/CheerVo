<template>
    <div class="wrapper-1">
        <v-card
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
                        :src="voice.owner.img_url"
                    ></v-img
                ></v-list-item-avatar>
                <v-list-item-content>
                    <div class="mb-0">
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
                                height="100px"
                                tile
                            >
                                <v-list-item-content>
                                    <div class="mb-0">
                                        {{ comment.created_at | moment }}
                                    </div>
                                    <v-list-item-title class="mb-1">
                                        {{ comment.author.name }}
                                    </v-list-item-title>
                                    <div>
                                        {{ comment.content }}
                                    </div>
                                </v-list-item-content>
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
import {
    defineComponent,
    reactive,
    computed,
    toRefs,
    onMounted
} from "@vue/composition-api";

export default defineComponent({
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
    setup(props, context) {
        const state = reactive({
            voice: null, // ボイス取得用
            commentContent: "", // コメント投稿用
            commentErrors: null, // エラー用

            isLogin: computed(() => context.root.$store.getters["auth/check"])
        });

        const fetchVoice = async () => {
            const response = await axios.get(`/api/voices/${props.id}`);

            state.voice = response.data;
        };
        const addComment = async () => {
            const response = await axios.post(
                `/api/voices/${props.id}/comments`,
                {
                    content: state.commentContent
                }
            );

            // バリデーションエラー
            if (response.status === UNPROCESSABLE_ENTITY) {
                state.commentErrors = response.data.errors;
                return false;
            }

            state.commentContent = "";
            state.commentErrors = null;

            // その他のエラー
            if (response.status !== CREATED) {
                context.root.$store.commit("error/setCode", response.status);
                return false;
            }

            state.voice.comments = [response.data, ...state.voice.comments];
            fetchVoice();
        };

        fetchVoice();

        return {
            ...toRefs(state),
            addComment
        };
    }
});
</script>
<style lang="scss" scoped>
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
</style>
