<template>
  <div class="section-container">
    <div class="section-content">
        <div class="image-container-mobile">
            <div class="on-set-image">
                <img src="../../../assets/TAI_workflow.png"/>
            </div>
        </div>
        <div class="content-section">
            <div class="title-section">
                <h2><span class="inline-text-set">Technology</span> for Sustainable</h2>
                <h2><span class="inline-text-set">Agriculture</span> & Livestock</h2>
            </div>
            <div class="desc-section">
                <h6>ระบบ Vertical Farming สำหรับการเพาะปลูกอาหาร เลี้ยงปศุสัตว์ รูปแบบ Knock-down ที่ขับเคลื่อนด้วย Technology AI และ IoT Device เพื่อให้การดูแลปศุสัตว์เป็นเรื่องง่ายและยั่งยืน</h6>
            </div>
            <div class="on-contract-btn">
                <router-link to="./product" class="btn-primary"><button>About Product</button></router-link >
            </div>
        </div>
        <div class="image-container-pc">
            <div class="on-set-image">
                <img src="../../../assets/TAI_workflow.png"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
 
export default {
    components:{
 
    }
}
</script>

<style  scoped>

@media screen and (min-width: 3501px){
 
    .inline-text-set{
        font-weight: bold;
        font-size: 60px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-content{
        width: 2000px;
        margin: auto;
        display: grid;
        grid-template-columns:  1fr 1fr;
        grid-column-gap:  1rem;
    }
    .desc-section{
        margin-top: 12px;
        width: 80%;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        text-decoration: none;
        border-radius: 24px;
        padding: 20px;
        font-size: 30px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
        height: 300px;
    }
    .image-container-pc{
        text-align: right;
    }
    .on-set-image > img{
        width: 1000px;
        height: 650px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    h2{
        font-size:45px;
    }
    h6{
        font-size: 30px;
    }
    .content-section{
        text-align: left;
    }
 
}
@media screen and (min-width: 3001px) and (max-width: 3500px){
    .inline-text-set{
        font-weight: bold;
        font-size: 60px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-content{
        width: 2000px;
        margin: auto;
        display: grid;
        grid-template-columns:  1fr 1fr;
        grid-column-gap:  1rem;
       
    }
    .desc-section{
        margin-top: 12px;
        width: 80%;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        text-decoration: none;
        border-radius: 24px;
        padding: 20px;
        font-size: 30px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
        height: 300px;
    }
 
    .on-set-image > img{
        width: 1000px;
        height: 650px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    h2{
        font-size:45px;
    }
    h6{
        font-size: 30px;
    }
    .content-section{
        text-align: left;
    }
}
@media screen and (min-width: 2500px) and (max-width: 3000px){
    .inline-text-set{
        font-weight: bold;
        font-size: 60px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-content{
        width: 2000px;
        margin: auto;
        display: grid;
        grid-template-columns:  1fr 1fr;
        grid-column-gap:  1rem;
       
    }
    .desc-section{
        margin-top: 12px;
        width: 80%;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        text-decoration: none;
        border-radius: 24px;
        padding: 20px;
        font-size: 30px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
        height: 300px;
    }
 
    .on-set-image > img{
        width: 1000px;
        height: 650px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    h2{
        font-size:45px;
    }
    h6{
        font-size: 30px;
    }
    .content-section{
        text-align: left;
    }
}
@media screen and (min-width: 2000px) and (max-width: 2500px){
    .inline-text-set{
        font-weight: bold;
        font-size: 60px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-content{
        width: 2000px;
        margin: auto;
        display: grid;
        grid-template-columns:  1fr 1fr;
        grid-column-gap:  1rem;
       
    }
    .desc-section{
        margin-top: 12px;
        width: 80%;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        text-decoration: none;
        border-radius: 24px;
        padding: 20px;
        font-size: 30px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
        height: 300px;
    }
 
    .on-set-image > img{
        width: 900px;
        height: 550px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    h2{
        font-size:45px;
    }
    h6{
        font-size: 30px;
    }
    .content-section{
        text-align: left;
    }
}

@media screen and (min-width: 1800px) and (max-width: 2000px){
    .inline-text-set{
        font-weight: bold;
        font-size: 60px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-content{
        display: grid;
        grid-template-columns:  1fr 1fr;
        grid-column-gap:  1rem;
    }
    .desc-section{
        margin-top: 12px;
        width: 80%;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        text-decoration: none;
        border-radius: 24px;
        padding: 20px;
        font-size: 30px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
        height: 200px;
    }
 
    .on-set-image > img{
        width: 740px;
        height: 450px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    h2{
        font-size:35px;
    }
    h6{
        font-size: 20px;
    }
    .content-section{
        text-align: left;
    }
 
}
@media  screen and (min-width: 990px) and (max-width: 1800px){
    .inline-text-set{
        font-weight: bold;
        font-size: 40px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-content{
        display: grid;
        grid-template-columns:  1fr 1fr;
        grid-column-gap:  1rem;
        margin-left: 2rem;
       
    }
    .desc-section{
        margin-top: 12px;
        width: 80%;
    }
    .on-contract-btn{
        margin-top: 40px
    }
    .btn-primary{
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        text-decoration: none;
        border-radius: 24px;
        padding: 10px;
        font-size: 20px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
        height: 200px;
    }
 
    .on-set-image > img{
        width: 640px;
        height: 400px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    h2{
        font-size:35px;
    }
    h6{
        font-size: 20px;
    }
    .content-section{
        text-align: left;
    }
 
}

@media only screen and (min-width: 601px)and (max-width: 989px){
    .title-section{
        font-size: 15px;
    }
    .inline-text-set{
        font-weight: bold;
        font-size: 30px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
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
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        text-decoration: none;
        border-radius: 8px;
        padding: 10px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
    }
 
    .on-set-image > img{
        width: 80%;
        height: 380px;
        border-radius: 8px;
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
        margin-left: 6.3rem;
        margin-right: 6.3rem;

    }
 
}

@media only screen and (max-width: 600px){
    .title-section{
        font-size: 15px;
    }
    .inline-text-set{
        font-weight: bold;
        font-size: 30px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-container{
        margin-left: 15px;
        margin-right: 15px;
    }
    .desc-section{
        margin-top: 12px;
    }
    .on-contract-btn{
        margin-top: 40px;
    }
    .btn-primary{
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        border: none;
        border-radius: 8px;
        text-decoration: none;
        padding: 10px;
    }
    .btn-primary > button{
        background: none;
        border: none;
        color: white;
        font-weight: bold;
    }
  
    .on-set-image > img{
        width: 99%;
        height: 200px;
        border-radius: 8px;
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

 