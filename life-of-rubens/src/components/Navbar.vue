<template>
    <nav class="navbar">
        <router-link to="/">
            <h1 class="homeButton">Life Of Rubens</h1>
        </router-link>
        <ul class="menuList">
            <li><router-link to="/">TIMELINE</router-link></li>
            <li><router-link to="about">ABOUT</router-link></li>
            <li><router-link to="contact">CONTACT</router-link></li>
        </ul>
 
    </nav>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

/* .navbar{
    overflow: hidden;
    background-color: rgba(255,255,255,1);
    position: fixed;
    top: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 50px;
    z-index: 100;    
}
h1{
    padding: 0;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 9px;
    font-family: 'Playfair Display', serif;
    align-self: center;
    justify-self: start;
    color: #5e5e5e;
}
h1:hover{
    cursor: pointer;
}

.menuList{
    font-family: 'Montserrat', sans-serif;

    padding: 0;
    margin: 0;
    display: inline-block;
    align-self: center;
    justify-self: end;
}
a{
    transition: all .2s ease-in-out;
    padding: 0px;
    padding-right: 10px;
    padding-left: 10px;
    margin: 0;
    text-align: center;
    text-decoration: none;
    color: #5e5e5e;
    justify-self: center;
    align-self: center;
    width: 100%;
    border-right: solid #5e5e5e 1px;
}
a:hover{
    color: #d1d1d1;
}
a:last-child{
    border-right: 0px;
}
    */
</style>
