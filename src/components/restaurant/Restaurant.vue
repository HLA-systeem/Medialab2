<template>
    <div class="container col-12">
        <div class="row">
            <router-link class="routeButton col-12" to="/home">Videre</router-link>
        </div>
        <div class="row">
            <div class="col-6">
                <p class="offset-2">Restaurant Naam</p>
            </div>
            <div class="col-6">
                <p class="offset-5">score</p>
            </div>
        </div>
        <div class="row">
             <thumb></thumb>
        </div>
        <div class="row">
           <button class="col-6"><v-icon id="leftArrow" size="5em" class="col-12">mdi-arrow-left-bold</v-icon></button>
            <button class="col-6"><v-icon id="leftArrow" size="5em" class="col-12">mdi-arrow-right-bold</v-icon></button>
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
  //props: [restaurant], //{{}}
  data() {
    return {

    };
  }
}
</script>


<style scoped>
.container{
    width: 100%;
    height: 100%;
    padding-top:0px;
    padding-bottom:0px; 
}

</style>