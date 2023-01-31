<script>
import { HOST } from '@/constant';
export default {
    data() {
        return {
            comments: []
        }
    },
    mounted: async function () {
        const res = await fetch(`${HOST}/comments/user`, {
            headers: {
                'x-access-tokens': localStorage.getItem('user_token')
            }
        })
            .then(response => response.json())
        this.comments = res;
        console.log(res);
    }
}
</script>
<template>
    <v-container>
        <h1>نظرات من</h1>
        <div v-for="(comment, i) in comments" :key="i" class="d-flex border-b pa-3 bg-white align-center">
            <div class="d-flex flex-column" style="flex:3;">
                <p class="text-h6">{{ comment.post_title }}</p>
                <p class="text-secondary">{{ comment.text }}</p>
            </div>
        </div>

    </v-container>
</template>