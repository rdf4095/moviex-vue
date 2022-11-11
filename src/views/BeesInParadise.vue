<template>
  <article>
    <ShowTitleBlock :event=event></ShowTitleBlock>
    <p>
      Near the southern part of Africa lies Paradise Island, which has a matriarchal society and only a few men; men are allowed to marry—but are executed two months later. 
      A ferry plane with four men has to bail out near the island, and soon find themselves serenaded by a bevy of young ladies.  One of these tells Peter the commander that Paradise Island is ruled by the law of the beehive: the queen rules, and men are drones. 
      At the occasion of the big rugby game, Arthur makes a spectacle of himself as referee.  Afterward, islander Rouana tricks him into a betrothal, 
      but he is saved when the crew’s radio is finally repaired, and they call for rescue.
    </p>
    <ImageDisplay :event=event :imgarray="[1,2]"></ImageDisplay>
    <p>
      Arthur Askey is keen to please his audience, and he tries hard, succeeding most of the time.  The dialogue comes fast, and is laced with slangy British patter.  Will he be bored on the island?  Oh no.  “Just give me a glass of milk and a crossword puzzle and I wouldn’t call the queen me uncle.”  Ronald is also a spry, dippy comedian, but of a different sort, distractable, nerdy and over-enunciating, without the quick-firing buckshot gags and slapstick. He and Askey are a makeshift team, but it’s not abrasive for us to watch the two of them play off each other.  A good example of their teamwork is the pair trying to read the map while girls keep popping up around them on the beach.  All the guys get a least a joke here and there.  Max to a passing woman:  “I could really go for you.”  “Alright, go!”  The women also know how to needle each other, for instance the line about a reticent bee being a “dumb girl turning a deaf ear to a blind date.”
      The island matriarchy is surprisingly well-delineated; we see the workings of the royal court, the guard, the scouts and the marketplace, and hear about customs and laws.  This is wartime entertainment for the English masses, so these are not threatening, warlike amazons, but mini-skirted flirts.  At first glance, and second glance too, it looks like a male ego’s re-rendering of paradise but, in some strange way, also like a valid way for a real society of women to organize, and for its citizens to behave.  If they want to wear makeup and shorts, well who’s to stop them?  They have effectively put men in their place, and I can’t say it’s not the most logical place.
      For entertainment purposes as well, there has to be a song every few minutes, but somehow this fits in with the zany atmosphere.  You wonder why the chanteuse keeps singing, “never leave me…” when she knows marriages are two months long. 
    </p>
    <ImageDisplay :event=event :imgarray="[3,4]" :group="'block'"></ImageDisplay>

    <!-- <ImageDisplay :event=event :imgarray="[3,4]" :group="'block'" :arrange="'sidebyside'">
      this is text for the slot
    </ImageDisplay> -->
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
            event: null
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