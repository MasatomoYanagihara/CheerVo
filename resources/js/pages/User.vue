<template>
    <div class="wrapper-1">
        <v-container>
            <BreadCrumbs class="d-sm-none" :items="items" />
            <div class="d-flex flex-column wrapper-2">
                <v-avatar class="mx-auto" color="grey darken-1">
                    <v-img
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                </v-avatar>
                <h2 class="mx-auto">{{ username }}</h2>
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
        // ユーザーネーム取得
        username() {
            return this.$store.getters["auth/username"];
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
        async fetchMyVoices() {
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
        this.fetchMyVoices();
    }
};
</script>

<style scoped>
.wrapper-1 {
    background-color: #8aa8b0;
    height: 100%;
}
.wrapper-2 {
    background-color: white;
    padding-top: 14%;
    padding-bottom: 8%;
}
</style>
