import Index from "./components/Index.vue"
import SearchRestaurant from "./components/restaurant/SearchRestaurant.vue"
import Restaurant from "./components/restaurant/Restaurant.vue"
import SavedRestaurant from "./components/restaurant/SavedRestaurant.vue"
import Menu from "./components/Menu.vue"

export default [
  { path: "/", component: Index, name: "index"},
  { path: "/searchR", component: SearchRestaurant, name: "searchRestaurant"},
  { path: "/restaurant", component: Restaurant, name: "restaurant"},
  { path: "/saved", component: SavedRestaurant, name: "saved"},
  { path: "/menu", component: Menu, name: "menu"},
];