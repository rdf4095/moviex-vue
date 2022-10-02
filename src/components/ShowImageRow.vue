<template>
    <div v-if="haveImages" class="image_row">
        <figure>
            <img :src="getImgUrl( event.images[ imgarray[0]-1 ] )">
            <figcaption id="caption1">{{ event.captions[0] }}</figcaption>
        </figure>

        <figure v-if="secondImage">
            <img :src="getImgUrl( event.images[ imgarray[1]-1 ] )">
            <figcaption id="caption2">{{ event.captions[1] }}</figcaption>
        </figure>
        <!-- debug
        <p>images: {{ event.images }}</p>
        <p>captions: {{ event.captions }}</p>
        <p>imgarray: {{imgarray}}</p>
        <p>imgarray: {{ imgarray[0]}}, {{imgarray[1] }}</p>
        -->
      <!-- <div class="clearboth"></div> -->
          </div>  
</template>

<script>
// import EventService from "../services/EventService.js";

export default {
    // props: ["id", "imgarray"],
    props: ["event", "imgarray"],

    // data() {
    //     return {
    //         event: null
    //     }
    // },

    // data() {
    //     return {
    //         imgarray: this.event.images
    //     }
    // },
    computed: {
        secondImage: function() {
            return (this.imgarray.length == 2) ? true : false;
        },
        haveImages: function() {
          let havesome = false;
        //   let havesome = true;

          if (this.event && this.event.images) {
            havesome = (this.event.images[0].length > 0) ? true : false;
          }

          return havesome;
        }

    },

    methods: {
        getImgUrl(path) {
            var oneimage = require.context('../assets/images/');

            return oneimage('./' + path)
        }
    },

    // created() {
    //     // console.log("show id:",this.id);
    //     EventService.getEvent(this.id)
    //     .then(response => {
    //         // console.log("one event", response.data);
    //         this.event = response.data;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }
}
</script>

<style scoped>
/*  TODO:
  Handle options using classes:
    1. images close to 4x3 ratio, display side-by-side at left, and allow text wrap.
    2. images close to 2.5x1, display one-underneath at left, and allow text wrap.
    3. large images, center with no text wrap.
    4. large vertical images, display at right, and allow text wrap.
    5. for cases 1 and 2, specify width variable in each view file (views/*.vue)
*/

/*
  div.image_row does not expand with its content, but that's ok in this case, as it
  is a simple container as required by the vue template.
  There are several ways to achieve div expansion, but they all have side effects 
  on text flow and/or object alignment.
*/
.image_row {
    /* this doesn't seem to do anything but push adjacent text up/down,
       ...and maybe not even that with the last-applied styles.
    */
    margin-bottom: 1em;
}

figure {
  float: left;

  /* probably not needed:  */
  /* height: auto; */

  margin: 0 1.5em 1em 0;
  border: 1px solid lightgrey;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
}

figcaption {
  font-family: 'Times New Roman', serif;
  font-size: .85em;
  font-style: oblique;
  text-align: left;
  padding: 5px;
  background-color: #fff;
}

img {
  width: var(--single-width);
  vertical-align: top;
  background: white;
}
</style>