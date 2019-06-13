

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1568 - 1574</p>
        <p>In Cologne the well established Jan gains the favor of Princess Anna of Saxony, the wife of Prince William of Orange-Nassau. Prince William -also known as William the Silent- is the instigator of the Eighty Years’ War against the Spanish.</p>
        <p>The marriage of the Prince and the Princess wasn’t without its faults however. Due to their marital problems Jan becomes Princess Anna’s judicial advisor. He aids her effort to get her dowry back from the Orange-Nassau family and as such spends a lot of time with her. They become really close, too close, and start an affair which is quickly found out by Prince William. By the time their affair is discovered however, Princess Anna is already pregnant with Jan’s child.</p>
        <p>Because of this inexcusable offense Jan is convicted of adultery, imprisoned, and might even be sentenced to die. Fearing for her husband’s life and in spite of his unfaithfulness towards her, Maria Pypelinckx starts to write letters to members of the Orange-Nassau family, pleading for her husband’s life. This can be considered an act of true bravery seeing as although Maria is wealthy, she isn’t nobility. Sending these letters means risking her own freedom. It pays off however, Jan is allowed to live but together with his wife exiled to the nearby town of Siegen.</p>

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter1/JanAndMariaWithChildren">
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
