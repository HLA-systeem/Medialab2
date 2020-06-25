<template>
    <div class="container col-12" v-if="this.restaurant">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="row" id="restaurantHeader">
            <div class="col-6">
                <p>{{restaurant.name}}</p>
            </div>
            <div class="col-6">
                <p>Score: {{restaurant.genralScore}}</p> <!-- Note misspeling of general -->
            </div>
        </div>
        <div id="options">
            <div class="row">
                <router-link class="routeButton col-12" to="/reviews"><button class="col-6 mx-auto optionButton">RECENSIES</button></router-link>
            </div>
            <div class="row">
                <router-link class="routeButton col-12" to="/menu"><button class="col-6 mx-auto optionButton">MENU</button></router-link>
            </div>
        </div>

        <div class="hExpandContainer mx-auto">
             <button class="col-12" id="downloadButton"><v-icon id="downloadIcon" size="12em" class="mx-auto">mdi-download-circle-outline</v-icon></button>
        </div>
    </div>
</template>

<script>
import Header from '../Header'
import {FS, DB} from '../../services/firebaseInit'

export default {
  created: function () {
    DB.collection('restaurants').where('name', '==', this.$route.params.restaurantName).get().then(table => { 
        this.restaurant = table.docs[0].data()
        console.log(this.restaurant)
    })
  },
  watch: {},
  methods: {},
  components: {
      'customHeader': Header
  },
  computed: {},
  //props: [restaurant], //{{}}
  data() {
    return {
        restaurant: null
    };
  }
}
</script>


<style scoped>
p{
  text-align: center;
  margin-top: 50px;
  font-size: 2em;
 
}

.container{ /*cannot be global*/
    padding:0px;
    margin: 0px;
    height: 90%;
}

.optionButton{
    background-color: #8C3333;
    height: 100px;
    color:#F5F5F5;
    font-size: 2em;
}

.routeButton{
    padding-top: 25px;
    padding-bottom: 25px;
}

.hExpandContainer{
    height: 50%;
    width: 100%;
    margin: 0px;
    padding:0px;
}

#downloadButton{
    margin: 0px;
    padding:0px;
    width: 100%;
}

#downloadIcon{
    color: #8C3333;
}

#restaurantHeader, #options{
    border-bottom: solid 3px #8C3333
}


</style>