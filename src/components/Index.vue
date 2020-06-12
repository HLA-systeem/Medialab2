<template>
    <div class="container mx-auto">
       <textarea v-model="review.des" id="reviewDes" class="col-10 offset-1" @click="toggleTTS()"></textarea>
    </div>
</template>

<script>
export default {
  created: function () {
    let sr = new window.webkitSpeechRecognition()
    let textarea = Document.getElementById("reviewDes")
    if(this.getTalk){
      console.log(textarea)
    }
  },
  watch: {},
  methods: {
    toggleTTS(){
      this.getTalk = !this.getTalk
      console.log(this.getTalk)
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

