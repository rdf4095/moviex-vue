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
    },

/*
  Can these styles be placed in App.vue as globals?
*/
}
</script>

<style>
/* article {
  --single-width: 320px;
  --double-width: calc((var(--single-width) * 2) + 4);
  --single-height: 240px;

  margin: 1em 2em;
  border: 1px solid blue;
}

.image_row {
  margin-bottom: 1.5em;
}

figure {
  width: var(--single-width);
  height: auto;
	display: inline-block;
	margin: 1em;
	border: 1px solid lightgrey;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
}

figcaption {
  font-family: Times, serif;
  font-size: .85em;
  font-style: oblique;
  text-align: left;
  padding: 5px;
  background-color: #fff;
}

img {
  width: var(--single-width);
	height: auto;
}

.single {
  width: var(--single-width);
}

.double {
  width: var(--double-width);
} */
</style>