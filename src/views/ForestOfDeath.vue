<template>
  <article>
    <p>
    Text at the beginning of the Forest of Death article.  Concerning FRANCIS GOES TO WEST POINT
    Dorothy Reid supplied additional dialogue.
    </p>

    <div>
      <ShowImageRow :id="id" :imgarray="[1,2]"></ShowImageRow>      
    </div>

    Text after the image-row.
  </article>
</template>

<script>
// import EventService from "../services/EventService.js";
import ShowImageRow from "../components/ShowImageRow.vue";

export default {
    props: ["id"],

    components: {
      ShowImageRow
    }
}

</script>

<style>
</style>