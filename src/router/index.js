import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import FooterDetails from "../views/FooterDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",

    components: {
      mainview: Landing
    }   
  },
  { 
    path: '/ForestOfDeath', name: 'ForestOfDeath',
    components: {
      mainview: () => import("../views/ForestOfDeath.vue"), footerview: FooterDetails
    },
    props: { mainview: { id: 222 }, footerview: { id: 222 } }
  },
  { 
    path: '/BloodDrinkers', name: 'BloodDrinkers',
    components: {
      mainview: () => import("../views/BloodDrinkers.vue"), footerview: FooterDetails
    },
    props: { mainview: { id: 444 }, footerview: { id: 444 } }
  },
  { 
    path: '/BeesInParadise', name: 'BeesInParadise',
    components: {
      mainview: () => import("../views/BeesInParadise.vue"), footerview: FooterDetails
    },
    props: { mainview: { id: 333 }, footerview: { id: 333 } }
  }

];

const router = new VueRouter({
  routes
});

export default router;
