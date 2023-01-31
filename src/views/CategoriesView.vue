<script>
import CategoryCard from '@/components/CategoryCard.vue';
import { HOST } from '@/constant';
export default {
    components:{
        CategoryCard
    },
    data(){
        return {
            categories:[]
        }
    },
    mounted:async function(){
        const res = await fetch(`${HOST}/categories`, {
            headers: {
                'x-access-tokens': localStorage.getItem('user_token')
            }
        })
            .then(response => response.json())
        this.categories = res;
        console.log(res);
    }
}
</script>
<template>
      <v-container>
        <v-row class="bg-white">
         
            <v-col v-for="category in categories" :key="category.id" cols="6">
            <CategoryCard  :item="category"/>
        </v-col>  
        

    </v-row>
      </v-container>
</template>