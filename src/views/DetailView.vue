<script>
import CommentCard from '@/components/CommentCard.vue'
import { HOST } from '@/constant';
export default {
    data() {
        return {
            tabs: ['توضیحات', "نظرات"],
            tab: '',
            detail: {},
            comments: [],
            comment: ''
        }
    }
    , methods: {
        hhh: function () {
            console.log('ejj');
            console.log(this.tab);
        }, get_comments: async function () {
            const res = await fetch(`${HOST}/comments/${this.$route.params.id}`, {
                headers: {
                    'x-access-tokens': localStorage.getItem('user_token')
                }
            })
                .then(response => response.json())
            this.comments = res;
            console.log(res);
        },
        addComment: async function () {
            console.log(this.comment);
            if (!this.comment) {
                alert('مقداری را وارد کنید')
                return;
            }
            await fetch(`${HOST}/add_comment`, {
                headers: {
                    'x-access-tokens': localStorage.getItem('user_token'),
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    'post_id': this.$route.params.id,
                    'text': this.comment
                })
            })
                .then(response => {
                    alert('نظر شما اضافه شد')
                    this.get_comments();
                    console.log(response.json());
                })
                .catch(err => alert(err))
        }, add_favorite:async function () {
            await fetch(`${HOST}/add_favorite`, {
                headers: {
                    'x-access-tokens': localStorage.getItem('user_token'),
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    'post_id': this.$route.params.id,
                })
            })
                .then(response => {
                    alert(' به علاقه مندی ها اضافه شد')
                    console.log(response.json());
                })
                .catch(err => alert(err))
        }
    }, components: {
        CommentCard
    }
    , mounted: async function () {
        const res = await fetch(`${HOST}/post/${this.$route.params.id}`, {
            headers: {
                'x-access-tokens': localStorage.getItem('user_token')
            }
        })
            .then(response => response.json())
        this.detail = res;
        console.log(res);
    }
}
</script>

<template>
    <v-container>
        <div class="d-flex  pa-3 bg-red align-center" style="border-bottom: 1px solid white;">
            <v-img height='70' :src="detail?.user?.image" />
            <div class="d-flex flex-column" style="flex:3;">
                <p class="text-h6">{{ detail?.user?.username }}</p>
                <p class="text-secondary">معمولی</p>
            </div>
        </div>
        <div>
            <v-img height="300" style="width:100% !important" :src="detail.image" />
            <div class="d-flex justify-space-between align-canter border-t pt-3">
                <v-icon v-on:click="add_favorite">mdi-bookmark-multiple-outline</v-icon>

                <div class="d-flex align-canter">
                    <v-icon v-on:click="hhh">mdi-heart</v-icon>
                    <v-icon color="blue">mdi-share-all</v-icon>
                </div>
            </div>
            <ul class="nav nav-pills mb-3 mt-4 d-flex justify-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true">توضیحات</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button @click="get_comments" class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">نظرات</button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active text-justify" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <p>{{ detail.title }}</p>
                    <p>مواد اولیه :</p>
                    <p>
                        {{ detail.raw_material }}
                    </p>
                    <p>طرز تهیه :</p>
                    <p>{{ detail.prepare }} </p>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <v-textarea v-model="comment" outlined name="input-7-4" label="ثبت نظر"></v-textarea>
                    <div class="text-center">
                        <v-btn v-on:click="addComment" color="red" class="mb-5">ثبت</v-btn>
                    </div>
                    <CommentCard v-for="(comment, i) in comments" :key="comment.text + i" :comment="comment" />

                </div>

            </div>
        </div>

    </v-container>
</template>