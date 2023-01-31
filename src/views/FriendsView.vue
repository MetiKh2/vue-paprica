<script>
import FriendsCard from '@/components/FriendsCard.vue';
import { HOST } from '@/constant';
export default {
    data(){
        return{
            friends:[]
        }
    },
    components:{
        FriendsCard
    },mounted:async function(){
    const res = await fetch(`${HOST}/friends`,{
        headers:{
            'x-access-tokens':localStorage.getItem('user_token')
        }
    })
    .then(response => response.json())
  this.friends = res;
  console.log(res);
    }
}
</script>

<template>
    <v-container>
        <FriendsCard :friend="friend" :key="friend.email" v-for="friend in friends"/>
    </v-container>
</template>