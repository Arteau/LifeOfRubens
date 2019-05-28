

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1568 - 1586</p>
        <p>In Cologne Jan Rubens becomes the judicial advisor to princess Anna of Saxony, the wife of prince William of Orange-Nassau. It is this William of Orange-Nassau who started the Eighty Years' War for Dutch and Flemish independence against the Habsburgs of Spain.</p>
        <p>Princess Anna has need of Jan's services as a lawyer because she is displeased with her marriage, and wants to reclaim her dowry. Jan and Princess Anna have an affair, which is found out by William of Orange-Nassau relatively quickly. By the time their affair is discovered however, Anna of Saxony is pregnant with Jan's child.</p>
        <p>Because of this inexcusable offense, Jan is convicted of adultery and might be sentenced to die. Afraid for her husband's life and in spite of his unfaithfulness towards her, Maria Pypelinckx writes letters to the Orange-Nassau family pleading to let him go free. It is because of her bravery that Jan Rubens is allowed to live, but banished to the town of Siegen.</p>
        <p>In Siegen Jan and Maria live a quiet life together, as Jan is forbidden to practice law as long as Anna of Saxony is still alive. It is here, in Siegen, that their two sons Philip and Peter Paul are born.</p>
      

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter1_JanAndMariaWithChildren">
          <div class="callToAction">
            <button>Next</button>
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
