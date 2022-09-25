<template>
  <div class="events">
    <h1>Events List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
      <router-link :to="{ name: 'BloodDrinkers' }">Blood Drinkers</router-link>

  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from '@/services/EventService.js';

export default {
  name: "EventList",
  components: {
    EventCard
  },

  data() {
    return {
      events: null
    }
  },

// install json-server into the vue3 dir with npm
// Serve the database by starting in the project dir and 
// typing into a console: 
//   json-server dbpath
// where:
//   dbpath is the relative path to the database file

  created() {
    // console.log("calling getEvents...");

      EventService.getEvents()
      .then(response => {
        // console.log("...response.data:",response.data);
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
  align-items: center;
}
</style>
