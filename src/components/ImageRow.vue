<!--
  Display one or more images, stacked one above the other, or side by side, separated
  by margins.
  Each image has its own caption.
-->
<template>
  <div v-if="haveImages" :class="[ 'image-row', classDiv ]">
    <figure v-for="(item,index) in images" :key="item"
            :class="[ 'basic', classFigure ]">
      <img :src="getImgUrl( item )">
      <figcaption>{{ captions[index] }}</figcaption>
    </figure>
  </div>  
</template>


<script>
/*        <figcaption id="caption1">{{ captions[index] }}</figcaption>
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
                textright: (this.textflow == "right") ? true : false,
                textleft: (this.textflow == "left") ? true: false,
                centered: (this.textflow == "center") ? true: false
            }
        },
        classFigure() {
            return {
                basic: true,
                sidebyside: (this.arrange == "sidebyside") ? true : false,
                stacked: (this.arrange == "stacked") ? true : false
            }
        }
    },

    data() {
        return {
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
/* div#test {
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  background: yellow;
  padding: 0.25em;
} */
div.image-row {
  position: relative;
  width: fit-content;
}
.textright {
  float: left;
  margin-right: 0.75em;
}
.textleft {
  float: right;
  margin-left: 1em;
}
.centered {
  float: none;
  margin: 0 auto;
}

figure.basic {
  margin: 0 1.25em 1.25em 0;
  border: 1px solid lightgrey;
  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
}
.sidebyside {
  display: inline-block;
}
.stacked {
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
}

/* probably don't need this  */
/* .right {
  margin: 0 0.25em 1em 1em;
} */

figcaption {
  margin-top: 0.25em;
  padding: 5px;
  font-family: 'Times New Roman', serif;
  font-size: .85em;
  font-style: oblique;
  text-align: left;
  background-color: #fff;
}

img {
  width: var(--single-width);
  vertical-align: bottom;
  background: white;
}
/*  TODO:
    1. consider a prop to change the image width.
       (will need more width variables in App.vue)
*/
</style>