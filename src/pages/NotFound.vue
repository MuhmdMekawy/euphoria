<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue'
  export default {
    name: 'NotFound',
    components: { Navbar , Footer }
}
</script>

<template>
  <Navbar />
  <div class="notfound">
    <div class="image">
      <img src="../assets/images/notfound.png" alt="image" loading="lazy">
    </div>
    <h1>Oops! Page not found</h1>
    <p>The page you are looking for might have been removed or temporarily unavailable.</p>
    <button><a href="/home">Back to Home</a></button>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.notfound{
  text-align: center;
  margin-bottom: 50px;
  .image{
    max-width: 400px;
    margin: 0 auto;
  }
  h1{
    color: #000;
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
  }
  p{
    color: #807D7E;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 124.7%; /* 19.952px */
    letter-spacing: 0.32px;
    max-width: 400px;
    margin: 0 auto 42px;
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