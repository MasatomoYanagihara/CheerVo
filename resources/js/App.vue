<template>
    <div class="grobal-wrapper">
        <v-app>
            <navbar-component />
            <v-main class="v-main">
                <router-view />
            </v-main>
            <footer-component />
        </v-app>
    </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { NOT_FOUND, INTERNAL_SERVER_ERROR } from "./util";

export default {
    components: {
        NavbarComponent,
        FooterComponent
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
                    console.log(val);
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
.grobal-wrapper {
    max-width: 1600px;
    margin: 0 auto;
}
.v-main {
    margin-top: 40px;
    margin-bottom: 36px;
}
</style>
