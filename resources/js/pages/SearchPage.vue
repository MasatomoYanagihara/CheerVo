<template>
    <div class="wrapper-1">
        <v-form @submit.prevent="searchKeyword">
            <div v-if="requiredMessage == true">
                <ul class="error-message">
                    <li>
                        検索したいタイトルを入力してください
                    </li>
                </ul>
            </div>
            <div class="d-flex">
                <v-text-field
                    v-model="keyword"
                    label="タイトル検索"
                    outlined
                    dense
                    background-color="white"
                ></v-text-field>
                <v-btn class="mt-1" color="#F26101" type="submit" rounded>
                    <span class="white--text font-weight-bold">検索</span>
                </v-btn>
            </div>
        </v-form>

        <v-container>
            <v-row>
                <Voice
                    v-for="voice in searchResultData"
                    :key="voice.filename"
                    :voice="voice"
                    @like="onLikeClick"
                    @unlike="onUnLikeClick"
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

        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            centered
            color="#313732"
        >
            検索結果は０件です
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

        <BottomNavigation />
    </div>
</template>

<script>
import Voice from "../components/Voice.vue";
import BottomNavigation from "../components/BottomNavigation";
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
    components: {
        Voice,
        BottomNavigation
    },
    setup(prop, context) {
        const state = reactive({
            keyword: "",
            searchResultData: [],
            snackbar: false,
            timeout: 3000,
            requiredMessage: false,
            page: 1
        });

        const methods = {
            searchKeyword: async () => {
                if (!state.keyword == "") {
                    const response = await axios
                        .get("/api/voices/search", {
                            params: {
                                keyword: state.keyword
                            }
                        })
                        .catch(err => err.response || err);

                    if (response.data.data.length === 0) {
                        state.snackbar = true;
                    }

                    state.searchResultData = response.data.data;
                    state.requiredMessage = false;
                } else {
                    state.requiredMessage = true;
                }
            },
            // いいねクリックメソッド（子コンポーネントから$emit）
            onLikeClick: ({ id, liked }) => {
                if (liked) {
                    this.notlike(id);
                } else {
                    this.like(id);
                }
            },
            // unlikeクリックメソッド（子コンポーネントから$emit）
            onUnLikeClick: ({ id, unliked }) => {
                if (unliked) {
                    this.notUnlike(id);
                } else {
                    this.unlike(id);
                }
            },
            infiniteHandler: ($state) => {
                axios.get(`/api/voices/search?keyword=${state.keyword}`, {
                    params: {
                        page: state.page,
                        per_page: 1
                    }
                })
                .then(({ data }) => {
                    setTimeout(() => {
                        if (state.page < data.data.length) {
                            state.page += 1;
                            state.searchResultData.push(...data.data);
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
        };

        return {
        ...toRefs(state),
        ...methods,
      };
    }
});
</script>
<style lang="scss" scoped>
.wrapper-1 {
    padding-top: 30px;
    padding-bottom: 20px;
    height: 100%;
    background-color: #eee;
}
.error-message {
    list-style: none;
    color: red;
    padding-left: 0;
}
.infinite-loading {
    margin: 0 auto;
}
</style>
