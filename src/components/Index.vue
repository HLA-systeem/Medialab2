<template>
    <div class="container mx-auto">
       <textarea v-model="review.des" id="reviewDes" class="col-10 offset-1" @click="toggleTTS()"></textarea>
    </div>
</template>

<script>
export default {
  created: function () {},
  watch: {},

  methods: {
    toggleTTS(e){
      this.getTalk = !this.getTalk
    
      if(this.getTalk){
        let sr = new window.webkitSpeechRecognition()
        //let textarea = Document.getElementById("reviewDes")
        let textarea = e.target
        console.log(textarea)
      }
    }
  },
  components: {},
  computed: {
    review(){
      return this.$store.state.review
    }
  },
  data() {
    return {
      getTalk: false
    };
  }
}
</script>


<style scoped>

#reviewDes{
  margin-top: 40px;
  border: solid 3px grey;
}
</style>

