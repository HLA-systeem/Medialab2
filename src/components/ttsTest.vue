<template>
    <div class="container mx-auto">
      <form>
        <div class="form-group row">
          <textarea v-model="review.des" id="reviewDes" class="col-10 mx-auto" @click="toggleTTS"></textarea>
        </div>

        <div class="row col-12"> <!--Col-12 to prevent slider cancel on Pitch-->
          <div class="form-group mt-5 offset-2">
            <label for="rate" class="offset-2 row">Rate</label>
            <input class="offset-3 custom-range" type="range" id="rate" min="0" max="2" value="1" step="0.1">
          </div> 

          <div class="form-group mt-5 offset-4">
            <label for="pitch" class="offset-2 row">Pitch</label>
            <input class="offset-3 custom-range" type="range" id="pitch" min="0" max="2" value="1" step="0.1">
          </div> 
        </div>

        <div class="form-group row">
          <select id="voiceSelect" class="form-control form-control-lg col-3 mx-auto"></select>
        </div>

        <div class="row">
          <button id="speakButton" class="mx-auto col-2" @click="speak">Speak</button>
        </div>
      

      </form>
    </div>
</template>

<script>
export default {
  created: function () {
    let getVoices = () => {
      let voiceSelect = document.getElementById("voiceSelect")
      
      this.voices = this.synth.getVoices()

      this.voices.forEach(voice => {
        // Create option element
        let option = document.createElement('option');
        // Fill option with voice and language
        option.textContent = voice.name + '(' + voice.lang + ')';

        // Set needed option attributes
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
      });
    }


    if (window.speechSynthesis.onvoiceschanged !== undefined) { //change for Firefox
      window.speechSynthesis.onvoiceschanged = getVoices;
    }
  },
  watch: {},

  methods: {
    toggleTTS(e){ 

    /* //STT test
      this.getTalk = !this.getTalk
    
      if(this.getTalk){
        //let textarea = document.getElementById("reviewDes")
        let textarea = e.target

        let sr = webkitSpeechRecognition || SpeechRecognition

        let rec = new sr()
        rec.continuous = true
        rec.onend = () => {this.getTalk = false}
        rec.onresult = (event) =>{
           console.log('testing')
           this.$store.state.review.des = speechEvent.result
        }
     
       
        console.log(textarea)
      }*/
    },

    speak(e){  
      e.preventDefault()
      
      if (this.synth.speaking) {
        console.error('Already speaking...');
        return;
      }

      let text = this.$store.state.review.des
      let rate = document.getElementById("rate")
      let pitch = document.getElementById("pitch")
      let voice = document.getElementById("voiceSelect")

      if(text != ''){
        let toSpeak = new SpeechSynthesisUtterance(text);

        toSpeak.rate = rate.value;
        toSpeak.pitch = pitch.value;

        this.voices.forEach(v => {
          if (v.name === voice.value) {
            speakText.voice = v;
          }
        });

        this.synth.speak(toSpeak);
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
      getTalk: false,
      synth: window.speechSynthesis,
      voices: []
    };
  }
}
</script>


<style scoped>

#reviewDes{
  margin-top: 40px;
  border: solid 3px grey;
}

#voiceSelect{
  margin-top: 40px;
  border: solid 3px grey;
  border-radius: 30px;
}

#speakButton{
   border: solid 3px grey;
   margin-top: 20px;
   padding: 10px;
   text-align: center;
}
</style>

