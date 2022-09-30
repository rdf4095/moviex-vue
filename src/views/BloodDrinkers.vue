<template>
  <article>
    <p>
    Text at the beginning of the blood-drinkers article.  Concerning FRANCIS GOES TO WEST POINT
    Dorothy Reid supplied additional dialogue.  Buried in the cast list are: Leonard Nimoy
     as football player #52, George Barrows, whose sub-specialty was playing gorillas,
      tv mainstay Paul Burke ("Naked City") in one of his earliest roles, and William Newell as a drunk.  In a long career of small character roles, Newell  played either a drunk or a bartender numerous times.  
      Just had the kind of face that seemed to belong in a bar, I suppose.
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

<style scoped>
</style>