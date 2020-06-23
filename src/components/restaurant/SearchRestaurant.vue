<template>
    <div class="container col-12">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="row">
            <input class="col-12" placeholder="Searchbar" type="text">
        </div>
         <div class="hExpandContainer mx-auto">
            <div class="row" v-if="this.restaurants">
                <thumb v-bind:restaurant="restaurants[selected]"></thumb>
            </div>
            <div class="row">
                <button class="col-6" @click="previous"><v-icon id="leftArrow" size="5em">mdi-arrow-left-bold</v-icon></button>
                <button class="col-6" @click="next"><v-icon id="rightArrow" size="5em">mdi-arrow-right-bold</v-icon></button>
            </div>
         </div>
    </div>
</template>

<script>
import Header from '../Header'
import Thumb from './RestaurantThumb';
import {FS, DB} from '../../services/firebaseInit'

export default {
  created: function () {
    DB.collection('restaurants').get().then(table => { //.where('name', 'array-contains-any', searched)
        this.restaurants = []

        for(let i=0; i < table.docs.length; i++){
            let data = table.docs[i].data()
            this.restaurants.push(data)
        }
    })
  },
  watch: {},
  methods: {
      next(){
          this.selected += 1
          if (this.selected >= this.restaurants.length){
              this.selected = 0
          }
      },
      previous(){
          this.selected -= 1
          if (this.selected < 0){
              this.selected = (this.restaurants.length -1)
          }
      }
  },
  components: {
      'thumb': Thumb,
      'customHeader': Header
  },
  computed: {},
  data() {
    return {
        selected: 0,
        restaurants: null //[]
    };
  }
}
</script>


<style scoped>
input{

    height: 60px;
    font-size: 2em;
    text-align: center;
}

button{

}

.container{ /*cannot be global*/
    padding:0px;
    margin: 0px;
    height: 90%;
}

#leftArrow, #rightArrow{
    color: #C64D4D;
}

</style>