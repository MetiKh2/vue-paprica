
<script>
import MyCard from '@/components/MyCard.vue';
import { HOST } from '@/constant';
export default {
    data() {
        return {
            favorites: []
        }
    },
    components: {
        MyCard
    }, mounted: async function () {
        await this.fetchData()
    }, methods: {
        removeFavorite: async function (post_id) {
            await fetch(`${HOST}/remove_favorite`, {
                headers: {
                    'x-access-tokens': localStorage.getItem('user_token'),
                    'Content-Type': 'application/json'
                }
                , method: 'POST',
                body: JSON.stringify({
                    'post_id': post_id,

                })
            })
                .then(async response => {
                    alert(' از علاقه مندی ها حذف شد')
                    console.log(response.json());
                    await this.fetchData()
                })
                .catch(err => alert(err))
        }, fetchData: async function () {
            const res = await fetch(`${HOST}/favorites`, {
                headers: {
                    'x-access-tokens': localStorage.getItem('user_token')
                }
            })
                .then(response => response.json())
            this.favorites = res;
            console.log(res);
        }
    }
}
</script>
<template>
    <v-container>
        <div class="d-flex justify-space-between ">
            <p class="text-h6">علاقه مندی ها</p>
        </div>
        <v-row>
            <v-col cols="12">
                <MyCard v-if="favorites.length > 0" :item="favorites[0]" />
                <v-btn v-on:click="removeFavorite(favorites[0].id)" class="bg-red">حذف</v-btn>
            </v-col>

            <v-col v-for="favorite in favorites.slice(1)" :key="favorite.id" cols="12" sm="6" md="4" lg="3">
                <MyCard :item="favorite" />
                <v-btn v-on:click="removeFavorite(favorite.id)" class="bg-red">حذف</v-btn>

            </v-col>


        </v-row>
    </v-container>
</template>