
<script >
import SideBar from './SideBar.vue';
export default {
    data() {
        return {
            isSidebar: false
        }
    },
    methods: {
        toggle:function() {
            this.isSidebar = !this.isSidebar
        },
    },
    components: {
        SideBar
    }
}
</script>
<template>

    <header class=" bg-red " style="position: fixed;z-index: 2; width: 100%;top: 0;left: 0;">
        <v-container>
            <div class="d-flex justify-space-between align-center">
                <v-btn class="bg-transparent ">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <h1 class="text-2 ">پاپریکا</h1>
                <v-btn class="bg-transparent " v-on:click="toggle">
                    <v-icon>mdi-chart-bar-stacked</v-icon>

                </v-btn>
            </div>
            <div class="d-flex justify-space-between align-center mt-5 flex-wrap">
                <v-btn class=" font-weight-bold rounded-xl px-8 bg-transparent bg-yellow">
                    عمومی
                </v-btn>
                <v-btn class="font-weight-bold rounded-xl px-8 bg-transparent">
                    دوستان
                </v-btn>
                <v-btn class="font-weight-bold rounded-xl px-8 bg-transparent">
                    علاقه مندی
                </v-btn>

            </div>
        </v-container>
    </header>
    <SideBar v-if="isSidebar" @toggle="toggle" />


</template>