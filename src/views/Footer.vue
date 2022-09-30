<template>
  <div>Now viewing experiment: {{ id }}</div>
</template>

<script>
export default {
    props: ["id"]
}
</script>

<style scoped>
div {
    background: lightcoral;
}
</style>