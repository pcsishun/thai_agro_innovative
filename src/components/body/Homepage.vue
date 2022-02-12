<template>
    <div class="homepage-container">
        <div class="body-container">
            <div class="set-component-header">
                <HeaderVison id="is-set-mission"/>
            </div>
            <div class="body-feature-container">
                <div class="set-component-section">
                    <Section class="set-section-component" id="is-set-vison"/>
                </div>
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
                <div class="set-component-container-staff" id="is-set-staff">
                    <Staff/>    
                </div>
                <div class="set-component-container" id="is-set-contact">
                    <ContactUs class="contact-us"/>    
                </div>
            </div>
            
        </div>
    <Footer class="set-footer"/>
    </div>
</template>

<script>
import HeaderVison from './header/HeaderVison.vue'
import Section from './section/Section.vue'
import HighPerformance from './feature_components/HighPerformance.vue'
import EasyInstallation from './feature_components/EasyInstallaion.vue'
import EasyMaintenace from './feature_components/EasyMaintenace.vue'
import EasyToOperate from './feature_components/EasyToOperate.vue'
import LessLabor from './feature_components/LessLabor.vue'

import Staff from './staff/Staff.vue'
import ContactUs from './contact_us/ContactUs.vue'
import Footer from '../footer/Footer.vue'


export default {
  name: 'App',
  components: {
    HeaderVison,
    Section,
    HighPerformance,
    EasyToOperate,
    LessLabor,
    EasyInstallation,
    EasyMaintenace,

    Staff,
    ContactUs,
    Footer
  }
}
</script>

<style  scoped>
/* .set-footer{
   margin-top: 60px;
 } */

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
      .body-feature-container{
 
          margin-right: 5rem;
      }
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
      .body-feature-container{
          margin-left: 1rem;
          margin-right: 1rem;
      }
   .set-component-container{
        margin-top: 100px;
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