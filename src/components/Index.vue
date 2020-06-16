<template>
    <div class="container col-12">
        <div class="row">
            <router-link class="routeButton col-12" to="/home">Videre</router-link>
        </div>
        <div class="row">
            <router-link class="routeButton col-12" to="/searchR">Zoek Restaurant</router-link>
        </div>
        <div class="row">
            <router-link class="routeButton col-12" to="/saved">Opgeslagen Restaurants</router-link>
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
</style>