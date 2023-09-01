<template>
  <div>
    <!-- <Navbar /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
  import './style.css'
  export default {
    name: 'App',
    data() {
      return {}
  },
  components: {
    Navbar,
    Footer
    }
  }
</script>



<style scoped>

</style>
