<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  name: 'Cart',
  data() {
    return {
      products: [
        {id : 1 , imgUrl : 'https://assets.ajio.com/medias/sys_master/root/20230602/dH6Z/6479226442f9e729d70a52b2/-1117Wx1400H-461119105-blue-MODEL.jpg' , name : 'Shirts' , category : 'Men'  , cart : 'false' ,price : '1000' , animation : 'fade-right'},
        {id : 2 , imgUrl : 'https://media.boohoo.com/i/boohoo/amm00818_light%20pink_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' , name : 'Printed T-Shirts' , category : 'Men' , cart : 'false' ,price : '1000' , animation : 'fade-up'},
        {id : 3 , imgUrl : 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/W/121271_1625413024.jpg' , name : 'Plain T-Shirt' , category : 'Men' , cart : 'false' ,price : '1030' , animation : 'fade-down'},
        {id : 4 , imgUrl : 'https://image.made-in-china.com/44f3j00HLWlqOnCEUbD/Men-Polo-Shirts-Custom-Men-Polo-T-Shirt-Men-s-T-Shirts.webp' , name : 'Polo T-Shirt' , category : 'Men' , cart : 'false' ,price : '3200' , animation : 'fade-left'},
        {id : 5 , imgUrl : 'https://www.stedman.eu/out/pictures-2023/zoom/ST4100_model.jpg' , name : 'Hoodies & Sweetshirt' , category : 'Men' , cart : 'false' ,price : '4350' , animation : 'fade-left'},
        {id : 6 , imgUrl : 'https://cdn.shopify.com/s/files/1/0608/7874/9892/products/G7Pvi3ylJ-8905566215245_8.webp?v=1686914655' , name : 'Jeans' , category : 'Men' , cart : 'false' ,price : '2000' , animation : 'fade-down'},
        {id : 7 , imgUrl : 'https://images.hellomagazine.com/horizon/original_aspect_ratio/a6469927338c-marks-and-spencer-mens-sportswear-best-z.jpg' , name : 'Activewear' , category : 'Men' , cart : 'false' ,price : '1000' , animation : 'fade-up'},
        {id : 8 , imgUrl : 'https://target.scene7.com/is/image/Target/GUEST_0dcc404f-28cb-445c-927b-0e3a9bbff53f' , name : 'Boxers' , category : 'Men' , cart : 'false' ,price : '3200' , animation : 'fade-right'},
        {id : 9 , imgUrl : 'https://media.boohoo.com/i/boohoo/gzz24242_washed%20khaki_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' , name : 'Hoodies & Sweetshirt' , category : 'Women' , cart : 'false' ,price : '1400' , animation : 'fade-right'},
        {id : 10 , imgUrl : 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/881572/1.jpg?8471' , name : 'Coats & Parkas' , category : 'Women' , cart : 'false' ,price : '1200' , animation : 'fade-up'},
        {id : 11 , imgUrl : 'https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/93/674944/1.jpg?7217' , name : 'Tees & T-Shirt' , category : 'Women' , cart : 'false' ,price : '3600' , animation : 'fade-down'},
        {id : 12 , imgUrl : 'https://img.ltwebstatic.com/gspCenter/goodsImage/2022/10/28/3999762022_1006935/36A3F7687DFE64D956994694A1141D4E_thumbnail_720x.webp' , name : 'Boxers' , category : 'Women' , cart : 'false' ,price : '100' , animation : 'fade-left'},
        {id : 13 , imgUrl : 'https://us.mavi.com/cdn/shop/files/M168837-900_700_1100_1.jpg?v=1685573015' , name : 'Black Sweatshirt' , category : 'Women' , cart : 'false' ,price : '300' , animation : 'fade-up'},
        {id : 14 , imgUrl : 'https://images.meesho.com/images/products/155282372/wvm8a_512.webp' , name : 'line Pattern Black' , category : 'Women' , cart : 'false' ,price : '8500' , animation : 'fade-down'},
        {id : 15 , imgUrl : 'https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/36/430414/1.jpg?1129' , name : 'Black Shorts' , category : 'Women' , cart : 'false' ,price : '4100' , animation : 'fade-right'},
        {id : 16 , imgUrl : 'https://babeonclothing.com/cdn/shop/products/monochromatic-sweatshirt-mockup-featuring-a-woman-sitting-in-a-studio-32819copy.jpg?v=1652512309' , name : 'Levender Hoodie' , category : 'Women' , cart : 'false' ,price : '2560' , animation : 'fade-left'},
      ],
      sizeItem : window.sessionStorage.getItem('sizeItem'),
      colorItem: window.sessionStorage.getItem('colorItem'),
      itemNumber: 1
    }
  },
  computed: {
    productId() {
      return this.$route.params.id
    },
    filterProduct() {
      return this.products.filter((f)=> f.id === Number(this.productId))
    },
    subtotalProducts() {
      return Number(this.filterProduct[0].price) * this.itemNumber
    },
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    confirmCheckout() {
      this.$router.push({ name: 'Confirmed' }),
        this.$nextTick(() => {
        window.scrollTo(0 , 0)
      })
    }
  }
}
</script>

<template>
  <!-- {{ console.log(subtotalProducts) }} -->
  <Navbar />
  <div class="cart">
    <div class="container">
      <div class="top">
        <h5>Home > <span>Cart</span></h5>
        <p>Please fill in the fields below and click place order to complete your purchase!</p>
        <p>Already registered? <a href="#">Please login here</a></p>
      </div>
      <div class="product-details" v-for="item in filterProduct" :key="item.id">
        <!-- <div class="head">
          <h4>Product Details</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>shipping</h4>
          <h4>subtotal</h4>
          <h4>action</h4>
        </div> -->
          <h1>Products</h1>
          <div class="bottom">
            <div class="conten">
              <div class="cont">
                <div class="image">
                  <img :src="filterProduct[0].imgUrl" alt="image" loading="lazy">
                </div>
                <div class="right">
                  <h4>{{ filterProduct[0].name }}</h4>
                  <h6>Color : {{ colorItem}}</h6>
                  <h6>Size : {{ sizeItem }}</h6>
                </div>
              </div>
            </div>
            <div class="conten"><h6>Price</h6>${{filterProduct[0].price}}</div>
            <div class="conten"><button @click="itemNumber !== 1 ?  itemNumber--  : ''">-</button><span>{{ itemNumber }}</span><button @click="itemNumber !== 3 ?  itemNumber++  : ''">+</button></div>
            <div class="conten shipping"><h6>Shipping</h6>FREE</div>
            <div class="conten"><h6>Subtotal</h6> ${{subtotalProducts}}</div>
            <div class="conten">
              <h6>Action</h6>
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8A33FD" class="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
              </a>
            </div>
          </div>
      </div>
    </div>
    <div class="checkout">
      <div class="container">
        <div class="content">
          <div class="left">
            <h5>Discount  Codes</h5>
            <p>Enter your coupon code if you have one</p>
            <form action="">
              <input type="text" placeholder="enter coupon">
              <button type="submit">Apply Coupon</button>
            </form>
            <button><a href="/">Continue Shopping</a></button>
          </div>
          <div class="right">
            <div class="tab">
              <h3>Sub Total</h3>
              <h4>${{ subtotalProducts }}</h4>
            </div>
            <div class="tab">
              <h3>Shipping</h3>
              <h4>$0.00</h4>
            </div>
            <div class="tab">
              <h3>Grand Total</h3>
              <h4>${{ subtotalProducts }}</h4>
            </div>
            <hr>
            <button @click="confirmCheckout">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.cart{
  .top{
    padding: 50px 0;
    h5{
      color: #807D7E;
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 0;
      span{
        color: #3C4242;
      }
    }
    p{
      color: #807D7E;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.28px;
      margin-bottom: 0;
      a{
        color: #8A33FD;
        font-weight: 600;
        transition: 0.3s;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .product-details{
    h1{
      font-size: 35px;
      padding-bottom: 20px;
      position: relative;
      width: fit-content;
      margin-bottom:30px;
      font-family: 'Phudu', cursive;
      letter-spacing: 3px;
      &::after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 50%;
        height: 3px;
        background: #3C4242;
      }
    }    
    .head , .bottom{
      display: grid;
      grid-template-columns: 2fr  repeat(5 , 1fr);
      gap: 20px;
      align-items: center;
      text-align: center;
      @media (max-width:767px){
        display: flex;
        flex-direction: column;
        gap: 25px;
        width: fit-content;
        padding:30px  30px !important;
        .conten{
          padding:0px !important;
          width: fit-content !important;
          height: fit-content !important;
        }
      }
    }
    .head{
      padding: 26px 0;
      background: #3C4242;
      color: #fff;
      h4{
        margin-bottom: 0;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
    .bottom{
      box-shadow: 0 0 5px #d4d3d3;
      border-radius: 5px;
      margin-bottom: 50px;
      .conten{
        margin-bottom: 0;
        color: #3C4242;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.36px;
        padding: 70px 0 50px;
        text-align: center;
        button{
          width: 30px;
          height: 30px;
          border-radius: 5px;
          background: #F6F6F6;
          border: none;
          + span{
            color: #3C4242;
            font-size: 12px;
            font-weight: 800;
            line-height: normal;
            margin: 0 5px;
          }
        }
        .cont{
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          text-align: start;
          .image{
            max-width: 105px;
            border-radius: 12px;
            overflow: hidden;
          }
          .right{
            h4{
              color: #3C4242;
              font-size: 18px;
              font-weight: 700;
              letter-spacing: 0.36px;
              margin-bottom: 9px;
            }
            h6{
              color: #807D7E;
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 5px;
            }
          }
        }
        &.shipping{
          color: #BEBCBD;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.36px;
        }
      }
      button{
        &.conten{
          width: 30px;
          height: 30px;
          padding: 0 !important;
          margin: 0 auto;
          border: none;
          background: transparent;
        }
      }
    }
  }
  .checkout{
    background: #F6F6F6;
    .content{
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-between;
      align-items: flex-start;
      padding: 30px 0 50px;
      @media (max-width : 767px){
        flex-wrap: wrap;
        gap: 80px;
      }
      .left{
        h5{
          color: #3C4242;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 10px;
        }
        p{
          color: #807D7E;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-bottom: 41px;
        }
        form{
          display: flex;
          flex-direction: row;
          align-items: center;
          background: #FFF;
          overflow: hidden;
          justify-content: space-between;
          gap: 0;
          input{
            width: 200px;
            height: 40px;
            padding-left: 15px;
            border: 1px solid #BEBCBD;
            border-right: 0;
            border-radius: 12px 0 0 12px;
            outline: none;
          }
          button{
            height: 40px;
            padding: 0 20px;
            color: #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            background: #8A33FD;
            border: none;
            border-radius: 0 12px 12px 0;
            transition: 0.3s;
            &:hover{
              background: transparent;
              color: #8A33FD;
              border: 1px solid #8A33FD;
            }
          } 
          +button{
            padding: 12px 0;
            border-radius: 8px;
            border: 1px solid #BEBCBD;
            background: #FFF;
            margin-top: 37px;
            overflow: hidden;
            transition: 0.3s;
            &:hover{
              background: #3C4242;
              color: #FFF;
              border: none;
            }
            a{
              padding: 10px 50px;
            }
          }
          @media (max-width : 400px){
            flex-direction: column !important;
            border: none;
            background: none;
            gap: 15px;
            input{
              border: 1px solid #d4d3d3;
              border-radius: 5px;
              width: 100%;
              +button{
                width: 100%;
                border-radius: 5px;

              }
            }
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .tab{
          display: grid;
          grid-template-columns: repeat(2 , 1fr);
          gap: 50px;
          align-items: center;
          color: #3C4242;
          h3{
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.44px;
            margin-bottom: 0;
          }
          h4{
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.44px;
            margin-bottom: 0;
          }
          &:nth-child(3){
            margin-top: 30px;
            h3{
              font-weight: 700;
            }
          }
        }
        button{
          padding: 12px 20px;
          color: #FFF;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-align: center;
          border-radius: 8px;
          background: #8A33FD;
          border: none;
          transition: 0.3s;
          &:hover{
            background: transparent;
            color: #8A33FD;
            border: 1px solid #8A33FD;
          }
        }
      }
    }
  }
}
</style>