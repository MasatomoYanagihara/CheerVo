<template>
    <div class="blue-grey lighten-1">
        <v-container>
            <v-row>
                <BreadCrumbs class="d-sm-none" :items="items" />
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
                    disabled: false,
                    href: "/"
                },
                {
                    text: "マイページ",
                    disabled: false
                }
            ]
        };
    },
    methods: {
        async fetchVoices() {
            const response = await axios.get(
                "/api/voices/users/" + this.$route.params.id
            );

            if (response.status !== OK) {
                this.$store.commit("error/setCode", response.status);
                return false;
            }

            this.voices = response.data;
        }
    },
    created() {
        this.fetchVoices();
    }
};
</script>

<style></style>
