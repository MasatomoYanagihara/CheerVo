<template>
    <v-card width="340px" class="mx-auto" height="160px">
        <v-col cols="12" lg="4" md="6" xs="12">
            <div class="wrapper_1 rounded-xl">
                <div class="wrapper_2">
                    <p>
                        {{ item.owner.name }}
                    </p>
                    <p>
                        {{ item.title }}
                    </p>
                    <RouterLink :to="`/voices/${item.id}`">
                        <i class="icon ion-md-chatboxes"></i>
                    </RouterLink>
                </div>
                <audio
                    :src="item.url"
                    controls
                    controlslist="nodownload"
                    class="audio"
                ></audio>
            </div>
        </v-col>
    </v-card>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>
<style lang="scss" scoped>
.audio {
    margin-left: 8px;
    margin-top: 50px;
}
.wrapper_2 {
    display: flex;
}
</style>
