<template>
  <div id="app">
    <main class="main-container">
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
    </main>
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

main {
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
  background: #eee;
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
  --poster-width: 50%;
  --single-sidebar: 100px;

  display: inline-block;
  margin: 1em 2em;
  padding: 0.5em;
  border: 1px solid blue;
}

article > p {
  margin-top: 0.25em;
}

section {
  font-family: "Allan", Verdana, sans-serif;
  font-size: 1.25em;
  color: #099;
  margin: 15px 0 5px 0;
  display: inline;
}
</style>
