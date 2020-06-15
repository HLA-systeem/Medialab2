import Index from "./components/Index.vue";
import SearchRestaurant from "./components/restaurant/SearchRestaurant.vue";

export default [
  { path: "/", component: Index, name: "index"},
  { path: "/searchR", component: SearchRestaurant, name: "searchRestaurant"},
];