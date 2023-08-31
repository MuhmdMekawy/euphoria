<template>
  <div>
    <router-view ></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import Home from './pages/Home.vue'
  import Product from './pages/Product.vue'
  import './style.css'
  export default {
    name: 'App',
    data() {
      return {
        
      }
    },
    // components: {
    //   Home,
    //   Product
    // }
  }
</script>



<style scoped>

</style>
