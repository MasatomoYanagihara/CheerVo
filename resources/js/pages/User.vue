<template>
  <div class="blue-grey lighten-1">
    <v-container>
      <v-row>
        <Voice v-for="voice in voices" :key="voice.id" :voice="voice" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Voice from "../components/Voice.vue";
import { OK, UNPROCESSABLE_ENTITY } from "../util";

export default {
  components: {
    Voice,
  },
  data() {
    return {
      voices: {}, //一覧表示用
    };
  },
  methods: {
    async fetchVoices() {
      const response = await axios.get('/api/voices/users/' + this.$route.params.id);

      if (response.status !== OK) {
        this.$store.commit("error/setCode", response.status);
        return false;
      }

      this.voices = response.data ;
    },
  },
  created() {
    this.fetchVoices();
  }
};
</script>

<style>
</style>