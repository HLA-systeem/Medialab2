<template>
    <router-link class="hExpandContainer routeButton mx-auto" to="/restaurant">
      <div class="row">
        <div class="col-5 mt-5">
          <p>Restaurant Naam</p>
          <p>Type</p>
        </div>
        <div class="col-6 mt-5">
          <p class="offset-5">score</p>
        </div>
      </div>
      <div class="row">
        <p class="mx-auto">Afstand: 3KM</p>
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
.hExpandContainer{
  background-color: #8C3333;

}

p{
  font-family: 'Roboto Mono', monospace;
  color: #F5F5F5;
}

</style>