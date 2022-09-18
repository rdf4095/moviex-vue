import Vue from "vue";
import VueRouter from "vue-router";
// import EventList from "../views/EventList.vue";
import Landing from "../views/Landing.vue";
import EventDetails from "../views/EventDetails.vue";
import About from "../views/About.vue";
import BloodDrinkers from "../views/BloodDrinkers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    // components: {
    //   mainview: About,
    //   linksview: EventList 
    // }   
  },
  {
    path: "/events/:id",
    name: "EventDetails",
    props: true,
    
    // component: EventDetails

    // components: {
    //   mainview: EventDetails,
    //   linksview: EventList
    // }

    // component: {
    //   mainview: EventDetails
    // }
    component: EventDetails
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")

    // direct loading version
    //    -- for larger apps with many routes, use the above method
    component: About
    // components: {
    //   mainview: About,
    //   linksview: EventList
    // }
  },
  {
    path: "/BloodDrinkers",
    name: "BloodDrinkers",
    component: BloodDrinkers
    // components: {
    //   mainview: BloodDrinkers,
    //   linksview: EventList
    // }
  }
];

const router = new VueRouter({
  routes
});

export default router;
