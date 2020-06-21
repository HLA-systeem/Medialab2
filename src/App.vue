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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');

.v-content{
  background-color: #F5F5F5;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}

h1, h2, h3, h4, h5, h6{
  font-family: 'Roboto', sans-serif;
  color: #F5F5F5;
}

.hExpandContainer{
    width: 98%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    padding:0px;
    margin: 0px;
}

.routeButton{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-decoration: none;
}

</style>
