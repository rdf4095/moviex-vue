<template>
  <div class="events">
    <h1>Events List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from '@/services/EventService.js';
// import { watchEffect } from 'vue';

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
// Serve the database by starting in the vue3 dir and 
// typing into a console: 
//   json-server moviex-vue01/src/assets/db.json

  created() {
    // console.log("calling getEvents...");

// is watchEffect needed here??
    // watchEffect(() => {
    //   this.events = null;
      EventService.getEvents()
      .then(response => {
        // console.log("...response.data:",response.data);
        this.events = response.data;
        // return response.data;
      })
      .catch(error => {
        console.log(error);
      })
    // })
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
