

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1638 - 1640</p>
        <p>In 1638 Peter Paul survives a very serious gout attack, a condition he has been struggling with since his time in Paris working for Queen De’ Medici. Gout is known as a disease for aristocrats, because thanks to the protein rich diet of mainly meat, the nobility often lacks nutrients found in vegetables and fruit which are considered food for peasants and monks. in 1640 his health worsens again for the last time. On may 27th of that year, he makes his will. He leaves almost everything to his wife. Three days later Peter Paul, still of agonizingly sound mind, and retaining all of his brilliant intellect and prodigious artistic vitality, dies. He just turned sixty-three. After his death his last child is born, a daughter, who is named Constantina-Albertina.</p>
      </div>
      <div class="buttonWrapper">
        <router-link to="/About">
          <div class="callToAction">
            <button>The End</button>
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
