<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { imageUrl: '/src/assets/images/Img1.png', caption: 'Knitted Joggers' },
        { imageUrl: '/src/assets/images/2.png', caption: 'Full Sleeve' },
        { imageUrl: '/src/assets/images/3.png', caption: 'Active T-Shirts' },
        { imageUrl: '/src/assets/images/4.png', caption: 'Urban Shirts' },
        { imageUrl: '/src/assets/images/1.png', caption: 'Knitted Joggers' },
        { imageUrl: '/src/assets/images/2.png', caption: 'Full Sleeve' },
        { imageUrl: '/src/assets/images/3.png', caption: 'Active T-Shirts' },
        { imageUrl: '/src/assets/images/4.png', caption: 'Urban Shirts' },
      ],
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 320px and up
        320: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // 500px and up
        400: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        // 700px and up
        800: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
      },
    }
  }
}
</script>

<template>
  <div class="container">
    <Carousel
      :slides="slides"
      :itemsToShow="4"
      :breakpoints="breakpoints"
      :wrap-around="true"
      :autoplay="2000"
      :loop="true"
      class="carousel">

      <slide v-for="slide in slides" :key="slide.imageUrl" class="slider">
        <img :src="slide.imageUrl"  loading="lazy"/>
        <p class="caption">{{ slide.caption }}</p>
      </slide>

    </Carousel>
  </div>
</template>


<style lang="scss" scoped> 
.carousel{
  .slider{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding: 0 5px !important;
    img{
      border-radius: 12px !important;
    }
    p{
      font-size: 20px;
      font-weight: 700;
      margin: 0;
    }
  }
}

</style>