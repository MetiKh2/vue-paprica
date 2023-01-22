<script>
 export default {
    computed: {
      height () {
         if(window.innerWidth<600){
            return 50
        }
        else if(window.innerWidth<960){
            return 200
        }
        else if(window.innerWidth<1264){
            return 250
        }
        else if(window.innerWidth<1904){
            return 300
        }
        else{
            return 300
        }
      },
    },
    
  }
  
  </script>
<template>
    <div class="d-flex flex-column pa-4 border">
        <v-img :height="height" style="width:100% !important" src="https://www.tasvirezendegi.com/wp-content/uploads/2022/01/Food-for-dinner.jpg" />
        <h3 class="mt-4">رب گوجه فرنگی خونگی  </h3>
        <div class="d-flex justify-space-evenly align-center flex-row-reverse">
            <p class="text-caption text-red">
                3<v-icon>mdi-cards-heart</v-icon>
            </p>
            <p class="text-caption">
                29
                <v-icon>
                mdi-eye
                </v-icon>
            </p>
            <p class="text-caption">Meti Kh</p>

        </div>
    </div>
</template>