<template>
  <div>Now viewing experiment: {{ id }}, code name: {{ title }}</div>
</template>


<script>
export default {
    props: ["id", "title"]
}
</script>


<style scoped>
div {
    background: lightcoral;
}
</style>