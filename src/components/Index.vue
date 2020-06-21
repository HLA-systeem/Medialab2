<template>
    <div class="col-12 container">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="row">
            <router-link class="routeButton col-12" to="/home" id="overOns">Over ons</router-link> <!-- /about -->
        </div>
        <div class="hExpandContainer mx-auto">
            <div class="row">
                <router-link class="routeButton col-12" id="zoekRes" to="/searchR">
                <div class="row">
                    <v-icon size="3.5em" class="col-3 offset-2 icon">mdi-magnify</v-icon>
                    <span class="offset-1 my-auto">ZOEK</span>
                </div>
                </router-link>
            </div>
            <div class="row">
                <router-link class="routeButton col-12" id="savedRes" to="/saved">
                <div class="row">
                    <v-icon size="3.5em" class="col-3 offset-2 icon">mdi-book-open</v-icon>
                    <span class="offset-1 my-auto">MENUS</span>
                </div>
                </router-link>
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
  data() {
    return {

    };
  }
}
</script>


<style scoped>

.container{ /*cannot be global*/
    padding:0px;
    margin: 0px;
    height: 80%;
}

#overOns, #zoekRes, #savedRes{
    background-color: #C64D4D;
    color:#F5F5F5;
}

#overOns{
    height: 70px;
    font-size: 1.5em;
}

#zoekRes, #savedRes{
    background-color: #8C3333;
    border: solid  5px #F5F5F5;
    font-family: 'Roboto Mono', monospace;
    font-size: 4em;
}

.icon{
    margin-top: -20px;
    padding: 0px;
    color:#F5F5F5;
    opacity: 0.8;
}

</style>