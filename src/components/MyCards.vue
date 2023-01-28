<script>
import MyCard from "@/components/MyCard.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
  components: {
    SwiperSlide,
    Swiper,
    MyCard
  },
  data(){
    return{
    }
  },methods:{
    cc:function () {
      console.log(this.items);
    }
  },
  props:['title','items']
};
</script>
<template>
   <v-container>
    <div class="d-flex justify-space-between ">
        <p class="text-h6" v-on:click="cc">{{ title }}</p>
        <v-btn elevation="0" class="bg-transparent"><router-link to="/list">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link></v-btn>
    </div>
    <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in items" :key="item.id"><MyCard :item="item"/></swiper-slide>
    
  </swiper>
   </v-container>
</template>