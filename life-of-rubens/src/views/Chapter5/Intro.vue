<template>
  <div class="home main-content">
    <div class="fullWrapper">
      <div class="titleWrapper">
        <h2 class="chapter">Chapter 5</h2>
        <h1 class="title">A Magnificent Muze</h1>
        <hr>
      </div>
      <div class="paragraphWrapper">
        <p class="timespan">1630 - 1640</p>
        <p>Rubens returns from England in 1630 and the disappointment he already felt with the political landscape has grown even larger. He is also fed up with his life as a widower, and remarks to a friend that although he feels his age, he is not ready for a celibate life. On the 6th of december 1630 Peter Paul, then aged fifty-three, marries the stunningly beautiful Hélène Fourment. The then sixteen year old daughter of a wealthy silk manufacturer. While not quite a scandal, the age difference is definitely food for gossip, even for that time. Especially as Rubens sons were her playmates growing up, and Albert was even said to have an eye on her. Rubens left for Spain and England while she was only a girl, but came back to find a young woman whose beauty was said to surpass that of her Trojan namesake.</p>
        

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
