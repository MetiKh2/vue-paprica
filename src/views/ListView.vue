<script >
import MyCard from '@/components/MyCard.vue';
import { HOST } from '@/constant';
export default {
    components: {
        MyCard
    },
    data() {
        return {
            posts: []
        }
    },
    mounted: async function () {
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        if (urlParams.has('category')) {
            const res = await fetch(`${HOST}/posts?count=10000&category=${urlParams.get('category')}&order_by=newest`)
            .then(response => response.json())
            this.posts = res;
        }
        else if (urlParams.has('query')){
            const res = await fetch(`${HOST}/posts?count=10000&query=${urlParams.get('query')}&order_by=newest`)
            .then(response => response.json())
            this.posts = res;
        }
    }
}
</script>
<template>
    <v-container>
        <div class="d-flex justify-space-between ">
            <p class="text-h6">نتایج</p>
        </div>
        <v-row>
        <v-col cols="12">
                <MyCard v-if="posts?.length>0" :item="posts[0]"/>
            </v-col>

                <v-col  v-for="post in posts?.slice(1)"  :key="post.id" cols="12" sm="6" md="4" lg="3">
                    <MyCard :item="post"/>
                </v-col> 

    </v-row>
    </v-container>
</template>