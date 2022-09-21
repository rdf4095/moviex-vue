<template>
    <div class="image_row">
        <figure>
            <img :src="getImgUrl(images[0])" id="pic1">
            <figcaption id="caption1">{{ captions[0] }}</figcaption>
        </figure>

        <figure>
            <img :src="getImgUrl(images[1])" id="pic2">
            <figcaption id="caption2">{{ captions[1] }}</figcaption>
        </figure>
    </div>  
</template>

<script>
export default {
    props: ["images", "captions"],

// data not used in this version:
    data() {
        return {
            event: null
        }
    },

    methods: {
        getImgUrl(path) {
            var oneimage = require.context('../assets/images/');

            return oneimage('./' + path)
        }
    }
}
</script>

<style>

</style>