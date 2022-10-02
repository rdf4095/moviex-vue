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
    </div>  
</template>

<script>
import EventService from "../services/EventService.js";

export default {
    props: ["id", "imgarray"],

    data() {
        return {
            event: null
        }
    },

    computed: {
        secondImage: function() {
            return (this.imgarray.length == 2) ? true : false;
        },
        haveImages: function() {
          let havesome = false;

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

    created() {
        // console.log("show id:",this.id);
        EventService.getEvent(this.id)
        .then(response => {
            // console.log("one event", response.data);
            this.event = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style scoped>
.image_row {
    /* display: inline-block; */

    /* this doesn't seem to do anything but push adjacent text up/down  */
    margin-bottom: 1em;
}

figure {
  /* not needed if img width is set  */
  width: var(--single-width);

  /* try 09-30-2022  */
  float: left;
  height: auto;
  margin: 1em 1.5em 0 0;
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
  width: var(--single-width);  /* OR: single-width-wide for wider images  */
  vertical-align: top;
  background: white;
}
</style>