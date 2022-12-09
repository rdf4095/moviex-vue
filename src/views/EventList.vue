<template>
  <div class="events">
    <h1>Xperiments</h1>
    <ul>
      <li v-for="ev in events" :key="ev.id">
        <router-link :to="{ name: ev.title }">
          {{ ev.id }} - {{ ev.title }} &nbsp;&nbsp; ({{ ev.date }})
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
/* expects a JSON database to be available via a server.
   One way: 
     - install json-server into the parent dir (e.g. using npm)
     - serve the database by navigating to the dir and 
       typing into a console: 
     - json-server dir_path
*/
// @ is an alias to /src
import EventService from '@/services/EventService.js';

export default {
    name: "EventList",

    data() {
        return {
            events: null
        }
    },

    created() {
        EventService.getEvents()
        .then(response => {
            this.events = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
};
</script>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
}
h1 {
  padding-left: 0.25em;
  /*  add font  */
}
ul {
  list-style: none;
  padding-left: 0.25em;
}
</style>
