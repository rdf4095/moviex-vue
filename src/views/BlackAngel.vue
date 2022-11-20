<template>
  <article>
    <ShowTitleBlock :event=event></ShowTitleBlock>
    <section>Story</section>
    <p>
      1990, Santiago, Chile.  After graduation, several friends have a raucus holiday, which culminates in fatal tragedy for one of them, the strange, shy, obsessivly religious Angel...
	    Ten years later, one of the group, Gabriel Echeverria, is now a forensic specialist who sees that two of his friends who have died violently, and comes to believe that everyone present the day Angel died could now be in danger. He wonders if Angel has somehow returned, but the truth is even more bizarre than that.
    </p>
    <ImageDisplay :event=event :imgarray="[1,2]"></ImageDisplay>
    <section>Notes</section>
    <p>
      This is the first horror film made entirely in Chile.  The somber musical score is by Juan Francisco Cueto.  Music over the closing credits includes a heavy metal version of "Dust in the Wind", by Los Mox!
	    The Instituto Medico Legal De Santiago, where Gabriel works in the story, is a real place, and is acknowledged in the credits.  Quite a bit of filming was done there, and young director Olguin says he went to classes on forensic medicine and attended real autopsies to make sure this background part of the film was done authentically.
    </p>
    <p>
      Even if you know where you're going, you can enjoy the trip, as with this well-made psycho-thriller, which takes the familiar tropes of stalker horror and spins them into a twisted morality play with a possible supernatural angle.  As written, the characters are not easy to play without dissolving into parody, as often happens in this type of film, yet most of them are convincingly acted, especially by Alvaro Morales as the guilt-ridden physician Gabriel, and Andrea Freund as Carolina.  Freund's is the more difficult role, requiring her to range from conflicted widow relieved to be rid of her scummy husband, to concerned friend with her own hidden guilt, to emotionally broken victim.
	    The filmmakers' approach shows serious commitment to creating the desired audience response.  It was never the intent to create a "fun" movie.  Sordid details are not shied away from, and when it is time to reveal important information, this is done with ingenuity.  Examples include the videotape of the day the tragic death occurred, which is shown at several points in the film, revealing or emphasizing slightly different details each time, the shaky hand-held viewpoint anticipating today's "found footage" horror style.  In other scenes, director Olguin and cinematographer Arnaldo Rodríguez often go for the less obvious camera placement (Carolina's face in her car's rearview mirror), and for the most part the script avoids cliches:  no ghostly face pops up in a mirror, no cats spring from closets, no one has sex and then dies, and the police aren't made to look foolish.
    </p>
    <ImageDisplay :event=event :imgarray="[3,4]"></ImageDisplay>    
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