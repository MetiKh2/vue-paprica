<script>
export default{
    props:['friend']
}
</script>
<template>
    <div class="d-flex border-b pa-3 bg-white align-center">
        <v-img height='70' :src="friend.image"/>
        <div class="d-flex flex-column" style="flex:3;">
            <p class="text-h6">{{friend.user_name}}</p>
            <p class="text-secondary">{{friend.email}}</p>
        </div>
        <v-btn class="bg-red text-captsion " x-small>حذف</v-btn>
    </div>
</template>