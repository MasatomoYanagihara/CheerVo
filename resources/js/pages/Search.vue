<template>
    <div>
        <h1>serch</h1>
        <v-form @submit.prevent="searchTitle">
            <v-text-field label="タイトル検索" outlined></v-text-field>
            <v-btn type="submit">検索</v-btn>
        </v-form>
        <BottomNavigation />
    </div>
</template>

<script>
import BottomNavigation from "../components/BottomNavigation";

export default {
    data() {
        return {
            searchKeyword: "",
            searchResultData: []
        };
    },
    components: {
        BottomNavigation
    },
    methods: {
        async searchTitle() {
            const response = await axios
                .get(`/api/voices/search?keyword=${this.searchKeyword}`)
                .catch(err => err.response || err);
            this.searchResultData = response.data;
            this.searchKeyword = "";
            console.log(this.searchResultData);
        }
    }
};
</script>

<style></style>
