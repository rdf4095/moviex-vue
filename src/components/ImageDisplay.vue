<!--
  Set parameters for display of one or more images.
-->
<template>
  <div v-if="haveImages">
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
        
        <template #block-content>
          <slot name="block-slot"></slot>
        </template>

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
            default: ''          // 'x1'
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
            default: 'right'      // 'left', 'center'
        }
    },

    components: {
        ImageSingle,
        ImageBlock
    },

    computed: {
        haveImages: function() {
            let havesome = false;

            if (this.event && this.event?.images != null && this.imgarray != null) {
              havesome = (this.event.images[0].length > 0) ? true : false;
            }

            return havesome;
        },
        imagearr: function() {
        // create one-based array of image objects, as specified by the user
            let arr = [];

            // return with console error if:
            //   - images not found (database is incomplete or corrupted), or
            // TODO:
            //   - imgarray not specified (error in writing the view component)
            if (!this.haveImages) {
              console.log("ImageDisplay: images not found or not specified.");
              return arr;
            }

            this.imgarray.forEach(e => {
                    let obj = {};
                    obj.image = this.event.images[e-1];
                    obj.caption = this.event.captions[e-1];
                    arr.push(obj);
            });

            return arr;
        },
        singleImages() {
            return this.group == 'single';
        },
        classDiv() {
            return {
                textright: (this.txt == 'right') ? true : false,
                textleft: (this.txt == 'left') ? true: false,
                centered: (this.txt == 'center') ? true: false,
                bottombar: (this.group == 'block' && this.arrange == 'sidebyside') ? true : false
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

    mounted: function() {
        var masthead = document.querySelector("div.mast");
        // var toggleImageButton = masthead.querySelector("button");
        var buttons = masthead.querySelectorAll("button");
        // toggleImageButton.style.display = "block";
        buttons.forEach(b => b.style.display = "block");
    }
}
</script>


<style scoped>
</style>