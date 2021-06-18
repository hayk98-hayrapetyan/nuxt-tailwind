<template>
  <div class="mt-4">
    <client-only>
      <VueSlickCarousel :arrows="false" :dots="false" v-bind="settings">
        <img
          v-for="(image, i) in images"
          :key="i"
          :src="require(`@/assets/img/trust/${image}.png`)"
          alt="image"
          class="opacity-50 h-20 lg:h-28 cursor-grab"
          draggable="false"
        >
      </VueSlickCarousel>
    </client-only>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      "dots": false,
      "dotsClass": "slick-dots custom-dot-class",
      "edgeFriction": 0.35,
      "infinite": true,
      "autoplay": true,
      "speed": 1500,
      "cssEase": "linear",
      "slidesToShow": 8,
      "slidesToScroll": 1,
      "swipeToSlide": true,
      "responsive": [
        {
          "breakpoint": 1150,
          "settings": {
            "slidesToShow": 7
          }
        },
        {
          "breakpoint": 850,
          "settings": {
            "slidesToShow": 6
          }
        },
        {
          "breakpoint": 650,
          "settings": {
            "slidesToShow": 5,
          }
        },
        {
          "breakpoint": 450,
          "settings": {
            "slidesToShow": 4,
          }
        },
        {
          "breakpoint": 300,
          "settings": {
            "slidesToShow": 3,
          }
        }
      ]
    },
    images: ['img4', 'img2', 'img3', 'img3', 'img2', 'img4', 'img3', 'img2','img4', 'img2', 'img3', 'img3', 'img2', 'img4', 'img3', 'img2']
  })
}
</script>

<style scoped>
.cursor-grab {
  cursor: grab;
}
</style>
