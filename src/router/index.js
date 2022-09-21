import Vue from "vue";
import VueRouter from "vue-router";
// import EventList from "../views/EventList.vue";
import Landing from "../views/Landing.vue";
import EventDetails from "../views/EventDetails.vue";
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
    path: "/events/:id",
    name: "EventDetails",

    //    -- for larger apps with many routes, use the above method
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/EventDetails.vue")

    // direct loading version
    components: {
      mainview: EventDetails,
      footerview: FooterDetails
    },
    props: {
      mainview: true,
      footerview: true
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
