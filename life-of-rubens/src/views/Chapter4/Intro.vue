<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="titleWrapper">
        <h2 class="chapter">Chapter 4</h2>
        <h1 class="title">Great Renown, Greater Grief.</h1>
        <hr>
      </div>
      <div class="paragraphWrapper">
        <p class="timespan">1622 - 1629</p>
        <p>Thanks to his great success Peter Paul catches the eye of Marie De’ Medici, the Queen of France. Queen De’ Medici is a big admirer of Rubens’ work and commissions him to decorate one of the great galleries in her personal “Palais de Luxembourg” with no less than twenty-one paintings about her reign as Queen. She also wants another series of similar paintings completely dedicated to her late husband, King Henri IV’s life. Although this latter series would never come to fruition. A monumental task that only Peter Paul could bring to a successful end. Seeing as he is the only painter in Europe who is both enough of an artistic genius and able to work on the huge sizes required for this commission. Even though it is a herculean task, Rubens accepts nonetheless.</p>
        <p>Rubens had met the Queen before, back when he called Mantua his home and resided under Duke Vincenzo. The Duke was invited to Marie De’ Medici’s wedding to Henri IV and Rubens was part of his entourage there. Rubens’ patronesse Archduchess Isabella is a good friend of Marie De’ Medici, and it is safe to assume that Marie got the idea to hire Rubens for her epic from Isabella. When Rubens travels to France to meet with Marie in context of this commission for the first time, he even brings her a little dog. A gift from Isabella.</p>
        
      

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter4/DeMedici">
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
      width: auto;
      height: 80px;

      hr{
        width: 100%;
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
        text-align: center;
        width: 100%;
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
