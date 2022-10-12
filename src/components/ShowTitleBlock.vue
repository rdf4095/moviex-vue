<template>
  <div v-if="event">
    <p><span>{{ event.title }}</span></p>
    <p><span>{{ event.origin }}, {{ event.date }}</span></p>
    <p><span>directed by {{ event.director }}</span></p>
  </div>
</template>


<script>
export default {
    props: ["event"]
}
</script>


<style scoped>
div {
  text-align: center;
  margin-bottom: 1em;
  padding: 0.25em 0;
  background-color: #eff;
  /* bronze, similar to masthead:  */
  border: 4px ridge #bb9d91;
}

p {
  margin: 0;
}

div p span {
  font-family: "Palatino", "Times New Roman", serif;
}

div p:first-child span {
  font-size: 1.5em;
  font-weight: bold;
}
</style>