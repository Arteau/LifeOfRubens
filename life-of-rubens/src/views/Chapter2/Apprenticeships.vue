

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1590 - 1598</p>
        <p>As luck would have it for young Peter Paul, some far removed family on his mother’s side is the famous landscape painter Tobias Verhaecht. Maria reaches out to him and soon the fourteen year old Rubens starts his first apprenticeship as a painter. The first of many as it would turn out because after studying under Tobias for two years, he goes on to apprentice for Adam van Noort. His most important apprenticeship however was in the studio of Otto “Vaenius” van Veen, a painter of considerable reputation and a devout student of the classics.</p>
        <p>At first the aspiring painter is tasked with copying earlier artists’ work, such as woodcuts by Hans Holbein the Younger and Marcantonio Raimondi’s engravings after Raphael, but after a while he starts to paint his own works.</p>
        <p>Sadly not a lot of paintings of this era in his life are known. One of the only paintings we currently know of is The Portrait of a Young Scholar from 1597.</p>

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter2/MasterPainter">
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
