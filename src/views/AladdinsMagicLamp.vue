<template>
  <article>
    <ShowTitleBlock :event=event></ShowTitleBlock>
    <section>Story</section>
    <p>
      A sage arrives in the city of Bagdad, having been informed by an oracle that a young man named Aladdin can obtain the lamp he seeks.Distrustful of the man, Aladdin keeps the lamp and soon discovers it contains a genie.
	    The genie informs Aladdin that the sage is an evil sorcerer, so Aladdin has the genie banish him.  Then, having glimpsed the  princess Boudour, Aladdin contrives to meet her, and a mutual attraction develops. Naturally, the Sultan's soldiers arrest the low-born Aladdin, and his mother reluctantly uses the genie to free her son. The sage doesn't give up easily though, and when he gets the lamp in his hands, Aladdin has to use a trick to get the genie to help him set the situation right. In the end, he is reunited with the princess whom he loves.
    </p>

    <!-- <ImageDisplay :event=event :imgarray="[1,2]"  :arrange="'sidebyside'" :txt="'left'">
    </ImageDisplay> -->
    <ImageDisplay :event=event :imgarray="[1,2]" :group="'block'">
      <template #block-slot>{{ cap }}</template>
    </ImageDisplay>

    <section>Notes</section>
    <p>
      The Bagdad pictured in this easy-going version of the story is simple in design, spartan in its furnishings, has clean and spacious open areas, and features architecture of pleasing white and cream, a far cry from the cluttered and dirt-crusted cities the movies usually offer us as examples of Middle East culture.  Even the Sultan's dungeon is scrubbed and well-lit. The people wear a lot of pastels, which along with all the white gives a distinct look.  Special effects to depict the otherwhere world in which the lamp is found, and the otherness of the genie, are also simple, with models, and in-camera effects such as double exposures and forced perspective.  Nearly a third of the running time is devoted to the first part of the Aladdin story, in which the sorcerer who seeks the lamp is revealed for the scoundrel he is.  His wandering through the city, where most of the people he runs into are oblivious to his questions, also serves to show us the richness of city life.  These people play elaborate games, are obsessed with their personal trinkets and devices, 
      and submit elaborately to the pomp of a royal visit.  Not unlike us today, with our virtual reality, cellphones and presidential visits.
    </p>
    <!-- <ImageDisplay :event=event :imgarray="[3,4]" :arrange="'sidebyside'"></ImageDisplay>     -->

    <ImageDisplay :event=event :imgarray="[3, 4]"></ImageDisplay>    
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
            cap: 'slot text from the view file.'
                //  'The movie depicts a Baghdad in which simplicity rules, ' +
                //  'in terms of color, design and special effects (note the ' +
                //  'animated effect for the genie).'
        }
    },

    components: {
        ShowTitleBlock,
        ImageDisplay
    },

    created() {
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
</style>