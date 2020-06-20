<template>
    <div class="col-12 container">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="row">
            <router-link class="routeButton col-12" to="/about" id="overOns">Over ons</router-link>
        </div>
        <div class="hExpandContainer mx-auto">
            <div class="row">
                <router-link class="routeButton col-12" id="zoekRes" to="/searchR">ZOEK</router-link>
            </div>
            <div class="row">
                <router-link class="routeButton col-12" id="savedRes" to="/saved">MENUS</router-link>
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

.container{ /*needs to be here again for*/
    padding:0px;
    margin: 0px;
    height: 90%;
}

#overOns, #zoekRes, #savedRes{
    background-color: #C64D4D;
    color:#F5F5F5;
}

#zoekRes, #savedRes{
    background-color: #8C3333;
    border: solid  5px #F5F5F5;
    font-family: 'Roboto Mono', monospace;
    font-size: 4em;
}

</style>