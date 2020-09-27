<template>
    <div>
        <div v-if="voice">
            <div>
                {{ voice.owner.name }}
            </div>
            <audio controls controlslist="nodownload" class="audio">
                <source :src="voice.url" />
            </audio>
            <div>
                <h2 class="photo-detail__title">
                    <i class="icon ion-md-chatboxes"></i>Comments
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import { OK } from "../util";

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            voice: null
        };
    },
    methods: {
        async fetchVoice() {
            const response = await axios.get(`/api/voices/${this.id}`);

            // if (response.status !== OK) {
            //     this.$store.commit("error/setCode", response.status);
            //     return false;
            // }

            this.voice = response.data;
        }
    },
    watch: {
        $route: {
            async handler() {
                await this.fetchVoice();
            },
            immediate: true
        }
    }
};
</script>
