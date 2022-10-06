<template>
  <article>
    <ShowTitleBlock :event=event></ShowTitleBlock>
    <p>
      A sage arrives in the city of Bagdad, having been informed by an oracle in the stars that a young man named Aladdin is one he should seek.  The sage talks his way into the home of Aladdin and his mother, presenting himself as the brother of Aladdin's father, Ali Al Marouf.  He persuades Aladdin to help him retrieve a lamp which he desires, and the earnest young man finds it.  However, he becomes alarmed when the sage is ready to kill him to possess the lamp, so Aladdin keeps it.  He soon discovers the lamp contains a genie.
	    The genie informs Aladdin that his uncle is no such thing, but an evil Maghribian sorcerer, so Aladdin has the genie banish him.  The young man introduces the genie to his mother, who cowers in fear, and he later suggests that the genie bring the princess Boudour to him, since he happened to meet her earlier and he's sure there was a spark between them.  Naturally, the Sultan's soldiers trail her and arrest Aladdin, and the Sultan arbitrarily chooses Mubarak as a husband for the unruly girl.
	    Aladdin's mother hesitantly uses the genie to free her son, and Aladdin works some magical mischief to rejoin the princess.  They are about to have their wedding when the evil sage returns, determined to get the lamp for himself--which he does.  The sage magically substitutes himself for the sultan and the genie, ordered to kill Aladdin, cannot bring himself to harm his friend.  So, Aladdin gets him an alternate receptacle in which to live, and the genie is again empowered to help him.  The situation is set right, and Aladdin gets back with the princess.
    </p>
    <ShowImageRow :event=event :imgarray="[1,2]" :arrange="'stacked'"></ShowImageRow>
    <p>
      The Bagdad pictured in this easy-going version of the story is simple in design, spartan in its furnishings, has clean and spacious open areas, and features architecture of pleasing white and cream, a far cry from the cluttered and dirt-crusted cities the movies usually offer us as examples of Middle East culture.  Even the Sultan's dungeon is scrubbed and well-lit. The people wear a lot of pastels, which along with all the white gives a distinct look.  Special effects to depict the otherwhere world in which the lamp is found, and the otherness of the genie, are also simple, with models, and in-camera effects such as double exposures and forced perspective.  Nearly a third of the running time is devoted to the first part of the Aladdin story, in which the sorcerer who seeks the lamp is revealed for the scoundrel he is.  His wandering through the city, where most of the people he runs into are oblivious to his questions, also serves to show us the richness of city life.  These people play elaborate games, are obsessed with their personal trinkets and devices, and submit elaborately to the pomp of a royal visit.  Not unlike us modern types with our own games, cellphones and presidential visits.
    </p>
    <ShowImageRow :event=event :imgarray="[3,4]" :arrange="'sidebyside'"></ShowImageRow>    
</article>
</template>

<script>
import EventService from "../services/EventService.js";
import ShowTitleBlock from "../components/ShowTitleBlock.vue";
import ShowImageRow from "../components/ShowImageRow.vue";

export default {
    props: ["id"],

    data() {
        return {
            event: null
        }
    },

    components: {
      ShowTitleBlock,
      ShowImageRow
    },

    created() {
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

<style scoped>
</style>