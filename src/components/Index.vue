<template>
    <div class="container mx-auto">
       <textarea v-model="review.des" id="reviewDes" class="col-10 offset-1"></textarea>
    </div>
</template>

<script>
export default {
  watch: {},
  methods: {},
  components: {},
  computed: {
    review(){
      return this.$store.state.review
    }
  },
  data() {
    return {};
  }
}
</script>


<style scoped>

#reviewDes{
  margin-top: 40px;
  border: solid 3px grey;
}
</style>

