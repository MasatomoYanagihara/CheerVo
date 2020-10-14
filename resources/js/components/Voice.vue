<template>
    <v-col cols="12" lg="12" md="12" xs="12">
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

            <v-card-actions v-if="isLogin">
                <v-row class="px-10" justify="space-between">
                    <!-- Goodボタン -->
                    <v-btn icon color="grey darken-3" @click.prevent="like">
                        <v-icon>mdi-thumb-up-outline</v-icon>
                        <span class="subheading ml-1">{{
                            voice.likes_count
                        }}</span>
                    </v-btn>
                    <!-- Badボタン -->
                    <v-btn icon color="grey darken-3" @click.prevent="unlike">
                        <v-icon>mdi-thumb-down-outline</v-icon>
                        <span class="subheading ml-1">{{
                            voice.unlikes_count
                        }}</span>
                    </v-btn>
                    <!-- コメント数表示 -->
                    <v-btn icon color="grey darken-3">
                        <v-icon>mdi-comment-outline</v-icon>
                        <span class="subheading ml-1">{{
                            voice.comments_count
                        }}</span>
                    </v-btn>
                    <!-- お気に入りボタン -->
                    <v-btn icon color="grey darken-3" @click.prevent="favorite">
                        <v-icon>mdi-heart-outline</v-icon>
                        <span class="subheading ml-1">0</span>
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
import moment from "moment";

export default {
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
        },
        favorite() {
            this.snackbar = true;
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
.wrapper_1 {
    display: flex;
}
</style>
