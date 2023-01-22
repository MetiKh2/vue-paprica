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
  props:['title']
};
</script>
<template>
   <v-container>
    <div class="d-flex justify-space-between ">
        <p class="text-h6">{{ title }}</p>
        <v-btn elevation="0" class="bg-transparent"><v-icon>mdi-arrow-left</v-icon></v-btn>
    </div>
    <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><MyCard/></swiper-slide>
    <swiper-slide><MyCard/></swiper-slide>
    <swiper-slide><MyCard/></swiper-slide>
    <swiper-slide><MyCard/></swiper-slide>
    <swiper-slide><MyCard/></swiper-slide>
    <swiper-slide><MyCard/></swiper-slide>
    <swiper-slide><MyCard/></swiper-slide>
    <swiper-slide><MyCard/></swiper-slide>
  </swiper>
   </v-container>
</template>