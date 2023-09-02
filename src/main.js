import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import Cart from './pages/Cart.vue'
import Confirmed from './pages/Confirmed.vue'
import NotFound from './pages/NotFound.vue'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: [
    { path: '/', name : 'Home' , component: Home },
    { path: '/product/:id/', name : 'Product' ,component: Product },
    { path: '/cart/:id', name : 'Cart' , component: Cart },
    { path: '/confirmed', name: 'Confirmed', component: Confirmed },
    { path: '/:catchAll(.*)', component: NotFound },
  ]
})
// Initialize AOS
AOS.init();
createApp(App).use(router).mount('#app')
