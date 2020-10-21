<template>
    <v-col cols="12" lg="12" md="12" xs="12">
        <v-card
            width="340px"
            class="mx-auto"
            color="#FFFFFF"
            height="220px"
            outlined
            :ripple="false"
        >
            <v-list-item three-line class="px-0">
                <v-list-item-avatar tile size="80" color="grey"
                    ><v-img alt="" :src="voice.owner.img_url"></v-img
                ></v-list-item-avatar>
                <Router-link
                    :to="{ name: 'voiceDetail', params: { id: voice.id } }"
                >
                    <v-list-item-content>
                        <div class="mb-0">
                            <span class="grey--text">{{
                                voice.created_at | moment
                            }}</span>
                        </div>
                        <div>
                            <span class="black--text">{{
                                voice.owner.name
                            }}</span>
                        </div>
                        <v-list-item-title class="mt-4">
                            <span class="title black--text">{{
                                voice.title
                            }}</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </Router-link>
            </v-list-item>

            <v-list-item-content class="px-4 py-0">
                <audio
                    :src="voice.url"
                    controls
                    controlslist="nodownload"
                ></audio>
            </v-list-item-content>

            <v-card-actions v-if="isLogin">
                <v-row class="px-10" justify="space-between">
                    <!-- Goodボタン -->
                    <template v-if="this.voice.liked_by_user">
                        <v-btn icon color="#F26101" @click.prevent="like">
                            <v-icon>mdi-thumb-up</v-icon>
                            <span class="subheading ml-1">
                                {{ voice.likes_count }}
                            </span>
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-btn icon color="grey darken-3" @click.prevent="like">
                            <v-icon>mdi-thumb-up-outline</v-icon>
                            <span class="subheading ml-1">
                                {{ voice.likes_count }}
                            </span>
                        </v-btn>
                    </template>
                    <!-- Badボタン -->
                    <template v-if="this.voice.unliked_by_user">
                        <v-btn icon color="#F26101" @click.prevent="unlike">
                            <v-icon>mdi-thumb-down</v-icon>
                            <span class="subheading ml-1">
                                {{ voice.unlikes_count }}
                            </span>
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-btn
                            icon
                            color="grey darken-3"
                            @click.prevent="unlike"
                        >
                            <v-icon>mdi-thumb-down-outline</v-icon>
                            <span class="subheading ml-1">
                                {{ voice.unlikes_count }}
                            </span>
                        </v-btn>
                    </template>

                    <!-- コメント数表示 -->
                    <v-btn icon color="grey darken-3">
                        <v-icon>mdi-comment-outline</v-icon>
                        <span class="subheading ml-1">
                            {{ voice.comments_count }}
                        </span>
                    </v-btn>
                    <!-- お気に入りボタン -->
                    <v-btn
                        icon
                        color="grey darken-3"
                        @click.prevent="$emit('favorite-click')"
                    >
                        <v-icon>mdi-heart-outline</v-icon>
                        <span class="subheading ml-1">0</span>
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
import Mixin from "../mixins/mixin";

export default {
    mixins: [Mixin],
    props: {
        voice: {
            type: Object,
            required: true
        }
    },
    computed: {
        // ログインチェック
        isLogin() {
            return this.$store.getters["auth/check"];
        }
    },
    methods: {
        like() {
            this.$emit("like", {
                id: this.voice.id,
                liked: this.voice.liked_by_user,
                unliked: this.voice.unliked_by_user
            });
        },
        unlike() {
            this.$emit("unlike", {
                id: this.voice.id,
                liked: this.voice.liked_by_user,
                unliked: this.voice.unliked_by_user
            });
        }
    }
};
</script>
<style lang="scss" scoped>
a {
    color: #000;
}
</style>
