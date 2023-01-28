<script>
import CommentCard from '@/components/CommentCard.vue'
export default {
    data() {
        return {
            tabs: ['توضیحات', "نظرات"],
            tab: ''
        }
    }
    , methods: {
        hhh: function () {
            console.log('ejj');
            console.log(this.tab);
        }
    },components:{
        CommentCard
    }
}
</script>

<template>
    <v-container>
        <div class="d-flex  pa-3 bg-red align-center" style="border-bottom: 1px solid white;">
            <v-img height='70'
                src="data:image/jpeg;base64,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" />
            <div class="d-flex flex-column" style="flex:3;">
                <p class="text-h6">Mahdi Khodarahimi</p>
                <p class="text-secondary">معمولی</p>
            </div>
        </div>
        <div>
            <v-img height="300" style="width:100% !important"
                src="https://www.tasvirezendegi.com/wp-content/uploads/2022/01/Food-for-dinner.jpg" />
            <div class="d-flex justify-space-between align-canter border-t pt-3">
                <v-icon>mdi-bookmark-multiple-outline</v-icon>

                <div class="d-flex align-canter">
                    <v-icon v-on:click="hhh">mdi-heart</v-icon>
                    <v-icon class="mx-4">mdi-message-bulleted</v-icon>
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
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false">نظرات</button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active text-justify" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <p>رب گوجه فرنگی</p>
                    <p>مواد اولیه :</p>
                    <p>رب گوجه فرنگی</p>
                    <p>روغن گوجه فرنگی</p>
                    <p>رب گوجه فرنگی 10 کیلو</p>
                    <p>طرز تهیه :</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nam sit libero. Ipsum nihil
                        consectetur nisi quibusdam aspernatur, aperiam, eveniet molestias eaque cumque culpa, id
                        corrupti facilis quod tempora voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Repudiandae aliquid officiis excepturi aperiam delectus saepe amet quisquam repellat.
                        Saepe esse obcaecati at laudantium quas reprehenderit culpa nostrum amet, modi quod. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Ullam eaque nisi, vitae laboriosam fugit
                        officiis, dolore inventore obcaecati eum, consequuntur magnam quos? Dolor harum excepturi enim
                        illum nihil consequatur nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                        quas molestias? Nihil, vel atque ullam culpa blanditiis modi! Earum explicabo eos quasi unde at
                        minima eius animi praesentium nemo dicta? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Unde, nam? Dolorem vel eaque obcaecati quam beatae esse consequatur totam nobis, eius
                        saepe ut sapiente. Tenetur iusto sit omnis veniam culpa. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Amet, modi omnis! Facilis ullam dolorum odio aspernatur soluta debitis eveniet
                        harum cupiditate doloribus aliquid? Quo architecto modi repudiandae deserunt quas fugit.</p>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <v-textarea
          outlined
          name="input-7-4"
          label="ثبت نظر"
        ></v-textarea>
        <div class="text-center">
            <v-btn color="red" class="mb-5">ثبت</v-btn>
        </div>
        <CommentCard/>
                   <CommentCard/>
                   <CommentCard/>
                   <CommentCard/>
                   <CommentCard/>
                    
                </div>

            </div>
        </div>

    </v-container>
</template>