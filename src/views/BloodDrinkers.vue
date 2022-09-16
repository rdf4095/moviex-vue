<template>
  <article>
    Text at the beginning of the blood-drinkers article.  Concerning FRANCIS GOES TO WEST POINT
    Dorothy Reid supplied additional dialogue.  Buried in the cast list are: Leonard Nimoy
     as football player #52, George Barrows, whose sub-specialty was playing gorillas,
      tv mainstay Paul Burke ("Naked City") in one of his earliest roles, and William Newell as a drunk.  In a long career of small character roles, Newell  played either a drunk or a bartender numerous times.  
      Just had the kind of face that seemed to belong in a bar, I suppose.
    <div class="image_row">
        <figure>
            <img src="../assets/images/blood drinkers_1.jpg" id="pic1">
            <figcaption id="caption1">The vampire's assistant hovers nearby.</figcaption>
        </figure>

        <figure>
            <img src="../assets/images/shadow strikes_1.jpg" id="pic2">
            <figcaption id="caption2">Waiting for the shadow to strike.</figcaption>
        </figure>
    </div>
    Text after the image-row.
  </article>
</template>

<script>
export default {

}
</script>

<style>
article {
    /* image size  */
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
}
</style>