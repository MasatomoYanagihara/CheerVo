<template>
  <v-col cols="12" lg="4" md="6" xs="12">
    <v-card width="340px" class="mx-auto" height="160px" outlined>
      <v-card-title>{{ voice.owner.name }}</v-card-title>
      <v-card-text class="pb-0"
        >{{ voice.title }}

        <v-btn icon color="grey darken-1" @click.prevent="like">
          <v-icon>mdi-thumb-up-outline</v-icon>{{ voice.likes_count }}
        </v-btn>
        <v-btn icon color="grey darken-1">
          <v-icon>mdi-thumb-down-outline</v-icon>
        </v-btn>
        <RouterLink :to="`/voices/${voice.id}`">
          <v-btn icon color="grey darken-1">
            <v-icon>mdi-comment-multiple-outline</v-icon>
          </v-btn>
        </RouterLink>
      </v-card-text>
      <audio :src="voice.url" controls controlslist="nodownload"></audio>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    voice: {
      type: Object,
      required: true,
    },
  },
  methods: {
    like() {
      this.$emit("like", {
        id: this.voice.id,
        liked: this.voice.liked_by_user,
      });
    },
  },
};
</script>

