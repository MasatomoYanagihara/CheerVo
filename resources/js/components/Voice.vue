<template>
  <v-col cols="12" lg="4" md="6" xs="12">
    <v-card width="340px" class="mx-auto" height="160px" outlined>
      <v-card-title>{{ item.owner.name }}</v-card-title>
      <v-card-text
        >{{ item.title }}
        <RouterLink :to="`/voices/${item.id}`">
          <i class="icon ion-md-chatboxes"></i>
        </RouterLink>
      </v-card-text>
      <audio :src="item.url" controls controlslist="nodownload"></audio>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

