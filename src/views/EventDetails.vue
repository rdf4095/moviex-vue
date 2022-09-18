<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.description }}</p>
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
  </div>
</template>

<script>
import EventService from "../services/EventService.js";

// is this needed? (as alternative to route push to make sure id is used??)
import { watchEffect } from 'vue';

export default {
    props: ["id", "images", "captions"],
    data() {
        return {
            event: null
        }
    },
    computed: {
        haveImages: function() {
          console.log("images:", this.images);
          let haveimg = (this.images && this.images[0].length > 0) ? true : false;
          return haveimg;
        }
        // haveObjects: function() {
        //   // let haveobjs = (this.event != null) ? true : false;
        //   let haveobjs = (this.images[0].length > 0) ? true : false;
        //   return haveobjs;
        // }
    },
    methods: {
        getImgUrl(path) {
            var oneimage = require.context('../assets/images/')
            return oneimage('./' + path)
        }
    },
    created() {
        // console.log("in Details/created, this.id:",this.id);

        watchEffect(() => {
          this.event = null;
          EventService.getEvent(this.id)
          .then(response => {
              // console.log("in Details, res.data", response.data);
              // console.log("in Details, this.event", this.event);

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