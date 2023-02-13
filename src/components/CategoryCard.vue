<script >
export default{
props:['item']
}
</script>
<template>
    <div class="">
       <router-link :to="`/list?category=`+item.id">
        <v-img height="200" :src="item.image"/>
        <p class="text-center text-h5 mt-3">{{ item.title }}</p>
       </router-link>
   </div>
</template>