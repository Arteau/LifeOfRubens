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
import Chapter3_Mantua from './views/Chapter3/Mantua.vue'
import Chapter3_ReturnToAntwerp from './views/Chapter3/ReturnToAntwerp.vue'
import Chapter3_WifeAndHouse from './views/Chapter3/WifeAndHouse.vue'
import Chapter3_Outro from './views/Chapter3/Outro.vue'
import Chapter4_Intro from './views/Chapter4/Intro.vue'
import Chapter4_DeMedici from './views/Chapter4/DeMedici.vue'
import Chapter4_BusiestMan from './views/Chapter4/BusiestMan.vue'
import Chapter4_TragicLoss from './views/Chapter4/TragicLoss.vue'
import Chapter4_Outro from './views/Chapter4/Outro.vue'
import Chapter5_Intro from './views/Chapter5/Intro.vue'
import Chapter5_HeleneFourment from './views/Chapter5/HeleneFourment.vue'
import Chapter5_NewfoundPassion from './views/Chapter5/NewfoundPassion.vue'
import Chapter5_HetSteen from './views/Chapter5/HetSteen.vue'
import Chapter5_Outro from './views/Chapter5/Outro.vue'

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
    },  
    {
      path: '/timeline/Chapter3/Mantua',
      name: 'Chapter3_Mantua',
      component: Chapter3_Mantua
    },  
    {
      path: '/timeline/Chapter3/ReturnToAntwerp',
      name: 'Chapter3_ReturnToAntwerp',
      component: Chapter3_ReturnToAntwerp
    },  
    {
      path: '/timeline/Chapter3/WifeAndHouse',
      name: 'Chapter3_WifeAndHouse',
      component: Chapter3_WifeAndHouse
    },  
    {
      path: '/timeline/Chapter3/Outro',
      name: 'Chapter3_Outro',
      component: Chapter3_Outro
    },  
    {
      path: '/timeline/Chapter4/Intro',
      name: 'Chapter4_Intro',
      component: Chapter4_Intro
    },  
    {
      path: '/timeline/Chapter4/DeMedici',
      name: 'Chapter4_DeMedici',
      component: Chapter4_DeMedici
    },  
    {
      path: '/timeline/Chapter4/BusiestMan',
      name: 'Chapter4_BusiestMan',
      component: Chapter4_BusiestMan
    },  
    {
      path: '/timeline/Chapter4/TragicLoss',
      name: 'Chapter4_TragicLoss',
      component: Chapter4_TragicLoss
    },  
    {
      path: '/timeline/Chapter4/Outro',
      name: 'Chapter4_Outro',
      component: Chapter4_Outro
    },  
    {
      path: '/timeline/Chapter5/Intro',
      name: 'Chapter5_Intro',
      component: Chapter5_Intro
    },  
    {
      path: '/timeline/Chapter5/HeleneFourment',
      name: 'Chapter5_HeleneFourment',
      component: Chapter5_HeleneFourment
    },  
    {
      path: '/timeline/Chapter5/NewfoundPassion',
      name: 'Chapter5_NewfoundPassion',
      component: Chapter5_NewfoundPassion
    },  
    {
      path: '/timeline/Chapter5/HetSteen',
      name: 'Chapter5_HetSteen',
      component: Chapter5_HetSteen
    },  
    {
      path: '/timeline/Chapter5/Outro',
      name: 'Chapter5_Outro',
      component: Chapter5_Outro
    }
    


  ]
})
