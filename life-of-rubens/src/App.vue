<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo">Life Of Rubens</router-link>
          <ul>
              <li><router-link to="/">HOME</router-link></li>
              <li class="subnav">
                  <a href="#" class="selected">TIMELINE</a>
                  <ul>
                    <li><router-link to="/timeline/Chapter1/Intro">CHAPTER 1</router-link></li>
                    <li><router-link to="/timeline/Chapter2/Intro">CHAPTER 2</router-link></li>
                    <li><router-link to="/timeline/Chapter3/Intro">CHAPTER 3</router-link></li>
                    <li><router-link to="/timeline/Chapter4/Intro">CHAPTER 4</router-link></li>
                    <li><router-link to="/timeline/Chapter5/Intro">CHAPTER 5</router-link></li>
                  </ul>
              
                
              </li>
              <li><router-link to="/about">ABOUT</router-link></li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {

 
}
</script>
<style lang="scss" src="./global.scss">


</style>
