<template>
    <div>
        <v-breadcrumbs class="black--text pl-0" :items="items" large>
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
    </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
} from '@vue/composition-api';

export default defineComponent({
    props: ["items"]
});
</script>
<style style="scss" scoped>
a {
    text-decoration: none;
    color: #000000;
}
</style>
