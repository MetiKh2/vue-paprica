<script >
import MyCards from '@/components/MyCards.vue';
import {HOST} from '@/constant'
export default{
  data(){
   return{ newest:[],
    mostLike:[],
    mostView:[]
  }},
  mounted:async function () {
    const res1 = await fetch(`${HOST}/posts?order_by=newest&count=6`)
    .then(response => response.json())
    const res2 = await fetch(`${HOST}/posts?order_by=most_view&count=6`)
    .then(response => response.json())
    const res3 = await fetch(`${HOST}/posts?order_by=most_like&count=6`)
    .then(response => response.json())
  this.newest = res1;
  this.mostView = res2;
  this.mostLike = res3;
  },components:{
    MyCards
  }
}
</script>
<template>
            <MyCards  :items="newest" title="جدید ترین ها"/>
            <MyCards  :items="mostView" title="پر بازدید ترین ها"/>
            <MyCards  :items="mostLike" title="برگزیده ها"/>
</template>