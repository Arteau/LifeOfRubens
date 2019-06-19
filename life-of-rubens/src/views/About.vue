<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">LIFE OF RUBENS</p>
        <p>The website Life of Rubens was made as a thesis project by <a href="https://www.instagram.com/arteaudem/">Arteau De Meester</a> for his bachelor's degree in Multimedia Technology.</p>
        <p>It utilizes SVG illustrations animated with <a href="https://greensock.com/">GSAP</a> on a website with <a href="https://vuejs.org/">Vue.js</a> as framework.</p>
<hr>
        <p>Two books were used as reference for the story told on this website: <a href="https://www.polis.be/de-vrouwen-van-rubens.html">"De Vrouwen Van Rubens"</a> (The Women Of Rubens) by Rosine De Dijn, and <a href="https://www.taschen.com/pages/en/catalogue/art/all/43104/facts.rubens.htm">"Peter Paul Rubens"</a> by Gilles Néret from the Taschen collection.</p>
        <p>The first book, "De Vrouwen Van Rubens", was invaluable in gaining more understanding in Rubens' life. It is his life's story told through the eyes of the women in his life, ranging from his mother and wives to the powerful noblewomen and queens he meets. The book from the Taschen collection was especially handy as a catalogue of his paintings, as well as a brief overview of his life in the shape of a concise timeline.</p>
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
