<template>
    <div class="col-12 container">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="hExpandContainer mx-auto">
            <div class="row">
                <router-link class="routeButton col-12" to="/searchR">
                 <div class="row col-10 mx-auto" id="zoekRes">
                    <v-icon size="3.5em" class="col-3 offset-2 icon">mdi-magnify</v-icon>
                    <span class="offset-1 my-auto">ZOEK</span>
                </div>
                </router-link>
            </div>
            <div class="row">
                <router-link class="routeButton col-12" to="/saved">
                <div class="row col-10 mx-auto" id="savedRes">
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
    height: 90%;
}

#zoekRes, #savedRes{
    background-color: #8C3333;
    border: solid  5px #F5F5F5;
    font-family: 'Roboto Mono', monospace;
    font-size: 4.5em;
    color:#F5F5F5;
}

.icon{
    margin-top: -20px;
    padding: 0px;
    color:#F5F5F5;
    opacity: 0.8;
}

</style>