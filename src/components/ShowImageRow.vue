<template>
  <div v-if="haveImages" :class="[ 'image-row', {'allow-text-flow': classObject.stacked}]">
    <figure :class="classObject">
      <img :src="getImgUrl( event.images[ imgarray[0]-1 ] )">
      <figcaption id="caption1">{{ event.captions[ imgarray[0]-1 ] }}</figcaption>
    </figure>
    <figure v-if="secondImage" :class="classObject">
      <img :src="getImgUrl( event.images[ imgarray[1]-1 ] )">
      <figcaption id="caption2">{{ event.captions[ imgarray[1]-1 ] }}</figcaption>
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
export default {
    // props: ["event", "imgarray", "arrange", "orient"],
    props: {
        event: {
            type: Object
        },
        imgarray: {
            type: Array,
        },
        arrange: {
            type: String,
            default: "sidebyside"
        },
        orient: {
            type: String,
        }
    },

    computed: {
        secondImage: function() {
            return (this.imgarray.length == 2) ? true : false;
        },
        haveImages: function() {
            let havesome = false;

            if (this.event && this.event.images) {
              havesome = (this.event.images[0].length > 0) ? true : false;
            }

            return havesome;
        },
        classObject() {
            return {
                basic: true,
                sidebyside: (this.arrange == "sidebyside") ? true : false,
                stacked: (this.arrange == "stacked") ? true : false
            }
        }
    },

    data() {
        return {
            // classes for image arrangement
            // imgStacked: false,
            // divHoriz: (this.classObject.sidebyside) ? true : false
        }
    },

    methods: {
        getImgUrl(path) {
            var oneimage = require.context('../assets/images/');

            return oneimage('./' + path)
        }
    }
}
</script>


<style scoped>
/*  TODO:
  Handle options using classes:
    1. OK: images close to 4x3 ratio,
      a. OK: display side-by-side at left, and allow text wrap.
      b. OK: display one-above-other at left, and allow text wrap.
    2. images close to 2.5x1, display one-above-other at left, and allow text wrap.
    3. large images, center with no text wrap.
    4. medium vertical images, display at right, and allow text wrap.
    5. for cases 1 and 2, specify width variable in each view file (views/*.vue)
*/

/*
  div.image_row does not expand with its content, but that's ok in this case, as it
  is a simple container as required by the vue template.
  There are several ways to achieve div expansion, but they all have side effects 
  on text flow and/or object alignment.
*/

/* is this "basic" ??  */
div.image-row {
  /* push down the text immediately below the container: helps readability and 
     better offsets the image from the text.  Doesn't seem to matter what the value 
     is, just that a value is specified.
  */
  margin-bottom: 1em;
}
.allow-text-flow {
  float: left;
}

figure.basic {
  margin: 0 1.5em 1em 0;
  border: 1px solid lightgrey;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
}
.sidebyside {
  float: left;
}
.stacked {
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
}

figcaption {
  font-family: 'Times New Roman', serif;
  font-size: .85em;
  font-style: oblique;
  text-align: left;
  padding: 5px;
  background-color: #fff;
}

img {
  width: var(--single-width);
  vertical-align: top;
  background: white;
}
</style>