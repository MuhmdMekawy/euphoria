import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: [
    { path: '/', name : 'Home' , component: Home },
    { path: '/product/:id', name : 'Product' ,component: Product },
  //   { path: '/about', component: About },
  ]
})
// Initialize AOS
AOS.init();
createApp(App).use(router).mount('#app')
