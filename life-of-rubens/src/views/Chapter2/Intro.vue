<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="titleWrapper">
        <h2 class="chapter">Chapter 2</h2>
        <h1 class="title">The Young Painter</h1>
        <hr>
      </div>
      <div class="paragraphWrapper">
        <p class="timespan">1587 - 1599</p>
        <p>Back in Antwerp the tensions have died down a bit thanks to an accord between the Protestant leaders known as the “Geuzen” and Margaret of Parma. This accord states religious freedom in the Spanish Netherlands as long as Catholics can practice their faith without harassment and fear for destruction of their places of worship.  This also means that the two young brothers can enjoy a modern humanistic and Latin education at the Augustinian college. The rector at this college is Rombout Verdonck, a renowned scholar who is sympathetic to the Protestant cause.</p>
        <p>The brothers’ education is an expensive one however and after about a year they have to resign because of a lack of funds. The money normally reserved for their education goes to the dowry of their older sister Blandina who is getting married. Not to worry though, as Maria intended for Philip and Peter Paul to have an aristocratic future and as such had already asked noblewoman Marguerite de Ligne whether she would take on Peter Paul as a page.</p>

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter2/Oudenaerde">
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
