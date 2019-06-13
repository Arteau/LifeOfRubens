<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="titleWrapper">
        <h2 class="chapter">Chapter 1</h2>
        <h1 class="title">Peter Paul's Parents</h1>
        <hr>
      </div>
      <div class="paragraphWrapper">
        <p class="timespan">1561 - 1586</p>
        <p>The story of Peter Paul Rubens’ life starts with the journey of his parents. This is because understanding the conflict that shaped much of their lives is important in order to grasp what kind of world Peter Paul grew up in.</p>
        <p>In the second half of the sixteenth century, what we now know as Belgium was then part of the Spanish Netherlands. A territory of the Spanish kingdom, ruled by King Philip II of Habsburg.</p>
        <p> The Spanish Netherlands were a place of great unrest due to the tensions between the Catholic Church and the Protestant reformation movement. This divide reached a turning point in 1566 during an event that is known as the Iconoclastic Fury or “Beeldenstorm” in Dutch, which means “Storm of Statues”. During the Iconoclastic Fury, mobs of Protestant revolutionaries destroyed Catholic artwork and statues in retaliation to their harsh persecution by the Catholic Church.</p>
        <p>Rubens’ parents were among those Protestant revolutionaries, and understandably fled the city of Antwerp out of fear for their otherwise relatively comfortable bureaucratic lives.</p>

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter1/FleeingAntwerp">
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
    // margin-top: 20vh;
    align-self: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
 
    .titleWrapper{
      justify-self: center;
      height: 80px;
      width: auto;

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
