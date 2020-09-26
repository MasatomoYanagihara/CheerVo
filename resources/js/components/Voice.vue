<template>
    <v-col cols="12" lg="4" md="6" xs="12">
        <div class="wrapper_1 rounded-xl">
            <div>
                {{ item.owner.name }}
                <RouterLink :to="`/voices/${item.id}`"
                    ><p>
                        詳細
                    </p>
                </RouterLink>
            </div>
            <audio controls controlslist="nodownload" class="audio">
                <source :src="item.url" />
            </audio>
        </div>
    </v-col>
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
.wrapper_1 {
    background-color: beige;
}
.audio {
    margin-left: 24px;
}
</style>
