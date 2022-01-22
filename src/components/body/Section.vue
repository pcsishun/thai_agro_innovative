<template>
  <div class="section-container">
    <div class="section-content">
        <div class="image-container-mobile">
            <div class="on-set-image">

            </div>
        </div>
        <div class="content-section">
            <div class="title-section">
                <h2>ลดพื้นที่การเพาะปลูกหญ้าสำหรับปศุสัตว์</h2>
            </div>
            <div class="desc-section">
                <h6>Nulla Lorem mollit cupidate irue. laborum manga nulla duis ullamco cillum dolor.</h6>
            </div>
            <div class="on-contract-btn">
                <button class="btn btn-primary">Contact us</button>
            </div>
        </div>
        <div class="image-container-pc">
            <div class="on-set-image">

            </div>
        </div>
    </div>
    <!-- <div class="set-component-container" id="#feature">
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
    </div> -->
  </div>
</template>

<script>
// import HighPerformance from './feature_components/HighPerformance.vue'
// import SaveEnergy from './feature_components/SaveEnergy.vue'
// import LessWater from './feature_components/LessWater.vue'
// import EasyInstallation from './feature_components/EasyInstallaion.vue'
// import EasyMaintenace from './feature_components/EasyMaintenace.vue'
// import Mission from './mission/Mission.vue'
// import Staff from './staff/Staff.vue'
// import ContactUs from './contact_us/ContactUs.vue'

export default {
    components:{
        // HighPerformance,
        // SaveEnergy,
        // LessWater,
        // EasyInstallation,
        // EasyMaintenace,
        // Mission,
        // Staff,
        // ContactUs
    }
}
</script>

<style  scoped>
@media screen and (min-width: 1800px){
    .section-content{
        display: grid;
        grid-template-columns:  1fr 1fr;
       
    }
    .section-container{
        margin-left: 100px;
        margin-right: 100px;
    }
    .desc-section{
        margin-top: 12px;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-color:#009CFF !important ;
        border: 1px solid #009CFF;
        border-radius: 8px;
    }
    .on-set-image{
        background-color: #f4f4f4;
        width: 600px;
        height: 360px;
        border-radius: 8px;
        margin-left: 1rem;
    }
    .image-container-mobile{
        display: none;
    }
    .content-section{
        margin-top: 3rem;
        margin-left: 5rem;
    }
 
}
@media  screen and (min-width: 990px) and (max-width: 1800px){
    .section-content{
        display: grid;
        grid-template-columns:  1fr 1fr;
    }
    .section-container{
        margin-left: 60px;
        margin-right: 60px;
    }
    .desc-section{
        margin-top: 12px;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-color:#009CFF !important ;
        border: 1px solid #009CFF;
        border-radius: 8px;
    }
    .on-set-image{
        background-color: #f4f4f4;
        width: 600px;
        height: 360px;
        border-radius: 8px;
    }
    .image-container-pc{
        margin-left: 3rem;
    }
    .image-container-mobile{
        display: none;
    }
    .content-section{
        margin-top: 3rem;
    }
 
}

@media only screen and (max-width: 990px){
    .section-container{
        margin-left: 15px;
        margin-right: 15px;
    }
    .desc-section{
        margin-top: 12px;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-color:#009CFF !important ;
        border: 1px solid #009CFF;
        border-radius: 8px;
    }
    .on-set-image{
        background-color: #f4f4f4;
        width: 360px;
        height: 200px;
        border-radius: 8px;
        margin-bottom: 2rem;

    }
    .image-container-pc{
        display: none;
    }
    .image-container-mobile{
        margin-bottom: 1.5rem;
    }
    .on-set-image{
        text-align: center;
        margin: auto;
    }
    .content-section{
        margin-left: 10px;
        margin-right: 10px;
    }
 
  
    
}
</style>

 