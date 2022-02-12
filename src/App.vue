<template>
  <div id="app">
    <Navbar class="set-navbar"/>
    <router-view/>
    <!-- <Footer class="set-footer"/> -->
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
// import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    // Footer
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app{
   font-family: 'Noto Sans Thai', sans-serif;
   height: 710px;
 }
.set-footer{
  margin-top: 40px;
  height: 100%;
 }

 
</style>
