<template>
  <div v-if="haveImages" :class="[ 'image-row',
                                   classDiv ]">
    <figure :class="[ 'basic', classFigure ]">
      <img :src="getImgUrl( images[0] )">
      <figcaption id="caption1">{{ captions[0] }}</figcaption>
    </figure>
    <figure v-if="secondImage" :class="[ 'basic', classFigure ]">
      <img :src="getImgUrl( images[1] )">
      <figcaption id="caption2">{{ captions[1] }}</figcaption>
    </figure>
  </div>  
</template>


<script>
/*
  <div v-if="haveImages" :class="[ 'image-row',
                                   {'textleft': classObject}]">
*/
export default {
    props: {
        event: {
            type: Object
        },
        imgarray: {
            type: Array
        },
        arrange: {
            // sidebyside, stacked
            type: String,
            default: "stacked"
        },
        textflow: {
            // left, right
            type: String,
            default: "right"
        }
    },

    computed: {
        images: function() {
            // create zero-based array of image filenames
            let arr = [];

            this.imgarray.forEach(e => arr.push(this.event.images[e-1]));

            return arr;
        },
        captions: function() {
            // create zero-based array of captions
            let arr = [];

            this.imgarray.forEach(e => arr.push(this.event.captions[e-1]));

            return arr;
        },
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
        classDiv() {
            return {
                // basic: true,
                textright: (this.textflow == "right") ? true : false,
                textleft: (this.textflow == "left") ? true: false
            }
        },
        classFigure() {
            return {
                basic: true,
                sidebyside: (this.arrange == "sidebyside") ? true : false
            }
        }
    },

    data() {
        return {
            // classes for image arrangement
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
/*
  div.image_row does not expand with its content, but that's ok in this case: it is
  a container as required by the vue template, but serves no other purpose.
  There are several ways to achieve div expansion, but they all have side effects 
  on text flow and/or object alignment.
*/

div.image-row {
  /* float: left; */
  /* margin-right: 1.75em; */
  width: fit-content;
}
.textleft {
  float: right;
  margin-left: 1.5em;
}
.textright {
  float: left;
  margin-right: 1.5em;
}


figure.basic {
  /* float: left; */
  margin: 0 0.5em 1.25em 0;
  border: 1px solid lightgrey;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
}

figure.sidebyside {
  display: inline-block;
}


figure.stacked {
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
}
figure.right {
  /* float: right; */
  margin: 0 0.25em 1em 1em;
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
/*  TODO:
  Handle options using classes:
    1. OK: images close to 4x3 ratio,
      a. OK: display side-by-side at left, and allow text wrap.
      b. OK: display one-above-other at left, and allow text wrap.
    2. images close to 2.5x1, display one-above-other at left, and allow text wrap.
    3. large images, center with no text wrap.
    4. medium vertical images, display at right, and allow text wrap.
    5. consider a prop to change the image width (will need more width variables)
    6. consider title above the set of images
    7. consider v-for for figures (based on images[n])
*/
</style>