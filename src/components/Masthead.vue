<template>
    <div>
        <img src="../assets/images-global/moviex-logo.png" alt="moviex logo">
        <div class="mast">
          <span>Fantastic movies worth talking about.</span>
          <span>Casting the net wide.</span>
          <div class="topmenu">
              <button id="hideimages" @click="(event) => toggleImages( event )">hide images</button>
              <button id="maximages" @click="(event) => toggleMaxImages( event )">maximize images</button>
              <button id="hidetext" @click="(event) => toggleText( event )">hide text</button>
          </div>
        </div>
    </div>
</template>

<script>
/* alt event syntax for button click:
   @click="hideImages( $event )"
*/
// import EventBus from './services/event-bus.js';

export default {
    methods: {
        toggleImages() {
            var content = document.querySelector("div.main-content");
            var imagedivs = content.querySelectorAll("div.image-row, div.image-block")
            var hidebutton = document.getElementById("hideimages");
            var status = (hidebutton.innerHTML == 'hide images' &&
                          imagedivs.length > 0) ? 'shown' : 'hidden';

            if (imagedivs.length == 0) {return}

            if (status == 'shown') {
                imagedivs.forEach(f => f.style.display = 'none');
                hidebutton.innerHTML = "show images";
            } else {
                imagedivs.forEach(f => f.style.display = 'block');
                hidebutton.innerHTML = "hide images";
            }
        },
        toggleMaxImages() {
        /*
          Toggle maximum image size that fits within the current parent (article)
          width. Preserve image shape as much as possible.
          Notes: 1. Article element width and style.width are not available, so
                    use clientWidth ().
                 2. For our usual image size (~1000:460), could also use offsetWidth
                    (see mozilla docs for difference between client and offsset)
                 3. article element padding can be ignored as long as
                    as it remains small (currently 8px on each side).
        */

       // TODO: implement toggle
       // TODO: prevent multiple calls (keeps enlarging the img)

            var fig1 = document.querySelector("figure");
            var img1 = fig1.querySelector("img");
            var art = document.querySelector("article");

            // var lrpadding = 16;    // need global variable in App.vue
            
            console.log("in Masthead/toggleMaxImages:");
            console.log("    img1 display w,h:", img1.width, img1.height);
            console.log("    img1 natural w,h:", img1.naturalWidth, img1.naturalHeight);
            console.log("    article width:", art.width);
            console.log("    article style width:", art.style.width);
            console.log("    article client width:", art.clientWidth);
            console.log("    article offset width:", art.offsetWidth);

            // natural size: 1002x468

            // 836x390, article: 838x421
            // img1.style.width = ((art.clientWidth - lrpadding) < img1.naturalWidth) ? (art.clientWidth - lrpadding) + "px" : img1.naturalWidth + "px";

            // 852x397  article: 854x428
            img1.style.width = (art.clientWidth < img1.naturalWidth) ? art.clientWidth + "px" : img1.naturalWidth + "px";

            // 838x420; article: 840x422  article has 20px R+B margin
            // img1.style.width = ((art.offsetWidth - lrpadding) < img1.naturalWidth) ? (art.offsetWidth - lrpadding) + "px" : img1.naturalWidth + "px";

            // 854x398  article: 856x429
            // img1.style.width = (art.offsetWidth < img1.naturalWidth) ? art.offsetWidth + "px" : img1.naturalWidth + "px";

            // after maximize
            console.log("    img1 w,h:", img1.width, img1.height);

        },
        toggleText() {
       // TODO: implement toggle
            console.log("in toggleText");
            var art = document.querySelector("article");
            var sections = art.querySelectorAll("section");
            var ps = document.querySelectorAll("article > p");
            console.log("sections:",sections);
            console.log("ps:",ps);

            sections.forEach(s => s.style.display = 'none');
            ps.forEach(p => p.style.display = 'none');
        },
        checkKey(event) {
            console.log("in checkKey, event.which:",event.which);
            // 'I' = hide/display displayed images
            if (event.which == 73 && event.ctrlKey) {
                this.toggleImages();
            }
            // 'M' = hide/display displayed images
            if (event.which == 77 && event.ctrlKey) {
                this.toggleMaxImages();
            }
            // 'T' = hide/display displayed text
            if (event.which == 84 && event.ctrlKey) {
                this.toggleText();
            }
        }
    },
    created: function () {
        window.addEventListener('keyup', this.checkKey);
    }
}
</script>

<style scoped>
div {
    /* expand div to height of children when they are floated.  */
    overflow: hidden;
}

img {
    float: left;

    /* width:auto;
    height: fit-content; */
}
.mast {
    float: right;
    padding: 0.25em;
}

span {
    display: block;
    padding: inherit;
}
.mast span:nth-child(1) {
    background: aquamarine;
}
.mast span:nth-child(2) {
    background: skyblue;
}

.topmenu {
    outline: 1px solid lightcoral;
    margin-top: 0.5em;
    padding: inherit;
}

button {
    border-width: 1px;
    border-radius: 5px;
    margin-bottom: 0.5em;
    cursor: pointer;
    display: none;    /* overridden when a view has images  */
}
</style>