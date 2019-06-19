

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1622 - 1625</p>
        <p>Working for the Queen Regent comes with great prestige, but also political intrigue. Although Rubens could get along with the Queen just fine, he shared a certain disdain for cardinal Richelieu with her. This cardinal not only saw Rubens as a painter, but also as a potential political rival who represented the Habsburgs of Spain who weren’t on the best terms with France. All this because of Rubens’ earlier mission to Spain in the name of Duke Vincenzo back in Mantua. Peter Paul doesn’t have much interest in politics though and thinks of the cardinal as a bothersome opportunist.</p>
        <p>After a while Rubens’ relationship with the Queen starts to sour. Her harsh deadlines and impossible mood swings put unwanted pressure on Rubens. She expects him to finish her De’ Medici Cycle in two years, while insisting that only he paints the main subjects. While his assistants can only help paint the backgrounds. On top of that she regularly changes her mind about banalities such as motifs and colours. She even makes Rubens completely re-do some paintings because she is unhappy with the way he portrayed her. At one point Rubens writes to a friend about his situation with the Queen. He tells him how he is the busiest and most bothered man alive, and he will most likely not return to her court after finishing his assignment. Rubens also never got paid in full by the Queen.</p>
      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter4/TragicLoss">
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
