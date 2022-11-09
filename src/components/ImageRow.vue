<!--
  Display one or more images, stacked one above the other (default), or side by side.
  Images are separated by margins.
  Each image has its own caption.
-->
<template>
  <!-- <div v-if="haveImages" :class="[ 'image-row', classDiv ]">
    <figure v-for="item in imagearr" :key="item"
            :class="[ 'basic', classFigure ]">
      <img :src="getImgUrl( item.image )" :class="[ classImage ]">
      <figcaption>{{ item.caption }}</figcaption>
    </figure>
  </div> -->


  <div>
    <test 
        :event="event"
        :imagearr="imagearr"
        :classDiv="classDiv"
        :classFigure="classFigure"
        :classImage="classImage">
    </test>  
  </div>

</template>


<script>
import test from "./ImageSingle.vue";
export default {
    props: {
        event: {
            type: Object
        },
        imgarray: {
            type: Array
        },
        // imgsize: {
        //     type: String,
        //     default:"x1"          // 'x1wide', 'x2'
        // },
        // arrange: {
        //     type: String,
        //     default: "stacked"    // 'sidebyside'
        // },
        // textflow: {
        //     type: String,
        //     default: "right"      // 'left'
        // },
        format: {
            type: Object,
            default() {
                return {
                    size: 'x1',
                    group: 'single',
                    arrange: 'stacked',
                    txt: 'right'
                }
            }
        }
    },

    components: {
        test
    },

    computed: {
        imagearr: function() {
        // create one-based array, a subset of images/captions passed in
            let arr = [];//["bees in paradise_1.png", "bees in paradise_2.png"];

            if (this.event?.images == null) {console.log("no images"); return arr}

            this.imgarray.forEach(e => {
                    let obj = {};
                    obj.image = this.event.images[e-1];
                    obj.caption = this.event.captions[e-1];
                    arr.push(obj);
            });

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
                textright: (this.format.txt == "right") ? true : false,
                textleft: (this.format.txt == "left") ? true: false,
                centered: (this.format.txt == "center") ? true: false
            }
        },
        classFigure() {
            return {
                basic: true,
                sidebyside: (this.format.arrangement == "sidebyside") ? true : false,
                stacked: (this.format.arrangement == "stacked") ? true : false
            }
        },
        classImage() {
            return {
                x1: (this.format.size == "x1") ? true : false,
                x1wide: (this.format.size == "x1wide") ? true : false,
                x2: (this.format.size == "x2") ? true : false
            }
        }
    },

    // data() {
    //     return {
    //     }
    // },

    // methods: {
    //     getImgUrl(path) {
    //         var oneimage = require.context('../assets/images/');

    //         return oneimage('./' + path)
    //     }
    // }

    // mounted() {
      //     console.log("in ImageRow, imagearr=",this.imagearr);
    // }
}
</script>


<style scoped>
/* div.image-row {
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
  vertical-align: bottom;
  background: white;
}
.x1 {
  width: var(--single-width);
}
.x1wide {
  width: var(--single-width-wide);
}
.x2 {
  width: var(--double-width);
} */
</style>