import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HomeIllustration from './components/HomeIllustration.vue'

Vue.component('home-illustration', HomeIllustration)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



