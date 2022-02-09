<template>
  <div id="app">
    <Navbar class="set-navbar"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
 

export default {
  name: 'App',
  components: {
    Navbar,
 
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
 }
.set-navbar{
 }

 
</style>
