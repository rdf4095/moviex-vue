<!-- more extensive image captioning than ShowImageRow  
     Caption is displayed as a sidebar, to the right by default
-->
<template>
  <div v-if="haveImages" :class="[ 'image-row', classDiv ]">
    <figure v-for="item in images" :key="item"
            :class="[ 'basic' ]">
      <img :src="getImgUrl( item )">
    </figure>

    <div id="test">
      <slot></slot>
    </div>

  </div>  
</template>


<script>
export default {
    props: {
        event: {
            type: Object
        },
        imgarray: {
            type: Array
        },
        // arrange: {
        //     // sidebyside, stacked
        //     type: String,
        //     default: "stacked"
        // },
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
        }
        // classFigure() {
        //     return {
        //         basic: true,
        //         sidebyside: (this.arrange == "sidebyside") ? true : false,
        //         stacked: (this.arrange == "stacked") ? true : false
        //     }
        // }
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
/* test slot  */
div#test {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  width: var(--single-sidebar);
  height: 100%;    /*  ?? or fit-content  */
  margin-left: 0.25em;
  background: yellow;
  /* border: 1px solid lightgrey; */
  padding: 0.25em;
  font-size: 0.8em;
}

div.image-row {
  position: relative;
  /* width: fit-content; */
  width: calc(var(--single-width) + var(--single-sidebar) + 0.25em);
  margin: 0 1em;
}
.textleft {
  float: right;
  margin-left: 1em;
}
.textright {
  float: left;
  margin-right: 0.75em;
}
.centered {
  float: none;
  margin: 0 auto;
}

figure.basic {
  /* margin: 0 1.25em 1.25em 0; */
  margin: 0;
  /* border: 1px solid lightgrey; */
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
.right {
  margin: 0 0.25em 1em 1em;
}

img {
  width: var(--single-width);
  vertical-align: top;
  background: #eee;
}
/*  TODO:
    1. consider a prop to change the image width (will need more width variables)
*/
</style>