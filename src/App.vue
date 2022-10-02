<template>
  <div id="app">
    <section class="main-container">
      <div class="masthead">
        <masthead></masthead>
      </div>

      <div class="main-content">
        <router-view name='main'></router-view>
      </div>

      <div class="list-of-links">
        <event-list></event-list>
      </div>
      <footer><router-view name='footer'></router-view>
      </footer>
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
}

section {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5em;
  grid-template-areas: "header header"
                       "content links"
                       "footer footer"
}
.masthead {
  grid-area: header;
  background: lightyellow;
}
.main-content {
  grid-area: content;
  background: lightblue;
  min-height: 400px;
}
.list-of-links {
  grid-area: links;
  background: lightgreen;
}
footer {
  grid-area: footer;
  background: lightsalmon;
}

article {
    /* image size  */
  --single-width: 320px;
  --single-width-wide: 480px;
  --double-width: calc((var(--single-width) * 2) + 4);

  /* not needed if height=auto  */
  --single-height: 240px;

  display: inline-block;
  margin: 1em 2em;
  padding: 0.5em;
  border: 1px solid blue;
}
</style>
