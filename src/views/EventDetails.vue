<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <div class="image_row">
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

export default {
    props: ["id", "images", "captions"],
    data() {
        return {
            event: null,
            myimage1: "../asseets/images/blood drinkers_1.jpg"
        }
    },
    computed: {
        img1() {
            // return "../assets/images/" + this.images[0];
            return "../assets/images/" + this.images[0];
        },
        img2() {
            // return "../assets/images/" + this.images[1];
            return "../assets/images/" + this.images[1];
        }
    },
    methods: {
        getImgUrl(path) {
            var images = require.context('../assets/images/')
            return images('./' + path)
        }
    },
    created() {
        // fetch event by id and set local data item to it
        EventService.getEvent(this.id)
        .then(response => {
            console.log("one event", response.data);
            this.event = response.data;
        })
        .catch(error => {
            console.log(error);
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