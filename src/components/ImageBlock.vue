<!--
  Display of one or more images, 
  stacked one above the other (default), or side by side.
  No margins between images.
  There is a single caption displayed the same height or width of images.

  NOTE: Currently, image size adapts from single to single-wide to double, 
  if the user changes the browser window size.
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

          return oneimage('./' + path);
      }
  },

  mounted() {
      // console.log("ImageBlock mounted:");

      // console.log("    imagearr:",this.imagearr);
      // console.log("    classDiv:",this.classDiv);
      // console.log("    classFigure:",this.classFigure);
      // console.log("    classImage:",this.classImage);
  }
}

/*
  consider: removing 'height: 100%' from the caption div. 
  This makes a cleaner 'block' appearance with less css.
  It is convenient to leave this div set at 100px wide, since its width is
  used to adjust the container div width when browser window changes.
*/
</script>


<style scoped>
div.block-caption {
  box-sizing: border-box;
  background: white;
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
  width: calc(var(--double-width) + var(--single-sidebar) + 0.25em);

  /* box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 4px 8px 10px rgba(0, 0, 0, 0.35); */
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
  width: var(--double-width);
}
.x1 {
  width: var(--single-width);
}

@media screen and (max-width: 1400px) {
  div.image-block {
    width: calc(var(--single-width-wide) + var(--single-sidebar) + 0.25em);
  }
  img {
    width: var(--single-width-wide);
  }
}
@media screen and (max-width: 1000px) {
  div.image-block {
    width: calc(var(--single-width) + var(--single-sidebar) + 0.25em);
  }
  img {
    width: var(--single-width);
  }
}
</style>
