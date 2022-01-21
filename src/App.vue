<template>
  <div id="app">
    <Navbar class="set-navbar"/>
    <Section/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Section from './components/body/Section.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Section
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
   margin-bottom: 60px;
 }
</style>
