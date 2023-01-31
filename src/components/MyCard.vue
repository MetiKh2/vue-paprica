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
    props:['item']
    
  }
  
  </script>
<template>
    <div class="d-flex flex-column pa-4 border">
      <router-link :to="'/detail/'+item.id">
        <v-img :height="height" style="width:100% !important" :src="item.image" />
        <h3 class="mt-4">{{item.title}}  </h3>
        <div class="d-flex justify-space-evenly align-center flex-row-reverse">
            <p class="text-caption text-red">
                {{item.likes}}<v-icon>mdi-cards-heart</v-icon>
            </p>
            <p class="text-caption">
                {{item.views}}
                <v-icon>
                mdi-eye
                </v-icon>
            </p>
            <p class="text-caption">{{item.user}}</p>

        </div>
      </router-link>
    </div>
</template>