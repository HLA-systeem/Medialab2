<template>
    <div class="row" id="headerCont">
        <!-- logo -->
            <router-link class="routeButton col-2 offset-5" to="/home">
                <h1>Videre</h1>
            </router-link>
            <button class="offset-3 col-1"><v-icon id="face" size="3em">mdi-face-outline</v-icon></button>    
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
#headerCont{
    width: 100%;
    height: 70px;
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
</style>