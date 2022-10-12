import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Footer from "../views/Footer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", name: "Landing",
    components: { main: Landing }
  },
  { 
    path: '/BloodDrinkers', name: 'Blood Drinkers',
    components: { main: () => import("../views/BloodDrinkers.vue"), footer: Footer },
    props: { main: { id: 444 }, footer: { id: 444, title: "'Blood Drinkers'" } }
  },
  { 
    path: '/BeesInParadise', name: 'Bees in Paradise',
    components: { main: () => import("../views/BeesInParadise.vue"), footer: Footer },
    props: { main: { id: 333 }, footer: { id: 333 } }
  },
  { 
    path: '/AladdinsMagicLamp', name: "Aladdin's Magic Lamp",
    components: { main: () => import("../views/AladdinsMagicLamp.vue"), footer: Footer },
    props: { main: { id: 555 }, footer: { id: 555 } }
  },
  { 
    path: '/BlackAngel', name: 'Black Angel',
    components: { main: () => import("../views/BlackAngel.vue"), footer: Footer },
    props: { main: { id: 666 }, footer: { id: 666 } }
  }
];

const router = new VueRouter({
  routes
});

export default router;
