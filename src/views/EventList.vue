<template>
  <div class="events">
    <h1>Events for Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
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

// db.json is local, but I use json-server to serve it 
//     (...the recommended github/my-json-server doesn't work.)
// I installed json-server into the vue3 dir with npm
// 
// Serve the database by starting in the vue3 dir and 
// typing into a console: 
//        json-server moviex-vue01/src/assets/db.json

  created() {
    console.log("getting events");
    EventService.getEvents()
    .then(response => {
      console.log('events', response.data);
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
