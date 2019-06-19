<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">LIFE OF RUBENS</p>
        <p>The website Life of Rubens takes you on a journey to 16th and 17th century Europe to learn about the life of Flemish painter Peter Paul Rubens.</p>
        <p>It does this with the help of animated illustrations all handmade by the creator of the website, often with real paintings of Rubens as reference.</p>
        <p>The illustrations were first sketched out in Photoshop, then vectorized and exported to SVG in Illustrator, and lastly implemented and animated on the website with <a href="https://greensock.com/">GSAP</a>.</p>
        <p><a href="https://vuejs.org/">Vue.js</a> was used as a framework for the website to split up the different pages into views for a more managable workflow.</p>
<br>
        <p class="timespan">ARTEAU DE MEESTER</p>
        <p>The creator of Life of Rubens is <a href="https://www.instagram.com/arteaudem/">Arteau De Meester</a>, a web-designer and illustrator from Belgium.</p>
        <p>He made the website as his final school project for his bachelor's degree in multimedia technology in 2019.</p>

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

        a{
          color: #006eff;
        }
        a:hover{
          color: #265ea7;
        }
      }
    }



  }


}
</style>
