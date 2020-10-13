<template>
    <div>
        <h1>serch</h1>
        <v-form @submit.prevent="searchKeyword">
            <div v-if="requiredMessage == true">
                <ul class="errorMessage">
                    <li>
                        検索したいタイトルを入力してください
                    </li>
                </ul>
            </div>
            <v-text-field
                v-model="keyword"
                label="タイトル検索"
                outlined
            ></v-text-field>
            <v-btn type="submit">検索</v-btn>
        </v-form>
        <v-snackbar v-model="snackbar" :timeout="timeout">
            検索結果は0件です
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
import BottomNavigation from "../components/BottomNavigation";

export default {
    data() {
        return {
            keyword: "",
            searchResultData: [],
            snackbar: false,
            timeout: 3000,
            requiredMessage: false
        };
    },
    components: {
        BottomNavigation
    },
    methods: {
        async searchKeyword() {
            if (!this.keyword == "") {
                const response = await axios
                    .get(`/api/voices/search?keyword=${this.keyword}`)
                    .catch(err => err.response || err);

                if (response.data.length === 0) {
                    this.snackbar = true;
                }

                this.searchResultData = response.data;
                this.keyword = "";
            } else {
                this.requiredMessage = true;
            }
        }
    }
};
</script>
<style scoped>
.errorMessage {
    list-style: none;
    color: red;
    padding-left: 0;
}
</style>
