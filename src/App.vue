<template>
  <div id="app">
    <Navbar class="set-navbar"/>
    <Section/>
    <div class="set-component-container"  ref="feature">
        <HighPerformance/>    
    </div>
    <div class="set-component-container">
        <SaveEnergy/>    
    </div>
    <div class="set-component-container">
        <LessWater/>    
    </div>
    <div class="set-component-container">
        <EasyInstallation/>    
    </div>
    <div class="set-component-container">
        <EasyMaintenace/>    
    </div>
    <div class="set-component-container-mission" id="#mission">
        <Mission/>    
    </div>
    <div class="set-component-container-staff" id="#staff">
        <Staff/>    
    </div>
    <div class="set-component-container" id="#contact">
        <ContactUs/>    
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Section from './components/body/Section.vue'
import HighPerformance from './components/body/feature_components/HighPerformance.vue'
import SaveEnergy from './components/body/feature_components/SaveEnergy.vue'
import LessWater from './components/body/feature_components/LessWater.vue'
import EasyInstallation from './components/body/feature_components/EasyInstallaion.vue'
import EasyMaintenace from './components/body/feature_components/EasyMaintenace.vue'
import Mission from './components/body/mission/Mission.vue'
import Staff from './components/body/staff/Staff.vue'
import ContactUs from './components/body/contact_us/ContactUs.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Section,
    HighPerformance,
    SaveEnergy,
    LessWater,
    EasyInstallation,
    EasyMaintenace,
    Mission,
    Staff,
    ContactUs
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
 @media screen and (min-width: 1800px){
      .set-component-container{
        margin-top: 160px;
        margin-left: 100px;
        margin-right: 100px;
    }
    .set-component-container-mission{
        margin-top: 147px;
    }
    .set-component-container-staff{
        margin-top: 168px;
        margin-left: 100px;
        margin-right: 100px
        
    }
 }

  @media screen and (min-width: 1401px) and (max-width: 1799px) {
   .set-component-container{
        margin-top: 160px;
    }
    .set-component-container-mission{
        margin-top: 147px;
    }
    .set-component-container-staff{
        margin-top: 168px;
        margin-left: 60px;
        margin-right: 60px
        
    }
 }

 @media screen and (min-width: 1310px) and (max-width: 1400px) {
   .set-component-container{
        margin-top: 160px;
        margin-left: 60px;
        margin-right: 60px
    }
    .set-component-container-mission{
        margin-top: 147px;
        margin-left: 60px;
        margin-right: 60px
    }
    .set-component-container-staff{
        margin-top: 168px;
        margin-left: 60px;
        margin-right: 60px
        
    }
 }


 @media screen and (min-width: 990px) and (max-width: 1309px) {
   .set-component-container{
        margin-top: 160px;
        margin-left: 30px;
        margin-right: 30px;
    }
    .set-component-container-mission{
        margin-top: 147px;
        margin-left: 30px;
        margin-right: 30px
    }
    .set-component-container-staff{
        margin-top: 168px;
        margin-left: 30px;
        margin-right: 30px
        
    }
 }

 @media only screen and (max-width: 990px){
    .set-component-container {
        margin-top: 60px;
    }
    .set-component-container-mission{
        margin-top: 100px;
    }
    .set-component-container-staff{
        margin-top: 100px;
        text-align: center;
    }
 }
</style>
