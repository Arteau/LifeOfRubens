

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1577 - 1589</p>
        <p>Upon receiving the news of Princess Anna’s demise, Maria writes a letter to Prince William. She urges him to undo their exile and asks him for permission to move back to Cologne with her family. Prince William writes back and grants the Rubens family their freedom.</p>
        <p>In Cologne not much changes for the Rubens family apart from the fact that Jan can practice law again. They live a comfortable and happy life until in 1587 Jan dies. He is buried in the Saint Peter’s Church there in Cologne where Maria has a gravestone installed honoring Jan’s intellect, scholarly qualities, and twenty-five years of marriage without arguments.</p>
        <p>Two years after her husband’s death, Maria and her two sons move back to Antwerp.</p>
      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter2/Intro">
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
