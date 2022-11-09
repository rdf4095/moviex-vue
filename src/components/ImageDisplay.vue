<!--
  Set parameters for display of one or more images.
-->
<template>
  <div>
    <ImageSingle v-if="singleImages"
        :event="event"
        :imagearr="imagearr"
        :classDiv="classDiv"
        :classFigure="classFigure"
        :classImage="classImage">
    </ImageSingle>
    <ImageBlock v-else
        :event="event"
        :imagearr="imagearr"
        :classDiv="classDiv"
        :classDivCaption="classDivCaption"
        :classFigure="classFigure"
        :classImage="classImage">
    </ImageBlock>
  </div>
</template>


<script>
import ImageSingle from "./ImageSingle.vue";
import ImageBlock from "./ImageBlock.vue";
export default {
    props: {
        event: {
            type: Object
        },
        imgarray: {
            type: Array
        },
        size: {
            type: String,
            default: 'x1'          // 'x1wide', 'x2'
        },
        group: {
            type: String,
            default: 'single'     // 'block'
        },
        arrange: {
            type: String,
            default: 'stacked'    // 'sidebyside'
        },
        txt: {
            type: String,
            default: 'right'      // 'left'
        }
    },

    components: {
        ImageSingle,
        ImageBlock
    },

    computed: {
        imagearr: function() {
        // create one-based array, a subset of images/captions passed in
            let arr = [];//["bees in paradise_1.png", "bees in paradise_2.png"];

            // if (this.event?.images == null) {console.log("no images"); return arr}
            if (this.event?.images == null) {return arr}

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
        singleImages() {
            return this.group == 'single';
        },
        classDiv() {
            return {
                textright: (this.txt == "right") ? true : false,
                textleft: (this.txt == "left") ? true: false,
                centered: (this.txt == "center") ? true: false,
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
                x1: (this.size == "x1") ? true : false,
                x1wide: (this.size == "x1wide") ? true : false,
                x2: (this.size == "x2") ? true : false
            }
        }
    },

    // data() {
    //     return {
    //     }
    // },

}
</script>


<style scoped>
</style>