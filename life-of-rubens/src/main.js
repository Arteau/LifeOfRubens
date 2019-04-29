import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueMouseParallax from 'vue-mouse-parallax'

// Vue.use(VueMouseParallax)
// import TweenMax from "gsap/TweenMax.js";
// import DrawSVGPlugin from './gsap-bonus/DrawSVGPlugin.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



