import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import { Carousel, CarouselItem } from 'element-ui';
import App from './App.vue'

Vue.use(VueMaterial)
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
