import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Chapter1_Intro from './views/Chapter1_Intro.vue'
import Chapter1_FleeingAntwerp from './views/Chapter1_FleeingAntwerp.vue'
import Chapter1_Cologne from './views/Chapter1_Cologne.vue'
import Chapter1_JanAndMariaWithChildren from './views/Chapter1_JanAndMariaWithChildren'
import Chapter1_Outro from './views/Chapter1_Outro.vue'
import Chapter2_Intro from './views/Chapter2_Intro.vue'
import Chapter2_Oudenaerde from './views/Chapter2_Oudenaerde.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/timeline/Chapter1_Intro',
      name: 'Chapter1_Intro',
      component: Chapter1_Intro
    },
    {
      path: '/timeline/Chapter1_FleeingAntwerp',
      name: 'Chapter1_FleeingAntwerp',
      component: Chapter1_FleeingAntwerp
    },
    {
      path: '/timeline/Chapter1_Cologne',
      name: 'Chapter1_Cologne',
      component: Chapter1_Cologne
    },
    {
      path: '/timeline/Chapter1_JanAndMariaWithChildren',
      name: 'Chapter1_JanAndMariaWithChildren',
      component: Chapter1_JanAndMariaWithChildren
    },
    {
      path: '/timeline/Chapter1_Outro',
      name: 'Chapter1_Outro',
      component: Chapter1_Outro
    },
    {
      path: '/timeline/Chapter2_Intro',
      name: 'Chapter2_Intro',
      component: Chapter2_Intro
    },
    {
      path: '/timeline/Chapter2_Oudenaerde',
      name: 'Chapter2_Oudenaerde',
      component: Chapter2_Oudenaerde
    }

  ]
})
