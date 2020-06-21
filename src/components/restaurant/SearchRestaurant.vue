<template>
    <div class="container col-12">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="row">
            <input class="col-12" placeholder="Searchbar" type="text">
        </div>
         <div class="hExpandContainer mx-auto">
            <div class="row">
                <thumb></thumb> <!--v-bind="restaurant" -->
            </div>
            <div class="row">
                <button class="col-6"><v-icon id="leftArrow" size="5em">mdi-arrow-left-bold</v-icon></button>
                <button class="col-6"><v-icon id="rightArrow" size="5em">mdi-arrow-right-bold</v-icon></button>
            </div>
         </div>
    </div>
</template>

<script>
import Header from '../Header'
import Thumb from './RestaurantThumb';

export default {
  created: function () {},
  watch: {},
  methods: {},
  components: {
      'thumb': Thumb,
      'customHeader': Header
  },
  computed: {},
  data() {
    return {

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