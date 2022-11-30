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
    props: { main: { id: 1 }, footer: { id: 1, title: "'Blood Drinkers'" } }
  },
  { 
    path: '/BeesInParadise', name: 'Bees in Paradise',
    components: { main: () => import("../views/BeesInParadise.vue"), footer: Footer },
    props: { main: { id: 2 }, footer: { id: 2, title: 'Bees in Paradise' } }
  },
  { 
    path: '/AladdinsMagicLamp', name: "Aladdin's Magic Lamp",
    components: { main: () => import("../views/AladdinsMagicLamp.vue"), footer: Footer },
    props: { main: { id: 3 }, footer: { id: 3, title: 'Aladdin\'s Magic Lamp' } }
  },
  { 
    path: '/BlackAngel', name: 'Black Angel',
    components: { main: () => import("../views/BlackAngel.vue"), footer: Footer },
    props: { main: { id: 4 }, footer: { id: 4, title: 'Black Angel' } }
  }
];

const router = new VueRouter({
  routes
});

export default router;