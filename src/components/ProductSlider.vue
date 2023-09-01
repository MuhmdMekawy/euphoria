<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'ProductSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        { imageUrl: 'https://www.jiomart.com/images/product/original/469241099_lightgreen/knitted-joggers-with-drawstring-waist-model-469241099_lightgreen-0-202301082032.jpg?im=Resize=(500,630)', caption: 'Knitted Joggers' },
        { imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/6122TGgCXiL._AC_UL600_SR600,600_.jpg', caption: 'Full Sleeve' },
        { imageUrl: 'https://images.unsplash.com/photo-1516442443906-71605254b628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWN0aXZlJTIwVCUyMFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', caption: 'Active T-Shirts' },
        { imageUrl: 'https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0214579930914_010_b?$xlarge$&fit=constrain&qlt=80&wid=640', caption: 'Urban Shirts' },
        { imageUrl: 'https://www.jiomart.com/images/product/original/469241099_lightgreen/knitted-joggers-with-drawstring-waist-model-469241099_lightgreen-0-202301082032.jpg?im=Resize=(500,630)', caption: 'Knitted Joggers' },
        { imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/6122TGgCXiL._AC_UL600_SR600,600_.jpg', caption: 'Full Sleeve' },
        { imageUrl: 'https://images.unsplash.com/photo-1516442443906-71605254b628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWN0aXZlJTIwVCUyMFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', caption: 'Active T-Shirts' },
        { imageUrl: 'https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0214579930914_010_b?$xlarge$&fit=constrain&qlt=80&wid=640', caption: 'Urban Shirts' },
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