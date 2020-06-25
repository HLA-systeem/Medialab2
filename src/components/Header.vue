<template>
    <div class="row" id="headerCont">
        <router-link class="routeButton col-2" to="/home">
            <h1>Videre</h1>
        </router-link>
        <router-link class="routeButton col-1" to="/aboutus" id="overOns">Over ons</router-link> <!-- /about -->
        <button class="offset-7 col-1"><v-icon id="face" size="5em">mdi-face-outline</v-icon></button>    
    </div>
</template>

<script>
export default {
  created: function () {},
  watch: {},
  methods: {},
  components: {},
  computed: {},
  data() {
    return {

    };
  }
}
</script>


<style scoped>
img{
    margin-top: -10px;
}

h1{
    font-size: 3em;
}
#headerCont{
    width: 100%;
    height: 100px;
    padding:0px;
    margin: 0px;
    background: #8C3333;
    
}/*use star icon for star*/

#face{
    color: #F5F5F5;
}

button{
    margin:0px;
    padding:0px;
}

#overOns{
    background-color: #C64D4D;
    color:#F5F5F5;
}

@media only screen and (max-width: 1000px) {
    h1{
        font-size: 2em;
    }
}
</style>