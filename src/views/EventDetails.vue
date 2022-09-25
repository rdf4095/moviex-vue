<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.description }}</p>
    <div v-if="haveImages">
      <p>imgs: {{ numImages }}</p>

      <ShowImageRow :images="images" :captions="captions"></ShowImageRow>


    </div>
  </div>
</template>

<script>
// there is an extra haveImages here...
/*
    <div class="image_row" v-if="haveImages">
        <figure>
            <img :src="getImgUrl(images[0])" id="pic1">
            <figcaption id="caption1">{{ captions[0] }}</figcaption>
        </figure>

        <figure>
            <img :src="getImgUrl(images[1])" id="pic2">
            <figcaption id="caption2">{{ captions[1] }}</figcaption>
        </figure>
    </div>
*/

import EventService from "../services/EventService.js";
import { watchEffect } from 'vue';
import ShowImageRow from "../components/ShowImageRow.vue";

export default {
    props: ["id", "images", "captions"],
    components: {
      ShowImageRow
    },
    data() {
        return {
            event: null
        }
    },
    computed: {
        numImages: function() {
          return this.images.length;
        },
        haveImages: function() {
          return (this.images && this.numImages > 0) ? true : false
        },

      // coupled arrays not used in this version:
        // coupledImages: function() {
        //   return this.coupleArrayItems(this.images);
        // },
        // coupledCaptions: function() {
        //   return this.coupleArrayItems(this.captions);
        // }
    },
    methods: {

      // coupled arrays not used in this version:
        // coupleArrayItems(arr) {
        //   let arrout = [];
        //   let odd = arr % 2;

        //   for (let n=0; n<arr.length-1; n+=2) {arrout.push([arr[n], arr[n+1]])}
        //   if (odd) {
        //     arrout.push([arr.slice(-1)]);
        //   }

        //   return arrout;
        // }
    },
    created() {
        console.log("in Details/created, this.id:",this.id);

        watchEffect(() => {
          // this.event = null;
          EventService.getEvent(this.id)
          .then(response => {
              this.event = response.data;
              // console.log("in Details, eventList", this.eventList);
              // console.log("in Details, this.ev", this.event);
          })
          .catch(error => {
              console.log(error);
          })
        })
    }
}
</script>

<style>
div.image_row {
    /* image size  */
  --single-width: 320px;
  --double-width: calc((var(--single-width) * 2) + 4);
  --single-height: 240px;
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