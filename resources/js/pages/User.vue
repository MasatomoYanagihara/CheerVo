<template>
    <div class="wrapper-1">
        <v-container>
            <BreadCrumbs class="d-sm-none" :items="items" />
            <div class="d-flex flex-column wrapper-2">
                <v-avatar
                    style="width:100px; height: 100px;"
                    class="mx-auto"
                    color="grey darken-1"
                    tile
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
import {
    defineComponent,
    reactive,
    computed,
    toRefs,
    onMounted
} from "@vue/composition-api";

export default defineComponent({
    components: {
        Voice,
        BottomNavigation,
        BreadCrumbs
    },
    setup(prop, context) {
        const state = reactive({
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
            ],

            userName: computed(
                () => context.root.$store.getters["auth/userName"]
            ),
            userImg: computed(() => context.root.$store.getters["auth/userImg"])
        });

        onMounted(() => fetchMyVoices());

        const fetchMyVoices = async () => {
            const response = await axios.get(
                `/api/voices/users/${context.root.$route.params.id}`
            );

            if (response.status !== OK) {
                context.root.$store.commit("error/setCode", response.status);
                return false;
            }

            state.voices = response.data;
        };

        return {
          ...toRefs(state)
        }
    }
});
</script>

<style scoped>
.wrapper-1 {
    background-color: #eee;
    height: 100%;
}
.wrapper-2 {
    background-color: gainsboro;
    padding-top: 10%;
    padding-bottom: 2%;
    border-radius: 4px;
}
</style>
