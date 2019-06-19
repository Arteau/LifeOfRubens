

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1608</p>
        <p>After having spent eight years in Italy, Rubens receives word that his mother has become dangerously ill. Startled by this frightening news he immediately departs for Antwerp, worried for his mother’s life. Sadly he arrives too late, and Maria Pypelinckx dies on the 19th of October before Peter Paul arrives in Antwerp. Never in his life will Rubens travel back to Italy.</p>
        <p>In the year following his mother’s death Rubens becomes the appointed court painter to Archduke Albert and Archduchess Isabella. Isabella is the granddaughter of the Holy Roman Emperor Charles V. Even though they pay him a wage of 500 livres a year to work for them, he is allowed to operate out of Antwerp instead of their court. Because of this he is also able to take on major commissions for the municipality of Antwerp itself.</p>

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter3/WifeAndHouse">
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
