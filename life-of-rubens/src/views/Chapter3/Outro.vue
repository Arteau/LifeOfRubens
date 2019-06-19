

<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="paragraphWrapper">
        <p class="timespan">1612 - 1621</p>
        <p>Peter Paul and Isabella end up having three children. Two sons, Nicolaas and Albert, and a daughter Clara who sadly died when she was only twelve.</p>
        <p>In his new home Rubens doesn’t only live but also work. Tirelessly so. A large part of this palazzo he designed for himself is a workshop where he, aided by quite a few assistants, completes magnificent works of art. It can even be said that the manner in which art is produced at Rubens’ workshop is nothing less than revolutionary. As he himself makes compositional oil sketches showing a relatively rough idea of what the final piece of art will look like, but then passes the artwork on to assistants of his. Each assistant is specialized in specific fields and subjects of painting. For instance, a painting containing animals he would pass on to an assistant specifically gifted in painting animals, who would then paint only that specific part of the painting. Rubens would almost always touch up the paintings himself before they left his workshop however. This working method turns Rubens’ workshop in something akin to a factory. No other workshop or atelier can match his productivity and as such Rubens establishes himself as easily  the most influential painter of his time.</p>
      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter4/Intro">
          <div class="callToAction">
            <button>Chapter 4</button>
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
