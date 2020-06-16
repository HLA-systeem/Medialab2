<template>
    <div class="container col-12">
        <div class="row">
            <router-link class="routeButton col-12" to="/home">Videre</router-link>
        </div>
        <div class="row">
            <router-link class="mx-auto my-auto" id='resLink' to="/restaurant">Restaurant Name</router-link>
        </div>
        <div class="row">
            <button class="col-6"><v-icon id="trashIcon" size="5em">mdi-delete</v-icon></button>
            <button class="col-6"><v-icon id="downloadIcon" size="5em">mdi-cloud-download</v-icon></button>
        </div>
        <div class="row">
            <button class="col-6"><v-icon id="leftArrow" size="5em">mdi-arrow-left-bold</v-icon></button>
            <button class="col-6"><v-icon id="rightArrow" size="5em">mdi-arrow-right-bold</v-icon></button>
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

h4{
    margin-top: 60px;
}

button{
    border: solid 1px black;
}


</style>