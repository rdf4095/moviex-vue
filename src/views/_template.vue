<template>
  <article>
    <ShowTitleBlock :event=event></ShowTitleBlock>
    <p>
      text
    </p>
    <ImageDisplay :event=event :imgarray="[]"></ImageDisplay>
    <p>
      text
    </p>

    <ImageDisplay :event=event :imgarray="[]" :group="'block'">
      <template #block-slot>{{ cap }}</template>
    </ImageDisplay>
  </article>
</template>


<script>
import EventService from "../services/EventService.js";
import ShowTitleBlock from "../components/ShowTitleBlock.vue";
import ImageDisplay from "../components/ImageDisplay.vue";

export default {
    props: ["id"],

    data() {
        return {
            event: null,
            cap: 'block_caption'
        }
    },

    components: {
        ShowTitleBlock,
        ImageDisplay
    },

    created() {
        EventService.getEvent(this.id)
        .then(response => {
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