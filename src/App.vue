<template>
  <div id="app">
    <Navbar class="set-navbar"/>
    <div class="body-container">
        <Section class="set-section-component"/>
        <div class="set-component-container"  id="is-set-feature">
            <HighPerformance/>    
        </div>
        <div class="set-component-container">
            <EasyInstallation/>    
        </div>
        <div class="set-component-container">
            <LessLabor/>    
        </div>
        <div class="set-component-container">
            <EasyToOperate/>    
        </div>
        <div class="set-component-container">
            <EasyMaintenace/>    
        </div>
        <div class="set-component-container-mission" id="is-set-mission">
            <Mission/>    
        </div>
        <div class="set-component-container-staff" id="is-set-staff">
            <Staff/>    
        </div>
        <div class="set-component-container" id="is-set-contact">
            <ContactUs class="contact-us"/>    
        </div>
    </div>
    <Footer class="set-footer"/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'
import Section from './components/body/Section.vue'
import HighPerformance from './components/body/feature_components/HighPerformance.vue'
// import SaveEnergy from './components/body/feature_components/SaveEnergy.vue'
// import LessWater from './components/body/feature_components/LessWater.vue'
import EasyInstallation from './components/body/feature_components/EasyInstallaion.vue'
import EasyMaintenace from './components/body/feature_components/EasyMaintenace.vue'
import EasyToOperate from './components/body/feature_components/EasyToOperate.vue'
import LessLabor from './components/body/feature_components/LessLabor.vue'
import Mission from './components/body/mission/Mission.vue'
import Staff from './components/body/staff/Staff.vue'
import ContactUs from './components/body/contact_us/ContactUs.vue'
import Footer from './components/footer/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Section,
    HighPerformance,
    EasyToOperate,
    LessLabor,
    // SaveEnergy,
    // LessWater,
    EasyInstallation,
    EasyMaintenace,
    Mission,
    Staff,
    ContactUs,
    Footer
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

 .set-footer{
   margin-top: 60px;
 }
 @media screen and (min-width: 1800px){
     .set-section-component{
         padding-left: 10rem;
     }
    .set-component-container{
        margin-top: 160px;
        margin-left: 10rem;
        margin-right: 100px;
    }
    .set-component-container-mission{
        margin-top: 147px;
    }
    .set-component-container-staff{
        margin-top: 168px;
        margin-left: 10rem;
        margin-right: 100px
    }
 }

  @media screen and (min-width: 1500px) and (max-width: 1799px) {
    .set-section-component{
          padding-left: 5rem;
    }
    .set-component-container{
        margin-top: 160px;
        padding-left: 5rem;
  
    }
    .set-component-container > .contact-us{
        padding-right: 5rem;
    }
    .set-component-container-mission{
        margin-top: 147px;
    }
    .set-component-container-staff{
        margin-top: 168px;
        margin-left: 60px;
        padding-left: 5rem;
        margin-right: 60px
    }
  }

  @media screen and (min-width: 1401px) and (max-width: 1499px) {
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
