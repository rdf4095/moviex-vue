import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// GitHub repository: rdf4095/dbtest

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/*
alternative way to run the app:

import { createApp } from "vue"
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
*/