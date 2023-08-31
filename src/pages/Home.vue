<script>
import Navbar from '../components/Navbar.vue'
import ProductSlider from '../components/ProductSlider.vue'
import feedbackSlider from '../components/FeedbackSlider.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  data() { 
    return {
      products: [
        {id : 1 , imgUrl : 'src/assets/images/41.png' , name : 'Shirts' , category : 'men'  , animation : 'fade-right'},
        {id : 2 , imgUrl : 'src/assets/images/42.png' , name : 'Printed T-Shirts' , category : 'men' , animation : 'fade-up'},
        {id : 3 , imgUrl : 'src/assets/images/43.png' , name : 'Plain T-Shirt' , category : 'men' , animation : 'fade-down'},
        {id : 4 , imgUrl : 'src/assets/images/44.png' , name : 'Polo T-Shirt' , category : 'men' , animation : 'fade-left'},
        {id : 5 , imgUrl : 'src/assets/images/45.png' , name : 'Hoodies & Sweetshirt' , category : 'men' , animation : 'fade-left'},
        {id : 6 , imgUrl : 'src/assets/images/46.png' , name : 'Jeans' , category : 'men' , animation : 'fade-down'},
        {id : 7 , imgUrl : 'src/assets/images/47.png' , name : 'Activewear' , category : 'men' , animation : 'fade-up'},
        {id : 8 , imgUrl : 'src/assets/images/48.png' , name : 'Boxers' , category : 'men' , animation : 'fade-right'},
        {id : 9 , imgUrl : 'src/assets/images/51.png' , name : 'Hoodies & Sweetshirt' , category : 'women' , animation : 'fade-right'},
        {id : 10 , imgUrl : 'src/assets/images/52.png' , name : 'Coats & Parkas' , category : 'women' , animation : 'fade-up'},
        {id : 11 , imgUrl : 'src/assets/images/53.png' , name : 'Tees & T-Shirt' , category : 'women' , animation : 'fade-down'},
        {id : 12 , imgUrl : 'src/assets/images/54.png' , name : 'Boxers' , category : 'women' , animation : 'fade-left'},
        {id : 13 , imgUrl : 'src/assets/images/55.png' , name : 'Black Sweatshirt with ...' , category : 'women' , animation : 'fade-up'},
        {id : 14 , imgUrl : 'src/assets/images/56.png' , name : 'line Pattern Black H...' , category : 'women' , animation : 'fade-down'},
        {id : 15 , imgUrl : 'src/assets/images/57.png' , name : 'Black Shorts' , category : 'women' , animation : 'fade-right'},
        {id : 16 , imgUrl : 'src/assets/images/58.png' , name : 'Levender Hoodie with ....' , category : 'women' , animation : 'fade-left'},
      ]
    }
  },
  computed: {
    filterMenCloths() {
      return this.products.filter((f)=> f.category === 'men')
    },
    filterWomenCloths() {
      return this.products.filter((f)=> f.category === 'women')
    },
  },
  methods: {
    navigateToProduct(productId) {
      window.location.assign('/product/' + productId);
    }
  },
  components: {
    Navbar,
    ProductSlider,
    feedbackSlider,
    Footer
  }
}
</script>

