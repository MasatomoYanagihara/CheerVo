<template>
  <v-col cols="12" lg="4" md="6" xs="12">
    <v-card :to="`/voices/${voice.id}`" width="340px" class="mx-auto blue-grey lighten-3" height="200px" outlined>
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ voice.owner.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>{{ voice.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>

      <v-list-item-content class="px-6">
        <audio :src="voice.url" controls controlslist="nodownload"></audio>
      </v-list-item-content>

      <v-row class="px-16" justify="space-around">
        <v-btn icon color="grey darken-3" @click.prevent="like">
          <v-icon>mdi-thumb-up-outline</v-icon>
          <span class="subheading ml-1">{{ voice.likes_count }}</span>
        </v-btn>

        <v-btn icon color="grey darken-3" @click.prevent="unlike">
          <v-icon>mdi-thumb-down-outline</v-icon>
          <span class="subheading ml-1">{{ voice.unlikes_count }}</span>
        </v-btn>

        <v-btn icon color="grey darken-3">
          <v-icon>mdi-comment-multiple-outline</v-icon>
          <span class="subheading ml-1">{{ voice.comments_count }}</span>
        </v-btn>
      </v-row>
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
    unlike() {
      this.$emit("unlike", {
        id: this.voice.id,
        unliked: this.voice.unliked_by_user,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper_1 {
  display: flex;
}
</style>