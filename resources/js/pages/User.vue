<template>
    <div class="wrapper-1">
        <v-container>
            <BreadCrumbs class="d-sm-none" :items="items" />
            <div class="d-flex flex-column wrapper-2">
                <v-avatar
                    style="width:120px; height: 120px;"
                    class="mx-auto"
                    color="grey darken-1"
                >
                    <v-img alt="" :src="userImg"></v-img>
                </v-avatar>
                <h2 class="mx-auto">{{ userName }}</h2>
            </div>
            <v-row>
                <Voice v-for="voice in voices" :key="voice.id" :voice="voice" />
            </v-row>
        </v-container>
        <BottomNavigation />
    </div>
</template>

<script>
import { OK, UNPROCESSABLE_ENTITY } from "../util";
import Voice from "../components/Voice.vue";
import BottomNavigation from "../components/BottomNavigation";
import BreadCrumbs from "../components/BreadCrumbs";

export default {
    computed: {
        userName() {
            return this.$store.getters["auth/getUserName"];
        },
        userImg() {
            return this.$store.getters["auth/getUserImg"];
        }
    },
    components: {
        Voice,
        BottomNavigation,
        BreadCrumbs
    },
    data() {
        return {
            voices: {}, //一覧表示用
            items: [
                {
                    text: "ホーム",
                    disabled: false
                },
                {
                    text: "マイページ",
                    disabled: false
                }
            ]
        };
    },
    methods: {
        async fetchMyVoices() {
            const response = await axios.get(
                `/api/voices/users/${this.$route.params.id}`
            );

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = response.data;
        }
    },
    created() {
        this.fetchMyVoices();
    }
};
</script>

<style scoped>
.wrapper-1 {
    background-color: #eee;
    height: 100%;
}
.wrapper-2 {
    background-image: url("https://images.unsplash.com/photo-1584098113770-a5922198255a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
    max-width: 340px;
    margin: 0 auto;
    padding-top: 10%;
    padding-bottom: 2%;
    border-radius: 4px;
}
</style>
