<template>
    <router-link class="hExpandContainer routeButton mx-auto" :to="{ name: 'restaurant', params: {restaurantName: restaurant.name} }">
      <div class="row">
        <div class="col-5 mt-5">
          <p>{{restaurant.name}}</p>
          <p>Diner</p>
        </div>
        <div class="col-6 mt-5">
          <v-icon class="star offset-5" size="5em">mdi-star</v-icon>
        </div>
      </div>
      <div class="row">
        <p class="mx-auto">Afstand: 3KM</p>
      </div>
    </router-link>
</template>

<script>
export default { //
  created: function () {},
  watch: {},
  methods: {},
  components: {},
  computed: {},
  props: ['restaurant'], //{{}}
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
  font-size: 2em;
  color: #F5F5F5;
}

.star{
  color: #F6CD62
}


</style>