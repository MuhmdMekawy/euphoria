<template>
  <carousel 
    :itemsToShow="3"
    :wrap-around="true"
    :autoplay="1000"
    :loop="true"
    :breakpoints="breakpoints">
    <slide v-for="item in feedBacks" :key="item.id">
      <div class="feedback">
        <div class="head">
          <div class="left">
            <div class="image">
              <img :src="item.imgUrl" alt="img" loading="lazy">
            </div>
            <h3>{{ item.name }}</h3>
          </div>
          <div class="rate">
            <img src="../assets/images/72.png" alt="img" loading="lazy">
          </div>
        </div>
        <p>{{ item.paragraph }}</p>
      </div>
    </slide>

    <!-- <template #addons>
      <navigation />
      <pagination />
    </template> -->
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'FeedbackSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      feedBacks: [
        {id: 1, imgUrl: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png', rating: 'src/assets/images/71.png', name: 'Floyd Miles', paragraph: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        {id: 2, imgUrl: 'https://apk.playalandroid.com/uploads/images/202305/image-512x512-6451a190d9971.webp', name: 'Ronald Richards', paragraph: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        {id: 3, imgUrl: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg', rating: 'src/assets/images/73.png', name: 'Savannah Nguyen', paragraph: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        {id: 4, imgUrl: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png', rating: 'src/assets/images/71.png', name: 'Floyd Miles', paragraph: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        {id: 5, imgUrl: 'https://apk.playalandroid.com/uploads/images/202305/image-512x512-6451a190d9971.webp', name: 'Ronald Richards', paragraph: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
        {id: 6, imgUrl: 'https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg', rating: 'src/assets/images/73.png', name: 'Savannah Nguyen', paragraph: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."},
      ],
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: 'start',
        },
        700: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        1024: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    };
  },  
};
</script>
<style lang="scss" scoped>
.feedback{
  padding: 23px 10px;
  margin: 0 5px;
  border-radius: 10px;
  border: 1.8px solid #BEBCBD;
  background: #FFF;
  .head{
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: space-between;
    align-items: flex-start;
    .left{
      .image{
        max-width: 60px;
      }
      h3{
        margin-top: 20px;
        font-size: 22px;
        font-weight: 500;
        color: #3C4242;
      }
    }
  }
  p{
    text-align: start;
    font-size: 14px;
    font-weight: 400;
    color: #807D7E;
    margin-bottom: 0;
  }
}

</style>