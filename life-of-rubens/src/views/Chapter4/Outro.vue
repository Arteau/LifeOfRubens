

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1628 - 1629</p>
        <p>In 1628 he travels to Spain, to the court of King Philip IV the son of Philip III whom Rubens visited in name of Duke Vincenzo back in Mantua. Philip IV is a young king who recently married the daughter of Marie De’ Medici. His minister Olivares tries to keep the King and his wife apart as best he can however, in order not to lose his influence over him. It goes without saying that upon Rubens’ arrival in Spain he was first treated with distrust. However this wasn’t the first time Peter Paul dealt with distrusting nobles and before long this court too was impressed with this cultivated man and extraordinary artist. King Philip IV finds Rubens’ portrait of him so delightful that he grants him official letters patent of nobility.</p>
        <p>A year later Archduchess Isabelle promotes Rubens to her personal secretary and sends him to England in order to try and ease the tensions brewing between England and Spain. Although he receives a more than warm welcome by King Charles I, the king isn’t quite convinced by Rubens’ arguments. However, Rubens is commissioned with painting several portraits of the king and decorate the banqueting house with paintings of the king’s reign. Charles I is so taken away by Ruben’s genius that he knights the painter.</p>
      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter5/Intro">
          <div class="callToAction">
            <button>Chapter 5</button>
          </div>
        </router-link>
      </div>

    </div>  
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  
  width: 100%;
  height: 100%;

  .fullWrapper{
    width: 30vw;
    justify-self: center;
    align-self: center;
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
