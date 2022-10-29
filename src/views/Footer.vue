<template>
  <div>
    Now viewing experiment: <strong>{{ id }}</strong>, 
    code name: <strong>{{ title }}</strong>
  </div>
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