<template>
  <Navbar />
  <div class="headerSlider">
    <div class="container">
      <h4  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">T-shirt / Tops</h4>
      <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">Summer <br> Value Pack</h1>
      <h4 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="3000">cool / colorful / comfy</h4>
      <button data-aos="fade-right" data-aos-duration="1000" data-aos-delay="4000" class="shopButton">Shop Now</button>
    </div>
  </div>
  <div class="new-arrival">
    <div class="container">
      <h3 class="special-Head"  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
        New Arrival
      </h3>
      <ProductSlider />
    </div>
  </div>
  <div class="big-sale">
    <div class="container">
      <h3 class="special-Head"  data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">
        Big Saving Zone
      </h3>
      <div class="content">
        <div class="top">
          <div class="cont" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000">
            <img src="../assets/images/11.png" alt="">
            <h4>Hawaiian <br> Shirts</h4>
            <p>Dress up in summer vibe</p>
            <h5>UPTO 50% OFF</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
              <path d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <button>SHOP NOW</button>
          </div>
          <div class="cont" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1000">
            <img src="../assets/images/12.png" alt="">
            <div class="badge bg-secondary">Limited Stock</div>
            <h4>Printed  <br> T-Shirt</h4>
            <p>New Designs Every Week</p>
            <h5>UPTO 40% OFF</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
              <path d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <button>SHOP NOW</button>
          </div>
          <div class="cont" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
            <img src="../assets/images/13.png" alt="">
            <h4>Hawaiian <br> Shirts</h4>
            <p>Dress up in summer vibe</p>
            <h5>UPTO 50% OFF</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
              <path d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529" stroke="#3C4242" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div class="bottom">
          <div class="cont" data-aos="fade-up-left" data-aos-duration="3000">
            <img src="../assets/images/14.png" alt="">
            <h4>Urban  <br> T-Shirt</h4>
            <p>Live In Confort</p>
            <h5>FLAT 60% OFF</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="31" viewBox="0 0 27 31" fill="none">
              <path d="M13.6864 2.04785L13.6864 27.88M25.6089 17.9446L15.0914 28.462C14.3154 29.238 13.0573 29.238 12.2813 28.462L1.76383 17.9446" stroke="#3C4242" stroke-width="2.28571" stroke-linecap="round"/>
            </svg>
            <button>SHOP NOW</button>
          </div>
          <div class="cont" data-aos="fade-up-right" data-aos-duration="3000">
            <img src="../assets/images/15.png" alt="">
            <h4>Oversized <br> Shirts</h4>
            <p>Street Style Icon</p>
            <h5>UPTO 50% OFF</h5>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
              <path d="M13.6864 1.71484L13.6864 27.547M25.6089 17.6116L15.0914 28.129C14.3154 28.905 13.0573 28.905 12.2813 28.129L1.76383 17.6115" stroke="#3C4242" stroke-width="2.28571" stroke-linecap="round"/>
            </svg>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="banners">
    <div class="text"  data-aos="zoom-in" data-aos-duration="2000">
      <img src="../assets/images/21.png" alt="img" loading="lazy">
      <h4>WE MADE YOUR EVERYDAY <br> FASHION BETTER!</h4>
      <p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
      <button>Shop Now</button>
    </div>
    <img  data-aos="fade-left" data-aos-duration="2000" src="../assets/images/22.png" alt="image" loading="lazy">
  </div>
  <div class="men">
    <div class="container">
      <h3 class="special-Head">
        Categories For Men
      </h3>
      <div class="content">
        <a href="" class="cont" :data-aos="item.animation" data-aos-duration="2000" v-for="item in filterMenCloths" :key="item.id">
          <div class="image">
            <img :src="item.imgUrl" alt="img" loading="lazy">
          </div>
          <div class="title">
            <div class="left">
              <h5>{{item.name}}</h5>
              <p>Explore Now!</p>
            </div>
            <div class="right">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z" fill="#797979"/>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="brands">
    <div class="container">
      <h1>Top Brands Deal</h1>
      <h4>Up To <span>60%</span> off on brands</h4>
      <div class="images">
        <img src="../assets/images/61.png" alt="img" loading="lazy">
        <img src="../assets/images/62.png" alt="img" loading="lazy">
        <img src="../assets/images/63.png" alt="img" loading="lazy">
        <img src="../assets/images/64.png" alt="img" loading="lazy">
        <img src="../assets/images/65.png" alt="img" loading="lazy">
      </div>
    </div>
  </div>
    <div class="women">
    <div class="container">
      <h3 class="special-Head">
        Categories For Women
      </h3>
      <div class="content">
        <a  @click="navigateToProduct(item.id)" class="cont" :data-aos="item.animation" data-aos-duration="2000" v-for="item in filterWomenCloths" :key="item.id">
          <div class="image">
            <img :src="item.imgUrl" alt="img" loading="lazy">
          </div>
          <div class="title">
            <div class="left">
              <h5>{{item.name}}</h5>
              <p>Explore Now!</p>
            </div>
            <div class="right">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M18.9571 7.71798C19.2843 7.39075 19.2843 6.86022 18.9571 6.533L13.6247 1.20059C13.2975 0.873368 12.7669 0.873368 12.4397 1.20059C12.1125 1.52781 12.1125 2.05835 12.4397 2.38557L17.1796 7.12549L12.4397 11.8654C12.1125 12.1926 12.1125 12.7232 12.4397 13.0504C12.7669 13.3776 13.2975 13.3776 13.6247 13.0504L18.9571 7.71798ZM0.489258 7.9634L18.3646 7.9634V6.28758L0.489258 6.28758L0.489258 7.9634Z" fill="#797979"/>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="feedback">
    <div class="container">
      <h3 class="special-Head">
        Feedback
      </h3>
      <feedbackSlider />
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
  .headerSlider{
    padding: 100px 0 ;
    background : url('../assets/images/headerSlider1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;
    font-family: 'Phudu', cursive;
    position: relative;
    @media (max-width: 380px){
      background-position: 56%;
    }
    h4{
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 40px;
      letter-spacing: 3px;
      @media (max-width : 567px){
        font-size: 25px;
        margin-bottom: 20px;
        letter-spacing: 0;
      }
    }
    h1{
      font-size: 80px;
      font-weight: 800;
      margin-bottom: 40px;
      @media (max-width : 567px){
        font-size: 50px;
        margin-bottom: 20px;
      }
    }
    .shopButton{
      padding: 16px 72px;
      background: #fff;
      border: none;
      font-size: 24px;
      font-weight: 400;
      color: #3C4242;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      z-index: 3;
      &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0%;
        height: 100%;
        background: #034797;
        z-index: -1;
        transition: 0.3s;
      }
      &:hover{
        color: #fff;
        &::after{
          width: 100%;
        }
      }
    }
  }
  .new-arrival{
    padding: 100px 0;
    @media (max-width : 767px){
      padding: 70px 0;
    }
  }
  .big-sale{
    padding: 40px 0;
    @media (max-width : 767px){
      padding: 20px 0;
    }
    .content{
      display: flex;
      flex-direction: column;
      gap: 20px;
      .top{
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        gap: 20px;
        align-items: center;
        @media (max-width : 767px){
          grid-template-columns: repeat(1 , 1fr);
        }
        .cont{
          &:nth-child(2) {
          direction: rtl;
          padding-top: 10px;
          h4{
            margin-top: 20px;
          }
        }
          &:nth-child(3){
            direction: rtl;
            color: #3C4242;
            button{
              background: transparent;
              border: 1px solid #3C4242;
              transition: 0.3s;
              &:hover{
                background: #3C4242;
                color: #fff;
              }
            }
          }
        }
      }
      .bottom{
        display: grid;
        grid-template-columns: repeat(2 , 1fr);
        gap: 20px;
        align-items: center;
        .cont{
          &:nth-child(2){
            p{
              margin-right: 30%;
            }
            h5{
              margin-right: 28%;
            }
            @media (max-width :400px){
              p , h5{
                margin-right: 0;
              }
            }
          }
        }
        @media (max-width : 767px){
          grid-template-columns: repeat(1 , 1fr);
        }
        .cont{
          direction: rtl;
          color: #3C4242;
          text-align: center;
          h4 , p , button{
            margin-right: 28%;
          }
          h5{
            margin-right: 24%;
          }
          svg{
            margin-right: 35%;
          }
          @media (max-width : 400px){
            h4 , p ,h5 , button , svg{
              margin-right: 0;
            }
          }
          button{
            background: transparent;
            border: 1px solid #3C4242;
            transition: 0.3s;
            &:hover{
              background: #3C4242;
              color: #fff;
            }
          }
        }
      }
      .cont{
        position: relative;
        z-index: 3;
        padding: 60px 20px;
        border-radius: 12px;
        overflow: hidden;
        color: #FFF;
        display: flex;
        flex-direction: column;
        transition: 0.3s;
        &:hover{
          svg{
            transform: translateY(20px);
          }
        }
        img{
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
        }
        .badge{
          max-width: 150px !important;
          padding: 10px !important;
          border-radius: 4px;
          background: #3C4242 !important;
        }
        h4{
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          margin-bottom: 10px;
          font-family: 'Phudu', cursive;
          width: fit-content;
        }
        p{
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 10px;
          width: fit-content;
        }
        h5{
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 30px;
          width: fit-content;
        }
        svg{
          width: 24px;
          transition: 0.3s;
        }
        button{
          margin-top: 40px;
          padding: 8px 30px;
          width: fit-content;
          font-size: 12px;
          border-radius: 4px;
          border: 1px solid #FFF;
          transition: 0.3s;
          &:hover{
            background: transparent;
            color: #fff;
          }
        }
      }
    }
  }
  .banners{
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    max-height: 604px;
    overflow: hidden !important;
    margin: 50px 0 70px;
    .text{
      position: relative;
      z-index: 3;
      color: #fff;
      padding: 180px 54px 123px;
      img{
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
      h4{
        font-size: 34px;
        font-weight: 800;
        margin-bottom: 30px;
        font-family: 'Phudu', cursive;
      }
      p{
        max-width: 451px;
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 50px;
      }
      button{
        padding: 12px 44px;
        border: none;
        border-radius: 8px;
        background: #fff;
        transition: 0.3s;
        &:hover{
          background: transparent;
          color: #FFF;
          border: 1px solid #fff;
        }
      }
      @media (max-width : 991px){
        padding: 100px 30px ;
        h4{
          font-size: 25px;
        }
        p{
          font-size: 14px;
        }
      }
      @media (max-width : 676px){
        padding: 70px 20px ;
      }
    }
    @media (max-width : 676px){
      grid-template-columns: repeat(1 , 1fr);
      text-align: center;
      img{
        display: none;
      }
      .text{
        p{
          margin-right:auto;
          margin-left:auto;
        }
        img{
          display: initial;
        }
      }
    }
  }
  .men , .women{
    padding: 70px 0;
    @media (max-width:991px){
      padding: 40px 0;
    }
    @media (max-width:500px){
      padding: 20px 0;
    }
    .special-Head{
      @media (max-width : 500px){
        font-size: 30px !important;
      }
    }
    .content{
      display: grid;
      grid-template-columns: repeat(4 , 1fr);
      gap: 30px;
      align-items: center;
      .cont{
        cursor: pointer;
        .image{
          margin-bottom: 20px;
        }
        .title{
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          .left{
            h5{
              font-size: 18px;
              font-weight: 800;
              color: #2A2F2F;
              margin-bottom: 10px;
            }
            p{
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 0;
              color: #7F7F7F;
            }
          }
          .right{
            svg{
              transition: 0.3s;
            }
          }
        }
        &:hover{
          .title{
            .right{
              svg{
                transform: translateX(10px);
              }
            }
          }
        }
      }
      @media (max-width : 767px){
        grid-template-columns: repeat(3 , 1fr);
      }
      @media (max-width : 676px){
        grid-template-columns: repeat(2 , 1fr);
      }
      @media (max-width : 400px){
        grid-template-columns: repeat(1 , 1fr);
        .cont{
          max-width: 250px;
          margin: 0 auto;
        }
      }
    }
  }
  .brands{
    background: #3C4242;
    border-radius: 12px;
    overflow: hidden;
    padding: 43px 0 60px;
    text-align: center;
    color: #fff;
    h1{
      font-size: 50px;
      font-weight: 800;
      font-family: 'Phudu', cursive;
      margin-bottom: 25px;
      letter-spacing: 5px;
    }
    h4{
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 67px;
      span{
        font-weight: 700;
        color: #FBD103;;
      }
    }
    .images{
      display: flex;
      flex-direction: row;
      gap: 25px;
      align-items: center;
      justify-content: center;
      img{
        max-width: 180px;
      }
      @media (max-width : 991px){
        flex-wrap: wrap;
      }
    }
  }
  .feedback{
    padding: 70px 0;
  }
</style>