

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1577 - 1589</p>
        <p>Upon receiving news of Anna's demise, Maria writes a letter to William Of Orange-Nassau asking him to undo their exile and grant them permission to move back to Cologne. They're granted this permission, and move back to Cologne that year.</p>
        <p>Jan, Maria, and their two children live a quiet live in Cologne until Jan dies in 1587. He is buried in the Saint Peter's Church in Cologne where Maria had a gravestone installed honoring his intellect, scholarly qualities, and twenty-five years of marriage without arguments.</p>
        <p>Two years after her husbands' death, Maria moves back to Antwerp with her two sons and reconverts to Catholicism.</p>
      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter2_Intro">
          <div class="callToAction">
            <button>Chapter 2</button>
          </div>
        </router-link>
      </div>

    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import { TweenMax } from 'gsap'
import { TimelineLite } from 'gsap'
import '../gsap-bonus/DrawSVGPlugin'
import Parallax from 'parallax-js'

export default {
  
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px auto;
  
  width: 100%;
  height: 100%;

  .fullWrapper{
    width: 30vw;
    justify-self: center;
    margin-top: 20vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
 
    .titleWrapper{
      justify-self: center;
      height: 80px;

      hr{
        width: 355px;
        margin-left: 0;
        color: #c4c4c4;
        background-color: #c4c4c4;
      }

      .chapter{
        text-align: center;
        margin: 0;
        margin-bottom: 10px;
        padding: 0;
        line-height: 18px;
        font-family: 'Montserrat light';
        color: #707070;
        font-size: 18px;
      }

      .title{
        margin: 0;
        padding: 0;
        width: 355px;
        line-height: 40px;
        font-family: 'Playfair Display';
        color: #707070;
        font-size: 40px;
      }
    }

    .paragraphWrapper{
      margin-top: 30px;
      color: #707070;
      text-align: justify;


      .timespan{
        font-family: 'Montserrat semibold';
        color: #b9b9b9;
      }
      p{
        font-family: 'Montserrat light';
      }
    }

  .buttonWrapper{
    margin-top: 30px;
    justify-self: center;
  }
  .callToAction, a{
    margin: 0 !important;
    padding: 0 !important;
    width: 255px !important;
    background-color: #f7f7f7;
    
  }


  }


}
</style>
