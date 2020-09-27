<template>
    <div class="grobal_wrapper">
        <v-app>
            <Navbar />
            <v-main class="v-main">
                <RouterView />
            </v-main>
            <Footer />
        </v-app>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { NOT_FOUND, INTERNAL_SERVER_ERROR } from "./util";

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
                } else if (val === NOT_FOUND) {
                    this.$router.push("/not-found");
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
.v-main {
    margin-top: 40px;
    margin-bottom: 36px;
}
</style>
