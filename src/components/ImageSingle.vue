<!--
  Display of one or more images, 
  stacked one above the other (default), or side by side.
  Images are separated by margins.
  Each image has its own caption.
-->
<template>
  <div :class="[ 'image-row', classDiv ]">
    <figure v-for="(item,index) in imagearr" :key="index"
            :class="[ 'basic', classFigure ]">
      <img :src="getImgUrl( item.image )" :class="[ classImage ]">
      <figcaption>{{ item.caption }}</figcaption>
    </figure>
  </div>  
</template>


<script>
export default {
  props: {
      event: {type: Object},
      imagearr: {type: Array},
      classDiv: {type: Object},
      classFigure: {type: Object},
      classImage: {type: Object}
  },

  methods: {
      getImgUrl(path) {
          var oneimage = require.context('../assets/images/');

          return oneimage('./' + path)
      }
  },

  mounted() {
      console.log("in ImageSingle:");
      console.log("    imagearr:",this.imagearr);
      console.log("    classDiv:",this.classDiv);
      console.log("    classFigure:",this.classFigure);
      console.log("    classImage:",this.classImage);
  }

}
</script>


<style scoped>
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
}
</style>
