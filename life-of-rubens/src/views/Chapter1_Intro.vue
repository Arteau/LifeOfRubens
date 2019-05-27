<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="titleWrapper">
        <h2 class="chapter">Chapter 1</h2>
        <h1 class="title">Peter Paul's Parents</h1>
        <hr>
      </div>
      <div class="paragraphWrapper">
        <p class="timespan">1568 - 1586</p>
        <p>Peter Paul Rubens' parents were Maria Pypelinckx and Jan Rubens. His mother came from a well-off tapestry manufacturing family, whereas his father's family was a wealthy mercantile one. In other words, Peter Paul was born into considerable wealth and stature.</p>
        <p>The second half of the sixteenth century was a time of great unrest in Antwerp, seeing as the Protestant reformation was just starting to get taken seriously by the Spanish rulers. Seriously enough to send the inquisition to the Spanish Netherlands and persecute followers of the Protestant belief, including Calvinists like Jan Rubens.</p>
        <p>In 1568 at the start of the Eighty Years' war for Dutch and Flemish independence, this persecution prompted Jan Rubens and Maria Pypelinckx to flee the city of Antwerp and seek refuge in Cologne, where Jan became the judicial advisor to Anna of Saxony, the wife of prince William of Orange-Nassau. It is this William of Orange-Nassau who started the eighty years war against the Habsburgs of Spain.</p>
      

      </div>
      <router-link to="/timeline/Chapter1_FleeingAntwerp">
        <div class="callToAction">
          <button>Next</button>
        </div>
      </router-link>
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
      }

      .chapter{
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
      }
      p{
        font-family: 'Montserrat light';
      }
    }

  .callToAction, a{
    width: 255px !important;
    justify-self: center;
    background-color: #f7f7f7;
    
  }


  }


}
</style>
