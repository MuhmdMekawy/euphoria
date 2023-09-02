<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue'
export default {
  name : 'Confirmed',
  components: {
    Navbar, 
    Footer     
  }
}
</script>

<template>
<Navbar />
  <div class="confirm">
    <div class="image">
      <img data-aos-duration="1000" data-aos="fade-down" src="../assets/images/orderConfirmed.png" alt="image" loading="lazy">
    </div>
    <button><a href="/">Back to Home</a></button>
  </div>
<Footer />
</template>

<style lang="scss" scoped>
.confirm{
  text-align: center;
  margin-bottom: 50px;  
  .image{
    max-width: 800px;
    margin: 0 auto;
  }
  button{
    background: none;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    padding: 12px 0;
    transition: 0.3s;
    a{
      transition: 0.3s;
      padding: 12px 48px;
      background: #8A33FD;
      color: #fff;
    }
    &:hover{
      a{
        background: #fff;
        color: #8A33FD;
      }
      border: 1px solid #8A33FD;
    }
  }
}
</style>