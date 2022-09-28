<template>
    <div v-if="haveImages" class="image_row">
        <figure>
            <img :src="getImgUrl( event.images[ imgarray[0]-1 ] )" id="pic1">
            <figcaption id="caption1">{{ event.captions[0] }}</figcaption>
        </figure>

        <figure>
            <img :src="getImgUrl( event.images[ imgarray[1]-1 ] )" id="pic2">
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
  img {
    width: var(--single-width);
  }
</style>