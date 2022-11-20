<template>
    <div>
        <img src="../assets/images-global/moviex-logo.png" alt="moviex logo">
        <div class="mast">
          <span>Fantastic movies worth talking about.</span>
          <span>Casting the net wide.</span>
          <div class="topmenu">
            <button @click="(event) => toggleImages( event )">hide images</button>
          </div>
        </div>
    </div>
</template>

<script>
/* alt event syntax for button click:
   @click="hideImages( $event )"
*/
export default {
    methods: {
        toggleImages(event) {
            var content = document.querySelector("div.main-content");
            var imagedivs = content.querySelectorAll("div.image-row, div.image-block")
            var status = (event.target.innerHTML == 'hide images') ? 'shown' : 'hidden';

            if (status == 'shown') {
                imagedivs.forEach(f => f.style.display = 'none');
                event.target.innerHTML = "show images";
            } else {
                imagedivs.forEach(f => f.style.display = 'block');
                event.target.innerHTML = "hide images";
            }
        },
        checkKey(event) {
            console.log("in checkKey:",event.which);
        }
    },
    created: function () {
        window.addEventListener('keyup', this.checkKey);
    }
}
</script>

<style scoped>
div {
    /* margin-bottom: 0.5em; */

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

.mast :nth-child(1) {
    background: aquamarine;
}

.mast :nth-child(2) {
    background: skyblue;
}

.topmenu {
    outline: 1px solid lightcoral;
    margin-top: 0.5em;
    padding: inherit;
}

button {
    border-width: 1px;
    cursor: pointer;
}
</style>