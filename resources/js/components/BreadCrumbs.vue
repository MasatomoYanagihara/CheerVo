<template>
    <div>
        <v-breadcrumbs class="black--text" :items="items" large>
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
    </div>
</template>
<script>
export default {
    props: ["items"]
};
</script>
<style style="scss" scoped>
a {
    text-decoration: none;
    color: #000000;
}
</style>
