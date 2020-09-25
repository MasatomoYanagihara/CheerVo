<template>
    <div class="grobal_wrapper">
        <v-app>
            <Navbar />
            <v-main>
                <RouterView />
            </v-main>
            <Footer />
        </v-app>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { INTERNAL_SERVER_ERROR } from "./util";

export default {
    components: {
        Navbar,
        Footer
    },
    computed: {
        errorCode() {
            return this.$store.state.error.code;
        }
    },
    watch: {
        errorCode: {
            handler(val) {
                if (val === INTERNAL_SERVER_ERROR) {
                    this.$router.push("/500");
                }
            },
            immediate: true
        },
        $route() {
            this.$store.commit("error/setCode", null);
        }
    }
};
</script>

<style lang="scss">
a {
    text-decoration: none;
}
</style>
<style lang="scss" scoped>
.grobal_wrapper {
    max-width: 1600px;
    margin: 0 auto;
}
</style>
