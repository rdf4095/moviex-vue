<template>
  <article>
    <ShowTitleBlock :event=event></ShowTitleBlock>
    <p>
      Sometimes when an evil person dies, they return as a soulless vampire...
      like Marco, who wishes to revive his dead wife Katrina, and convinces the girl's grieving mother
      Marisa to help him. A blood transfusion is arranged, but succeeds only partially--Katrina is needs blood--
      so Marco plots to obtain the heart of her sister Terito. When Terito begins seeing ghosts and realizes 
      her sister is now a vampire, she must rely on two protectors, a "man of action" called Victor de la Cruz, and the parish priest, who knows a great deal about vampires.
    </p>
    <!-- <ImageRow :id="id" :imgarray="[1,2]"></ImageRow>       -->
    <ImageRow :event=event :imgarray="[1,2]"></ImageRow>
    <p>
      The horse-drawn hearse we see in the first scene implies that we are about to see a classical period horror story--but the 60's auto we soon see following along douses this expectation.  Not to worry though, the caped nobleman, weirdo hunchback and midget assistant soon appear.
      Most of the film is in full color, but in some of the night scenes you can actually see DeLeon and his cameraman changing color filters in the middle of  the scene.  There is an odd psychological effect to this, since color is an effect of light, and light is anathema to the vampire and his activities.  However, these filters depict part of the characters' experience within the story, since the padre says at one point, "there seems to be a red glow..."  The glow suffuses the final sequences, with multiple vampires about, and resolves back to full color only when the vampiric influence is ended.  The characters themselves come to realize that red is the color of the vampire (of course it is--the color of blood).  I suppose a red glow is acceptable for the vampire, even though it is a kind of light.   In the same way that a red light is allowed in a photographic darkroom without spoiling the film.  (Do vampires fear only full-spectrum light because it is like sunlight?)
      You can also see the mist being pumped onto the set in a couple of scenes, but that's another matter.  
    </p>
    <p>Marco is an unusual vampire.  He wears wraparound sunglasses at night, sleeps in a regular bed and revives Katarina through what appears to be a normal blood transfusion.  In his wife's crypt there is a stained glass window depicting a cross.
      We are accustomed to scenes in which the vampire pulls up his cape to obscure his biting of a victim, but here we see Marco use his cape to hide a kiss he gives to his revived wife.  As if it's not proper that we should see the undead express a normal emotion, or have it implied that he can still show love.  His actions make clear that he does still love Katarina, and he later tells Marisa as much but qualifies it such that,  "in all other matters I have risen above human feelings".  There is a fascinating sexual dynamic between Marco and the two women, Katarina and Tanya.  Tanya is his loyal servant, but also apparently his jealous former mistress, who still wants his amorous attention.  She occasionally gets it, implying that vampires can feel desire too.  Marco must be frustrated that his wife is so close to returning to him, but too weak to resume their "life" together, so he gives in to the seductive Tanya at least once.
      The film extends vampire lore by offering simultaneous and conflicting definitions:  the priest says vampires are soulless bodies possessed by the devil, and minutes later he reads from a book that a bacillus "vampirus" turns the vampire's blood to a glue-like substance which causes them to be impervious to bullets.  Wood changes the substance to water, hence the use ofr a wooden stake through the heart.  At one point it's stated that it isn't the cross that vampires fear but the reflection of light from it.  Despite Marco's aversion to light (even indoor lighting, not just sunlight, hence the dark glasses he wears), he is never harmed by it.  It seems a kind of psychological aversion to conditions other than darkness.
    </p>
  </article>
</template>


<script>
import EventService from "../services/EventService.js";
import ShowTitleBlock from "../components/ShowTitleBlock.vue";
import ImageRow from "../components/ImageRow.vue";
// import ImageBlock from "../components/ImageBlock.vue";
// defaults for ImageRow and ImageBlock...  arrange: stacked, textflow: right

export default {
    props: ["id"],

    data() {
        return {
            event: null
        }
    },

    components: {
        ShowTitleBlock,
        ImageRow,
        // ImageBlock
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