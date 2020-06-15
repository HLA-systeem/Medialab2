<template>
    <div class="container col-12">
        <div class="row">
            <router-link class="routeButton col-12" to="/home">Videre</router-link>
        </div>
        <div class="row">
            <input class="col-12" type="text">
        </div>
        <div class="row">
            <!-- restaurant component -->
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
    display: flex;
    flex-direction: column;
    align-content: stretch;
    padding-top:0px;
    padding-bottom:0px; 
}

input{
    border: solid 1px black;
    height: 60px;
}

button{
    border: solid 1px black;
}

</style>