<template>
    <router-link class="container col-12" to="/home">
      <div class="row">
        <div class="col-6">
          <p class="offset-2">Restaurant Naam</p>
          <p class="offset-2">Type</p>
        </div>
        <div class="col-6">
          <p class="offset-5">score</p>
        </div>
      </div>
      <div class="row">
        <p class="mx-auto">Afastand: 3KM</p>
      </div>
    </router-link>
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