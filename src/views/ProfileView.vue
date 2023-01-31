<script>
import MyCard from '@/components/MyCard.vue';
import { HOST } from '@/constant';
export default {
    components:{
        MyCard
    },
    data(){
        return {
            profile:{}
        }
    },
    mounted:async function(){
        const res = await fetch(`${HOST}/profile`, {
            headers: {
                'x-access-tokens': localStorage.getItem('user_token')
            }
        })
            .then(response => response.json())
        this.profile = res;
        console.log(res);
    }
}
</script>
<template>
    <v-container style="position: relative;">
       
        <div class="d-flex  pa-3 bg-red align-center" style="border-bottom: 1px solid white;">
        <v-img height='70' :src="profile.image"/>
        <div class="d-flex flex-column" style="flex:3;">
            <p class="text-h6">{{profile.username}}</p>
            <p class="text-secondary">بیوگرافی درج نشده</p>
        </div>
    </div>
     <div class="d-flex border-b pa-3 bg-red align-center justify-center" >
       
        <div class="d-flex flex-column justify-center"   >
            <p class="text-h6">طرز تهیه ها</p>
            <p class="">{{profile?.posts?.length}}</p>
        </div>
    </div>
    <v-row>
        <v-col cols="12">
                <MyCard v-if="profile?.posts?.length>0" :item="profile?.posts[0]"/>
            </v-col>

                <v-col  v-for="post in profile?.posts?.slice(1)"  :key="post.id" cols="12" sm="6" md="4" lg="3">
                    <MyCard :item="post"/>
                </v-col> 

    </v-row>
    <div style="position: fixed;z-index: 100; bottom: 100px;left: 30px;">
       <router-link to="/create">
        <button class="bg-red px-5 py-1" style="font-size: 35px;border-radius: 50%;">
            +
        </button>
       </router-link>
    </div>
</v-container>
</template>