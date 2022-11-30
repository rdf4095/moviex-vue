<template>
  <div>
    Landing page
    <p></p>
    General content until a specific view is selected.
  </div>  
</template>


<script>
export default {
    mounted: function() {
        var masthead = document.querySelector("div.mast");
        var toggleImageButton = masthead.querySelector("button");

        toggleImageButton.style.display = "none";

        // window.removeEventListener();
    }
}
</script>


<style scoped>
button {
  display: none;
}
</style>