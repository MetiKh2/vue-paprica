<script>
export default{
    props:['comment']
}
</script>
<template> <div class="d-flex border-b pa-3 bg-white align-center">
    <v-img height='70'
    :src="comment.image"/>
    <div class="d-flex flex-column" style="flex:3;">
        <p class="text-h6">{{comment.username}}</p>
        <p class="text-secondary">{{comment.text}}</p>
    </div>
</div></template>