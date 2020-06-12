import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Router from "./router";
import {store} from "./store";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Router,
  mode: "history"
});

new Vue({
  render: h => h(App),
  router: router,
  vuetify,
  store: store
}).$mount("#app");