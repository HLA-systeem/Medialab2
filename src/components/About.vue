<template>
    <div class="col-12 container"> <!--return to home when component clicked twice-->
        <div class="row">
           <customHeader></customHeader>
        </div>
        <div class="row">
            <p>Videre is een review website speciaal gemaakt voor visueel beperkten.</p>
        </div>
        <div class="row">
            <p>De reviews zijn door visueel beperkten geschreven om de restaurant ervaring correct in beeld te brengen voor deze groep.</p>
        </div>
    </div>
</template>

<script>
import Header from './Header'

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

.container{ /*cannot be global*/
    padding:0px;
    margin: 0px;
}

p{
  text-align: center;
  font-size: 3.5em;
  font-family: 'Roboto Mono', monospace;
  margin: 20px;
  margin-top: 30px;
}

</style>