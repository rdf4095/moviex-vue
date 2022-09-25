<template>
    <div v-if="haveImages" class="image_row">
        <figure>
            <img :src="getImgUrl( event.images[0] )" id="pic1">
            <figcaption id="caption1">{{ event.captions[0] }}</figcaption>
        </figure>

        <figure>
            <img :src="getImgUrl( event.images[1] )" id="pic2">
            <figcaption id="caption2">{{ event.captions[1] }}</figcaption>
        </figure>
        <p>images: {{ event.images }}</p>
        <p>captions: {{ event.captions }}</p>

    </div>  
</template>

<script>
import EventService from "../services/EventService.js";

export default {
    // props: ["images", "captions"],
    props: ["id"],

    data() {
        return {
            event: null
        }
    },

    computed: {
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

</style>