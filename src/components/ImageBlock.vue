<!--
  Display of one or more images, 
  stacked one above the other (default), or side by side.
  No margins between images.
  There is a single caption displayed the same height or width of images.
-->
<template>
  <div :class="[ 'image-block', classDiv ]">

    <figure v-for="(item,index) in imagearr" :key="index"
            :class="[ 'basic', classFigure ]">
      <img :src="getImgUrl( item.image )" :class="[ classImage ]">
    </figure>

    <div :class="[ 'block-caption', classDivCaption ]">
      <template><slot name='block-content'></slot></template>
    </div>

  </div>  
</template>


<script>
export default {
  props: {
      event: {type: Object},
      imagearr: {type: Array},
      classDiv: {type: Object},
      classDivCaption: {type: Object},
      classFigure: {type: Object},
      classImage: {type: Object}
  },

  methods: {
      getImgUrl(path) {
          var oneimage = require.context('../assets/images/');

          // var im = oneimage('./' + path);
          // console.log("im natural w,h:", im.naturalWidth, im.naturalHeight);
          return oneimage('./' + path);
      }
  },

  mounted() {
      // console.log("in ImageBlock:");

      // console.log("    imagearr:",this.imagearr);
      // console.log("    classDiv:",this.classDiv);
      // console.log("    classFigure:",this.classFigure);
      // console.log("    classImage:",this.classImage);

      // var fig1 = document.querySelector("figure");
      // var img1 = fig1.querySelector("img");
      // console.log("when ImageBlock is mounted:");
      // console.log("    img1 display w,h:", img1.width, img1.height);
      // console.log("    img1 natural w,h:", img1.naturalWidth, img1.naturalHeight);
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
  overflow: auto;
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

  /* consider outline, same color as the caption background  */

  box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
}
.div_x1 {
  width: calc(var(--single-width) + var(--single-sidebar) + 0.25em);
}
.div_x1wide {
  width: calc(var(--single-width-wide) + var(--single-sidebar) + 0.25em);
}
.div_x2 {
  width: calc(var(--double-width) + var(--single-sidebar) + 0.25em);
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
}
.sidebyside {
  display: inline-block;
}
.stacked {
  width: fit-content;
  width: -moz-fit-content;
  width: -webkit-fit-content;
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
}
</style>
