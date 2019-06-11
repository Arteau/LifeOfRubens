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
import Chapter2_Oudenaerde from './views/Chapter2/Oudenaerde.vue'
import Chapter2_Apprenticeships from './views/Chapter2/Apprenticeships.vue'
import Chapter2_MasterPainter from './views/Chapter2/MasterPainter.vue'
import Chapter2_Outro from './views/Chapter2/Outro.vue'
import Chapter3_Intro from './views/Chapter3/Intro.vue'

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
      path: '/timeline/Chapter2/Oudenaerde',
      name: 'Chapter2_Oudenaerde',
      component: Chapter2_Oudenaerde
    },
    {
      path: '/timeline/Chapter2/Apprenticeships',
      name: 'Chapter2_Apprenticeships',
      component: Chapter2_Apprenticeships
    },  
    {
      path: '/timeline/Chapter2/MasterPainter',
      name: 'Chapter2_MasterPainter',
      component: Chapter2_MasterPainter
    },  
    {
      path: '/timeline/Chapter2/Outro',
      name: 'Chapter2_Outro',
      component: Chapter2_Outro
    },  
    {
      path: '/timeline/Chapter3/Intro',
      name: 'Chapter3_Intro',
      component: Chapter3_Intro
    }


  ]
})
