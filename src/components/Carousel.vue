<template>
  <b-carousel
    style="text-shadow: 1px 1px 2px #333;"
    controls
    indicators
    fade
    :interval="4000"
    img-width="4032"
    img-height="1701"
    v-model="slide"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- Text slides with image -->
    <b-carousel-slide
      caption="Hey!"
      :img-src="require('../assets/images/carousel-iceland.jpg')"
    >
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 1,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style lang="less" scoped>
// .carousel {
//   .carousel-inner {
//     .carousel-item {
//       // max-height: 600px;
//     }
//   }
// }
</style>
