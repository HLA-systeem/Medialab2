<template>
    <div class="container col-12">
        <div class="row">
            <router-link class="routeButton col-12" to="/restaurant">Videre</router-link>
        </div>
        <div class="row">
            <div class="col-6">
                <p>Restaurant Naam</p>
            </div>
            <div class="col-6">
                <p>score</p>
            </div>
        </div>
        <div class="row">
             <router-link class="routeButton col-12" to="/restaurant">Resensies</router-link>
        </div>
        <div class="row">
            <router-link class="routeButton col-12" to="/menu">Menu</router-link>
        </div>
        <div class="row">
             <button class="col-12"><v-icon id="downloadIcon" size="5em" class="mx-auto">mdi-download-circle-outline</v-icon></button>
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
#downloadIcon{
    color: black;
}

p{
  text-align: center;
  margin-top: 50px;
}

</style>