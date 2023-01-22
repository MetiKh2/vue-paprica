<script >
export default{
props:['title']
}
</script>
<template>
    <div class="">
        <v-img height="200" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"/>
        <p class="text-center text-h5 mt-3">{{ title }}</p>
   </div>
</template>