<template>
    <div class="container col-12">
        <div class="row">
            <router-link class="routeButton col-12" to="/home">Videre</router-link>
        </div>
        <div class="row">
            <input class="col-12" placeholder="Searchbar" type="text">
        </div>
        <div id="menuItem"> 
            <div class="row">
                <h4 class="offset-1">Gerecht naam</h4>
            </div>
             <div class="row">
                 <p class="mx-auto">Gerecht info</p>
             </div>
             <div class="row">
                <p class="offset-11" id="priceTag">price</p>
             </div>
        </div>
        <div class="row">
            <button class="col-6"><v-icon id="leftArrow" size="5em">mdi-arrow-left-bold</v-icon></button>
            <button class="col-6"><v-icon id="leftArrow" size="5em">mdi-arrow-right-bold</v-icon></button>
        </div>
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
input{
    border: solid 1px black;
    height: 60px;
    font-size: 2em;
    text-align: center;
}

button{
    border: solid 1px black;
}


#menuItem{
    height: 200px;
}

#priceTag{
    margin-top: 80px
}

</style>