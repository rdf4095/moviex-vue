<template>
  <div id="app">
    <section class="main-container">
      <div class="masthead">
        <masthead></masthead>
      </div>

      <div class="main-content">
        <router-view name='mainview'></router-view>
      </div>

      <div class="list-of-links">
        <event-list></event-list>
      </div>
      <footer><router-view name='footerview'></router-view>
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

/* for all articles  */
article {
    /* image size  */
  --single-width: 320px;
  --double-width: calc((var(--single-width) * 2) + 4);
  --single-height: 240px;

  margin: 1em 2em;
  border: 1px solid blue;
}
.image_row {
  margin-bottom: 1.5em;
}

figure {
  width: var(--single-width);
  height: auto;
	display: inline-block;
	margin: 1em;
	border: 1px solid lightgrey;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
}

figcaption {
  font-family: Times, serif;
  font-size: .85em;
  font-style: oblique;
  text-align: left;
  padding: 5px;
  background-color: #fff;
}

</style>
