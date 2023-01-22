<script setup>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
</script>

<template>
  <v-app>
    <MyHeader />
    <v-main dir="rtl" style="background-color: #eee; margin-top: 10.2rem;margin-bottom: 10.2rem;">
      <router-view></router-view>
    </v-main>
    <MyFooter />
  </v-app>
</template>

