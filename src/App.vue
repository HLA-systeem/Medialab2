<template>
  <v-app>
    <v-content class="container-fluid">
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({}),
};
</script>

<style>
.v-content{
  background-color: #F8F8FF;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}

.routeButton{
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

</style>
