<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="titleWrapper">
        <h2 class="chapter">Chapter 3</h2>
        <h1 class="title">A Magnificent Muze</h1>
        <hr>
      </div>
      <div class="paragraphWrapper">
        <p class="timespan">1630 - 1640</p>
        <p>Peter Paul Rubens' parents were Maria Pypelinckx and Jan Rubens. His mother's father was a famous tapestry manufactorer and his father came from a renowned mercantile family. They lived in the great port city of Antwerp.</p>
        <p>The second half of the sixteenth century was a time of great unrest in Antwerp, seeing as the Protestant reformation was just starting to get taken seriously by the Spanish rulers. Seriously enough to dispatch the inquisition to the Spanish Netherlands and Flanders, and persecute followers of the Protestant belief, such as Peter Paul's Parents.</p>
        <p>Let's travel to the city of Antwerp of this time period, and follow Jan and Maria in their journey to escape Catholic persecution.</p>
      

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter5/HeleneFourment">
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
