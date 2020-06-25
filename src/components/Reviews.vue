<template>
    <div class="container col-12">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <!-- <div class="row" id="restaurantHeader">
            <div class="col-6">
                <p>Restaurant Naam</p>
            </div>
            <div class="col-6">
                <p>score</p>
            </div>
        </div> -->
        <div class="review">
            <div class="row reviewHeader">
                <div class="col-6">
                    <p>Author 1</p>
                    <p>6/22/2020</p>
                </div>
                <v-icon class="star col-6" size="5em">mdi-star</v-icon>
            </div>
            <div class="row">
                <p class="reviewDescription col-12">
                    Dit is een restaurant dat rekening houdt met je hond. Het entree is even opassen door ongelijke vloeren. Verder is het vrij rustig en belicht.
                </p>
            </div>
        </div>

        <div class="review">
            <div class="row reviewHeader">
                <div class="col-6">
                    <p>Author 2</p>
                    <p>4/22/2020</p>
                </div>
                <v-icon class="star col-6" size="5em">mdi-star</v-icon>
            </div>
            <div class="row">
                <p class="reviewDescription col-12">
                    Heerlijk gegegeten. Eerst ging het stroef met de bediening, maar na wat uitleg, werdt er beter rekening gehouden. Verder was het goed belicht en rustig met voldoende ruimte. Pas wel op bij het entree!
                </p>
            </div>
        </div>


    </div>
</template>

<script>
import Header from './Header'

export default {
  created: function () {},
  watch: {},
  methods: {},
  components: {
      'customHeader': Header
  },
  computed: {},
  //props: [restaurant], //{{}}
  data() {
    return {

    };
  }
}
</script>


<style scoped>
p{
  text-align: center;

  font-size: 2em;
}

.container{ /*cannot be global*/
    padding:0px;
    margin: 0px;
    height: 90%;
}



.hExpandContainer{
    height: 50%;
    width: 100%;
    margin: 0px;
    padding:0px;
}


#restaurantHeader, .review{
    border-bottom: solid 3px #8C3333
}

.star{
  color: #F6CD62
}

</style>