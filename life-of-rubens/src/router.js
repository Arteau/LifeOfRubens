import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Chapter1_Intro from './views/Chapter1/Intro.vue'
import Chapter1_FleeingAntwerp from './views/Chapter1/FleeingAntwerp.vue'
import Chapter1_Cologne from './views/Chapter1/Cologne.vue'
import Chapter1_JanAndMariaWithChildren from './views/Chapter1/JanAndMariaWithChildren'
import Chapter1_Outro from './views/Chapter1/Outro.vue'
import Chapter2_Intro from './views/Chapter2/Intro.vue'
import Chapter2_ArtisticTalent from './views/Chapter2/ArtisticTalent.vue'

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
      path: '/timeline/Chapter1/Intro',
      name: 'Chapter1_Intro',
      component: Chapter1_Intro
    },
    {
      path: '/timeline/Chapter1/FleeingAntwerp',
      name: 'Chapter1_FleeingAntwerp',
      component: Chapter1_FleeingAntwerp
    },
    {
      path: '/timeline/Chapter1/Cologne',
      name: 'Chapter1_Cologne',
      component: Chapter1_Cologne
    },
    {
      path: '/timeline/Chapter1/JanAndMariaWithChildren',
      name: 'Chapter1_JanAndMariaWithChildren',
      component: Chapter1_JanAndMariaWithChildren
    },
    {
      path: '/timeline/Chapter1/Outro',
      name: 'Chapter1_Outro',
      component: Chapter1_Outro
    },
    {
      path: '/timeline/Chapter2/Intro',
      name: 'Chapter2_Intro',
      component: Chapter2_Intro
    },
    {
      path: '/timeline/Chapter2/ArtisticTalent',
      name: 'Chapter2_ArtisticTalent',
      component: Chapter2_ArtisticTalent
    }

  ]
})
