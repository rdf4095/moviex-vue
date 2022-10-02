<template>
  <div v-if="event">
    <p>{{ event.title }}</p>
  </div>
</template>

<script>
export default {
  props: ["event"]
}
</script>

<style scoped>
div {
  background: white;
  text-align: center;
  font-size: 16pt;
}
</style>