<template>
  <div class="events">
    <h1>Events List</h1>
      <router-link :to="{ name: 'ForestOfDeath' }">Forest of Death</router-link>
      <router-link :to="{ name: 'BloodDrinkers' }">Blood Drinkers</router-link>
      <router-link :to="{ name: 'BeesInParadise' }">Bees in Paradise</router-link>
  </div>
</template>

<script>
/* methods below expect a JSON database to be available via a server.
   One way: 
     - install json-server into the vue3 dir with npm
     - serve the database by navigating to the project dir and 
       typing into a console: 
     - json-server dbpath
       where:
         dbpath is the relative path to the database file
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
  align-items: left;
}
</style>
