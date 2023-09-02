<script>
import DescTab from '../components/DescTab.vue';
import CommentTab from '../components/CommentTab.vue'
import QuestionsTab from '../components/QuestionsTab.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Product',
  data() {
    return {
      products: [
        {id : 1 , imgUrl : 'https://assets.ajio.com/medias/sys_master/root/20230602/dH6Z/6479226442f9e729d70a52b2/-1117Wx1400H-461119105-blue-MODEL.jpg' , name : 'Shirts' , category : 'Men'  , cart : 'false' ,animation : 'fade-right'},
        {id : 2 , imgUrl : 'https://media.boohoo.com/i/boohoo/amm00818_light%20pink_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' , name : 'Printed T-Shirts' , category : 'Men' , cart : 'false' ,animation : 'fade-up'},
        {id : 3 , imgUrl : 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/W/121271_1625413024.jpg' , name : 'Plain T-Shirt' , category : 'Men' , cart : 'false' ,animation : 'fade-down'},
        {id : 4 , imgUrl : 'https://image.made-in-china.com/44f3j00HLWlqOnCEUbD/Men-Polo-Shirts-Custom-Men-Polo-T-Shirt-Men-s-T-Shirts.webp' , name : 'Polo T-Shirt' , category : 'Men' , cart : 'false' ,animation : 'fade-left'},
        {id : 5 , imgUrl : 'https://www.stedman.eu/out/pictures-2023/zoom/ST4100_model.jpg' , name : 'Hoodies & Sweetshirt' , category : 'Men' , cart : 'false' ,animation : 'fade-left'},
        {id : 6 , imgUrl : 'https://cdn.shopify.com/s/files/1/0608/7874/9892/products/G7Pvi3ylJ-8905566215245_8.webp?v=1686914655' , name : 'Jeans' , category : 'Men' , cart : 'false' ,animation : 'fade-down'},
        {id : 7 , imgUrl : 'https://images.hellomagazine.com/horizon/original_aspect_ratio/a6469927338c-marks-and-spencer-mens-sportswear-best-z.jpg' , name : 'Activewear' , category : 'Men' , cart : 'false' ,animation : 'fade-up'},
        {id : 8 , imgUrl : 'https://target.scene7.com/is/image/Target/GUEST_0dcc404f-28cb-445c-927b-0e3a9bbff53f' , name : 'Boxers' , category : 'Men' , cart : 'false' ,animation : 'fade-right'},
        {id : 9 , imgUrl : 'https://media.boohoo.com/i/boohoo/gzz24242_washed%20khaki_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' , name : 'Hoodies & Sweetshirt' , category : 'Women' , cart : 'false' ,animation : 'fade-right'},
        {id : 10 , imgUrl : 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/881572/1.jpg?8471' , name : 'Coats & Parkas' , category : 'Women' , cart : 'false' ,animation : 'fade-up'},
        {id : 11 , imgUrl : 'https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/674944/1.jpg?7217' , name : 'Tees & T-Shirt' , category : 'Women' , cart : 'false' ,animation : 'fade-down'},
        {id : 12 , imgUrl : 'https://img.ltwebstatic.com/gspCenter/goodsImage/2022/10/28/3999762022_1006935/36A3F7687DFE64D956994694A1141D4E_thumbnail_720x.webp' , name : 'Boxers' , category : 'Women' , cart : 'false' ,animation : 'fade-left'},
        {id : 13 , imgUrl : 'https://us.mavi.com/cdn/shop/files/M168837-900_700_1100_1.jpg?v=1685573015' , name : 'Black Sweatshirt' , category : 'Women' , cart : 'false' ,animation : 'fade-up'},
        {id : 14 , imgUrl : 'https://images.meesho.com/images/products/155282372/wvm8a_512.webp' , name : 'line Pattern Black' , category : 'Women' , cart : 'false' ,animation : 'fade-down'},
        {id : 15 , imgUrl : 'https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/430414/1.jpg?1129' , name : 'Black Shorts' , category : 'Women' , cart : 'false' ,animation : 'fade-right'},
        {id : 16 , imgUrl : 'https://babeonclothing.com/cdn/shop/products/monochromatic-sweatshirt-mockup-featuring-a-woman-sitting-in-a-studio-32819copy.jpg?v=1652512309' , name : 'Levender Hoodie' , category : 'Women' , cart : 'false' ,animation : 'fade-left'},
      ],
      sizeItem: 'L',
      colorItem: 'red',
      categoryItem: '',
      activeTab: 'DescTab',
      showPopup :'false'
    }
  },
  components: {
    Navbar,
    DescTab,
    CommentTab,
    QuestionsTab,
    Navbar,
    Footer
},
  computed: {
    userId() {
      return Number(this.$route.params.id)
    },
    filterProduct() {
      return this.products.filter((f) => f.id === this.userId);
    },
    filterGategory() {
      return this.categoryItem = this.products.filter((f) => f.id === this.userId);
    },
  },
  methods: {
    cart(productId) {
      window.sessionStorage.setItem('sizeItem' , this.sizeItem)
      window.sessionStorage.setItem('colorItem' , this.colorItem)
      this.$router.push({ name: 'Cart', params : {id : productId} }),
      this.$nextTick(() => {
        window.scrollTo(0 , 0)
      })
    }
  }
}
</script>

<template>
  <div class="popup" :style="showPopup === true ? 'display : block' : 'display : none'">
    <button class="close"  @click="showPopup = false">X</button>
    <video src="../assets/video/169951(720p).mp4" controls autoplay loop muted></video>
  </div>
  <Navbar :style="showPopup === true ? 'filter : blur(5px)' : 'filter : initial'"/>
  <div class="product" v-for="item in filterProduct" :key="item.id" :style="showPopup === true ? 'filter : blur(5px)' : 'filter : initial'">
    <div class="container">
      <div class="content">
        <div class="image">
          <img :src="item.imgUrl" alt="image" loading="lazy">
        </div>
        <div class="text">
          <p>Shop > {{ item.category }}</p>
          <h1>{{ item.name }}</h1>
          <div class="rating">
            <div class="stars">
              <img src="../assets/images/Frame10.png" alt="stars" loading="lazy">
              <small>3.5</small>
            </div>
            <div class="comments">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <p>120 comment</p>
            </div>
          </div>
          <div class="size">
            <h4>Select Size <span>Size Guide</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M1 7H14M9 1L14.2929 6.29289C14.6834 6.68342 14.6834 7.31658 14.2929 7.70711L9 13" stroke="#807D7E" stroke-width="1.8" stroke-linecap="round"/>
              </svg>
            </h4>
            <div class="buttons">
              <button @click="sizeItem = 'XS'" :class="sizeItem === 'XS' ? 'active' : ''">XS</button>
              <button @click="sizeItem = 'S'" :class="sizeItem === 'S' ? 'active' : ''">S</button>
              <button @click="sizeItem = 'M'" :class="sizeItem === 'M' ? 'active' : ''">M</button>
              <button @click="sizeItem = 'L'" :class="sizeItem === 'L' ? 'active' : ''">L</button>
              <button @click="sizeItem = 'XL'" :class="sizeItem === 'XL' ? 'active' : ''">XL</button>
            </div>
          </div>
          <div class="colours">
            <h3>Colours Available </h3>
            <div class="colors">
              <button @click="colorItem = 'yellow'" :class="colorItem === 'yellow' ? 'active' : ''"></button>
              <button @click="colorItem = 'pink'" :class="colorItem === 'pink' ? 'active' : ''"></button>
              <button @click="colorItem = 'red'" :class="colorItem === 'red' ? 'active' : ''"></button>
              <button @click="colorItem = 'black'" :class="colorItem === 'black' ? 'active' : ''"></button>
            </div>
          </div>
          <div class="cart">
            <button @click="cart(item.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              Add to cart
            </button>
            <button>$63.00</button>
          </div>
          <hr>
          <div class="icons">
            <div class="cont">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="22" fill="#F6F6F6"/>
                <path d="M15 18.75H30M18 26.25H21M24 26.25H27M17.4 30H27.6C28.4401 30 28.8601 30 29.181 29.7956C29.4632 29.6159 29.6927 29.329 29.8365 28.9762C30 28.5751 30 28.0501 30 27V18C30 16.9499 30 16.4249 29.8365 16.0238C29.6927 15.671 29.4632 15.3841 29.181 15.2044C28.8601 15 28.4401 15 27.6 15H17.4C16.5599 15 16.1399 15 15.819 15.2044C15.5368 15.3841 15.3073 15.671 15.1635 16.0238C15 16.4249 15 16.9499 15 18V27C15 28.0501 15 28.5751 15.1635 28.9762C15.3073 29.329 15.5368 29.6159 15.819 29.7956C16.1399 30 16.5599 30 17.4 30Z" stroke="#3C4242" stroke-width="1.1" stroke-linecap="round"/>
              </svg>
              <h5>Secure payment</h5>
            </div>
            <div class="cont">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="22" fill="#F6F6F6"/>
                <path d="M25.6349 30H18.3651C17.3613 30 16.5476 29.2007 16.5476 28.2147V21.5796C16.5476 21.0634 15.9122 20.8049 15.5406 21.1699C15.2014 21.5032 14.6205 21.3203 14.5417 20.8555L14.0248 17.8091C13.9021 17.0857 14.2422 16.3621 14.8825 15.9847L18.1965 14.0315C18.293 13.9746 18.4175 13.9966 18.4878 14.0829C20.2884 16.2938 23.7116 16.2938 25.5122 14.0829C25.5825 13.9966 25.707 13.9746 25.8035 14.0315L29.1175 15.9847C29.7578 16.3621 30.0979 17.0857 29.9752 17.8091L29.4583 20.8555C29.3795 21.3203 28.7986 21.5032 28.4594 21.1699C28.0878 20.8049 27.4524 21.0634 27.4524 21.5796V28.2147C27.4524 29.2007 26.6387 30 25.6349 30Z" stroke="#3C4242" stroke-width="1.1"/>
              </svg>
              <h5>Size & Fit</h5>
            </div>
            <div class="cont">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="22" fill="#F6F6F6"/>
                <path d="M23.8 26.6667V15.4667C23.8 15.2089 23.5985 15 23.35 15H13.45C13.2015 15 13 15.2089 13 15.4667V26.6667C13 26.9244 13.2015 27.1333 13.45 27.1333H14.8M23.8 26.6667C23.8 26.9244 23.5985 27.1333 23.35 27.1333H18.4M23.8 26.6667V18.2667C23.8 18.0089 24.0015 17.8 24.25 17.8H27.2136C27.333 17.8 27.4474 17.8492 27.5318 17.9367L30.8682 21.3967C30.9526 21.4842 31 21.6029 31 21.7266V26.6667C31 26.9244 30.7985 27.1333 30.55 27.1333H29.2M23.8 26.6667C23.8 26.9244 24.0015 27.1333 24.25 27.1333H25.6M14.8 27.1333C14.8 28.1643 15.6059 29 16.6 29C17.5941 29 18.4 28.1643 18.4 27.1333M14.8 27.1333C14.8 26.1024 15.6059 25.2667 16.6 25.2667C17.5941 25.2667 18.4 26.1024 18.4 27.1333M25.6 27.1333C25.6 28.1643 26.4059 29 27.4 29C28.3941 29 29.2 28.1643 29.2 27.1333M25.6 27.1333C25.6 26.1024 26.4059 25.2667 27.4 25.2667C28.3941 25.2667 29.2 26.1024 29.2 27.1333" stroke="#3C4242" stroke-width="1.1"/>
              </svg>
              <h5>Free shipping</h5>
            </div>
            <div class="cont">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="22" fill="#F6F6F6"/>
                <path d="M18.4444 28.2222C18.4444 29.2041 17.6485 30 16.6667 30C15.6848 30 14.8889 29.2041 14.8889 28.2222C14.8889 27.2404 15.6848 26.4444 16.6667 26.4444C17.6485 26.4444 18.4444 27.2404 18.4444 28.2222ZM18.4444 28.2222H25.5556C26.5374 28.2222 27.3333 27.4263 27.3333 26.4444V22.8889M25.5556 15.7778C25.5556 16.7596 26.3515 17.5556 27.3333 17.5556C28.3152 17.5556 29.1111 16.7596 29.1111 15.7778C29.1111 14.7959 28.3152 14 27.3333 14C26.3515 14 25.5556 14.7959 25.5556 15.7778ZM25.5556 15.7778H18.4444C17.4626 15.7778 16.6667 16.5737 16.6667 17.5556V21.1111M30 24.6667L27.6476 22.1398C27.474 21.9534 27.1926 21.9534 27.0191 22.1398L24.6667 24.6667M19.3333 19.3333L16.9809 21.8602C16.8074 22.0466 16.526 22.0466 16.3524 21.8602L14 19.3333" stroke="#3C4242" stroke-width="1.1" stroke-linecap="round"/>
              </svg>
              <h5>Free Shipping & Returns</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="product-description">
        <h3 class="special-Head">Product Description</h3>
          <div class="content">
            <div class="left">
              <div class="tabs">
                <button @click="activeTab = 'DescTab'"  :class="activeTab === 'DescTab' ? 'active' : ''">Description</button>
                <button @click="activeTab = 'CommentTab'" :class="activeTab === 'CommentTab' ? 'active' : ''">User comments <span>0</span></button>
                <button @click="activeTab = 'QuestionsTab'" :class="activeTab === 'QuestionsTab' ? 'active' : ''">Question & Answer <span>0</span></button>
              </div>
              <div class="bottom">
                <component :is="activeTab" />
              </div>
            </div>
            <div class="image">
              <img :src="item.imgUrl" alt="image" loading="lazy">
              <div class="icon" @click="showPopup = true">
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                  <circle cx="26.5" cy="26.5" r="26.5" fill="#F6F6F6"/>
                  <path d="M34.0846 22.1699C37.4179 24.0944 37.4179 28.9056 34.0846 30.8301L26.4577 35.2336C23.1243 37.1581 18.9577 34.7524 18.9577 30.9034L18.9577 22.0966C18.9577 18.2476 23.1243 15.842 26.4577 17.7665L34.0846 22.1699Z" fill="#3C4242"/>
                </svg>
              </div>
              <p>{{ item.name }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  <Footer :style="showPopup === true ? 'filter : blur(5px)' : 'filter : initial'"/>
</template>

<style lang="scss" scoped>
.popup{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #0a0a0c;
  color: #3C4242;
  padding: 5px;
  border-radius: 3px;
  z-index: 99;
  box-shadow: 0 0 2px #333;
  max-width: 991px;
  width: 100%;
  video{
    // max-width: 500px;
    width: 100%;
    height: 100%;
  }
  .close{
    width: 30px;
    height: 30px;
    border: none;
    margin-left: auto;
    position: absolute;
    right: 12px;
    top: 12px;
    border-radius: 5px;
    transition: 0.3s;
    z-index: 9;
    &:hover{
      background: #333;
      color: #fff;
      border: 1px solid #333;
    }
  }
}
.product{
  @media (max-width:991px){
    .special-Head{
      margin-bottom: 30px !important;
    }
  }
  .content{
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    gap: 30px;
    align-items: flex-start;
    justify-content: center;
    .image{
      max-width: 500px;
      margin-left: auto;
      height: 100%;
      width: 100%;
    }
    .text{
      padding-top: 30px;
      p{
        color: #807D7E;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        margin-bottom: 35px;
      }
      h1{
        color: #3C4242;
        font-family: 'Phudu', cursive;
        font-size: 34px;
        letter-spacing: 5px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 35px;
      }
      .rating{
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;
        color: #807D7E;
        margin-bottom: 35px;
        @media (max-width : 991px){
          flex-direction: column-reverse;
          align-items: flex-start;
        }
        .stars{
          display: flex;
          flex-direction: row;
          gap: 15px;
          img{
            max-width: 150px;
          }
          small{
            font-size: 18px;
            font-weight: 500;
          }
        }
        .comments{
          display: flex;
          flex-direction: row;
          gap: 8px;
          align-items: center;
          p{
            margin-bottom: 0;
            font-size: 18px;
            font-weight: 500;
          }
        }
      }
      .size{
        margin-bottom: 35px;
        h4{
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
          color: #3F4646;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 25px;
          span{
            font-size: 18px;
            font-weight: 500;
            color: #807D7E;
            margin-left: 5px;
          }
        }
        .buttons{
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          button{
            width: 40px;
            height: 40px;
            border-radius: 12px;
            border: 1.5px solid #BEBCBD;
            background: #fff;
            font-size: 14px;
            font-weight: 500;
            color: #3C4242;
            transition: 0.3s;
            &:hover{
              background: #3C4242;
              color: #fff;
              border: none;
            }
            &.active{
              background: #3C4242;
              color: #fff;
              border: none;
            }
          }
        }
      }
      .colours{
        margin-bottom: 35px;
        h3{
          color: #3F4646;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 30px;
        }
        .colors{
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          button{
            width: 22px;
            height: 22px;
            border-radius: 50%;
            border: none;
            &:nth-child(1){
              background: #EDD146;
            }
            &:nth-child(2){
              background: #EB84B0;
            }
            &:nth-child(3){
              background: #9C1F35;
            }
            &:nth-child(4){
              background: #3C4242;
            }
            &.active{
              outline: 2px solid #3C4242;
              border: 3px solid #e9e9e9;
            }
          }
        }
      }
      .cart{
        display:flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        @media (max-width : 991px){
          flex-direction: column-reverse;
          align-items: flex-start;
        }
        button{
          border: none;
          &:nth-child(1){
            color: #fff;
            display: flex;
            flex-direction: row;
            gap: 12px;
            align-items: center;
            font-size: 18px;
            font-weight: 600;
            padding: 12px 40px;
            border-radius: 8px;
            background: #8A33FD;
            transition: 0.3s;
            &:hover{
              background: #fff;
              color: #8A33FD;
              border: 1px solid #8A33FD;
            }
          }
          &:nth-child(2){
            font-size: 18px;
            font-weight: 600;
            padding: 12px 40px;
            border-radius: 8px;
            background: #fff;
            border-radius: 8px;
            border: 1px solid #3C4242;
            cursor: initial;
          }
        }
      }
      hr{
        margin: 37px 0 40px !important;
      }
      .icons{
        display: grid;
        grid-template-columns: repeat(2 , 1fr);
        justify-content: space-between;
        gap: 20px;
        align-items: center;
        @media (max-width: 500px){
          grid-template-columns: repeat(1 , 1fr);
        }
        .cont{
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
          svg{
            width: 44px;
            height: 44px;
          }
          h5{
            margin-bottom: 0;
            font-size: 18px;
            font-weight: 500;
            @media (max-width: 991px){
              font-size: 14px;
            }
          }
        }
      }
    }
    @media (max-width: 767px){
      grid-template-columns: repeat(1 , 1fr);
      .image{
        max-width: 350px !important;
        margin: 0 auto;
      }
    }
  }
  .product-description{
    padding: 100px 0;
    .content{
      display: grid;
      grid-template-columns: 65% 29%;
      justify-content: space-between;
      align-items: flex-start;
      gap: 30px;
      @media (max-width : 991px){
        display: flex;
        flex-direction: column-reverse;
        gap: 40px;
        .image{
          margin: 0  auto 0 0 !important;
        }
      }
      .left{
        .tabs{
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          @media (max-width : 767px){
            flex-direction: column;
            align-items: flex-start;
          }
          button{
            margin-bottom: 0;
            font-size: 18px;
            font-weight: 500;
            color: #3C4242;
            border: none;
            background: transparent;
            padding-bottom: 15px;
            &:nth-child(2){
              span{
                margin-left: 15px;
                padding: 0px 5px;
                background: #8A33FD;
                color: #fff;
                border-radius: 4px;
              }
            }
            &:nth-child(3){
              span{
                margin-left: 15px;
                padding: 0px 8px;
                background: #3F4646;
                color: #fff;
                border-radius: 4px;
              }
            }
            &.active{
              position: relative;
              &::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 50px;
                height: 2px;
                background: #3C4242;
              }
            }
          }
        }
      }
      .image{
        max-width: 350px;
        position: relative;
        overflow: hidden;
        border-radius: 16px;
        .icon{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50% , -50%);
          z-index: 3;
          cursor: pointer;
        }
        p{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 20px;
          z-index: 3;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 0;
          color: #fff;
          font-family: 'Phudu', cursive;
        }
        &::after{
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: #00000091;
          z-index: 1;
        }
      }
    }

  }
}
</style>