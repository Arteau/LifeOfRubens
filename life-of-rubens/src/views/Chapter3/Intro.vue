<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="titleWrapper">
        <h2 class="chapter">Chapter 3</h2>
        <h1 class="title">New Horizons</h1>
        <hr>
      </div>
      <div class="paragraphWrapper">
        <p class="timespan">1600 - 1621</p>
        <p>Peter Paul has grown up to be an ambitious, intelligent, and above all artistically gifted man. Now twenty-three years old he arrives in Venice to study the famous classics and meet like-minded people. His talents and eloquent demeanor catch the attention of Duke Vincenzo I Gonzaga of Mantua, who takes a liking to the young artist.</p>
        <p>The Duke invites Rubens to his court in Mantua and even provides him with the funds to further his goal to study the great Itallian artists. He travels to Rome where he falls head over heels for the works of Caravagio and specifically the Hellenistic sculpture “Laocoön and His Sons”. Caravaggio’s naturalistic style is a huge inspiration for Rubens and influences of it are seen throughout his works.</p>
        <p>Peter Paul also undertakes a special diplomatic mission for Duke Vincenzo. He is sent to the court of Felipe III of Spain, the son of Felipe II but far more progressive than his father. Peter Paul leads an escort of works of art and other presents. He is perfect for the job seeing as he can both restore the paintings that get damaged along the way, as well as greatly impress the court of Felipe III with his intellect and eloquence. He receives a more than warm welcome and uses his time in Spain to paint numerous commissions and portraits.</p>

      </div>
      <div class="buttonWrapper">
        <router-link to="/timeline/Chapter3/Mantua">
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
