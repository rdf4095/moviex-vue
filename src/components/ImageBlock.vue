<!-- 
  Display a block of images, stacked one above the other (default), or side by side.
  Images are not separated by margins.
  There is a single caption, with text that may apply to more than 1 image,
  displayed as a separate div, to the right (default) or below.
-->
<template>
  <div v-if="haveImages" :class="[ 'image-block', classDiv ]">
    <figure v-for="item in images" :key="item"
            :class="[ 'basic', classFigure ]">
      <img :src="getImgUrl( item )" :class="[ classImage ]">
    </figure>

    <div :class="[ 'block-caption', classDivCaption ]">
      <slot></slot>
    </div>
  </div>  
</template>


<script>
/*
  named slot
    in this component: <slot name="myname">
    in the caller: instead of blockcaption data, wrap this in a template:
      <template v-slot=myname></template>
    shorthand version:
      <template #myname>any content to be passed</template>
*/
export default {
    props: {
        event: {
            type: Object
        },
        imgarray: {
            type: Array
        },
        imgsize: {
            type: String,
            default:"x1"
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
        // NOT USED FOR ImageBlock...
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
                centered: (this.textflow == "center") ? true: false,
                bottombar: (this.arrange == "sidebyside") ? true : false
            }
        },
        classDivCaption() {
            return {
                captionbottom: (this.arrange == "sidebyside") ? true : false,
                captionrightside: (this.arrange == "stacked") ? true : false
            }
        },
        classFigure() {
            return {
                basic: true,
                sidebyside: (this.arrange == "sidebyside") ? true : false,
                stacked: (this.arrange == "stacked") ? true : false
            }
        },
        classImage() {
            return {
                x1: (this.imgsize == "x1") ? true : false,
                x1wide: (this.imgsize == "x1wide") ? true : false,
                x2: (this.imgsize == "x2") ? true : false
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
div.block-caption {
  box-sizing: border-box;
  background: yellow;
  padding: 0.5em 0.25em;
  font-family: 'Times New Roman', serif;
  font-size: .85em;
  font-style: oblique;
}
.captionrightside {
  position: absolute;
  right: 0;
  top: 0;
  width: var(--single-sidebar);
  height: 100%;
  margin: 0 0 0 0.25em;
}
.captionbottom {
  position: relative;
  right: initial;
  top: initial;
  width: 100%;
  height: fit-content;
  margin: 0.25em 0 0 0;
}

div.image-block {
  position: relative;
  width: calc(var(--single-width) + var(--single-sidebar) + 0.25em);
  /* margin: 0 1em; */

  /* consider outline, same color as the caption background  */
}
div.bottombar {
  /* width: var(--single-width); */
  width: fit-content;
}
.textright {
  float: left;
  margin: 0 1.25em 1em 0;
}
.textleft {
  float: right;
  margin: 0 0 1em 1.25em;
}
.centered {
  float: none;
  margin: 0 auto;
}

figure.basic {
  margin: 0;
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

/* probably don't need this:  */
/* .right {
  margin: 0 0.25em 1em 1em;
} */

img {
  vertical-align: bottom;
  background: #eee;
}
.x1 {
  width: var(--single-width);
}
.x1wide {
  width: var(--single-width-wide);
}
/*  double-width is probably not good for image blocks of more than
    two imgs wide.  Consider logic to test for this and fall back to
    single-wide...
*/
.x2 {
  width: var(--double-width);
}
</style>