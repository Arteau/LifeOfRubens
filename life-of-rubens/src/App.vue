<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo">Life Of Rubens</router-link>
          <ul>
              <li><router-link to="/">TIMELINE</router-link></li>
              <li><router-link to="about">ABOUT</router-link></li>
              <li><router-link to="contact">CONTACT</router-link></li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
          <router-view/>
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
