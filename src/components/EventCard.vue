<template>
  <router-link class="event-link"
               :to="{ name: 'EventDetails', 
                      params: { id: event.id, 
                                images: event.images,
                                captions: event.captions 
                              }
                     }">
    <div class="event-card">
      <h4>{{ event.title }}</h4>
      <span>{{ event.date }},  {{ event.origin }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      Object,
      required: true
    }
  }
}
</script>

<!-- "scoped" attribute limits CSS to this component  -->
<style scoped>
h4 {
  display: inline;
  float: left;
  margin: 0.25em 0;
  padding: 0 0.25em;
}
span {
  /* margin-left: 0.5em; */
  float: right;
  margin: 0.25em 0 0 0.5em;
  padding: 0.25em;
}
.event-card {
  /* padding: 20px;
  width: 250px; */
  /* padding: 1em; */
  width: 300px;
  height: 2em;
  cursor: pointer;
  border: 1px solid #39495c;
  /* margin-bottom: 18px; */
  /* margin-bottom: 0.75em; */
  padding: 0 0.25em;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
