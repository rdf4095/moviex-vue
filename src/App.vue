<template>
  <div id="app">
    <section class="main-container">
      <div class="masthead">
        <masthead></masthead>
      </div>

      <div class="main-content">
        <router-view></router-view>
        <!-- <router-view></router-view> -->
      </div>

      <div class="list-of-links">
        <!-- <router-view></router-view> -->
        <event-list></event-list>
      </div>
    </section>
  </div>
</template>

<script>
import Masthead from "./components/Masthead.vue";
import EventList from "./views/EventList.vue";

export default {
  components: {
    Masthead,
    EventList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}

section {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0.5em;
    grid-template-areas: "header header"
                         "content links"
}
.masthead {
  grid-area: header;
  background: lightyellow;
  /* height: 100px; */
}
.main-content {
  grid-area: content;
  background: lightblue;
}
.list-of-links {
  grid-area: links;
  background: lightgreen;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
} */
</style>
