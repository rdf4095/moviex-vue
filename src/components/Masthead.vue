<template>
    <div class="mast">
        <img src="../assets/images-global/moviex-logo.png" alt="moviex logo">
        <div class="options">
          <span>Fantastic movies worth talking about.</span>
          <span>Casting the net wide.</span>
          <div class="topmenu">
              <button id="hideimages" @click="(event) => toggleImages( event )">hide images</button>
              <button id="hidetext" @click="(event) => toggleText( event )">hide text</button>
          </div>
        </div>
    </div>
</template>

<script>
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
        toggleText() {
            var art = document.querySelector("article");
            var sections = art.querySelectorAll("section");
            var ps = document.querySelectorAll("article > p");
            var hidebutton = document.getElementById("hidetext");
            var status = (hidebutton.innerHTML == 'hide text') ? 'shown' : 'hidden';

            if (status == 'shown') {
                sections.forEach(s => s.style.display = 'none');
                ps.forEach(p => p.style.display = 'none');
                hidebutton.innerHTML = "show text";
            } else {
                sections.forEach(s => s.style.display = 'inline-block');
                ps.forEach(p => p.style.display = 'block');
                hidebutton.innerHTML = "hide text";
            }
        },
        checkKey(event) {
            // console.log("in checkKey, event.which:",event.which);

            // 'I' = hide/display displayed images
            if (event.which == 73 && event.ctrlKey) {
                this.toggleImages();
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
/* div.mast {
    display: flex;
    flex-direction: row;
} */
div {
    /* expand div to height of children when they are floated.  */
    overflow: hidden;
}

img {
    float: left;

    /* width:auto;
    height: fit-content; */
}
.options {
    position: absolute;
    top: 0;
    right: 0;
    /* float: right; */
    padding: 0.25em;
    background-color: lightyellow;
}

span {
    display: block;
    padding: inherit;
}
.options span:nth-child(1) {
    background: aquamarine;
}
.options span:nth-child(2) {
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