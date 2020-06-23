<template>
    <div class="container col-12">
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="hExpandContainer mx-auto">
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
    </div>
</template>

<script>
import Header from '../Header'

export default {
  created: function () {},
  watch: {},
  methods: {},
  components: {
      'customHeader': Header
  },
  computed: {},
  data() {
    return {

    };
  }
}
</script>


<style scoped>

.container{ 
    padding:0px;
    margin: 0px;
    height: 90%;
}

h4{
    margin-top: 60px;
}

button{
    border: solid 1px black;
}

#trashIcon,#downloadIcon{
    color:#C64D4D
}


#leftArrow, #rightArrow{
    color: #8C3333;
}


</style>