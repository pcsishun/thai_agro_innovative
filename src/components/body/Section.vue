<template>
  <div class="section-container">
    <div class="section-content">
        <div class="image-container-mobile">
            <div class="on-set-image">
                <img src="../../assets/contenttai.jpg"/>
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
                <button class="btn btn-primary">Contact us</button>
            </div>
        </div>
        <div class="image-container-pc">
            <div class="on-set-image">
                <img src="../../assets/contenttai.jpg"/>
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
        font-size: 35px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
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
        width: 80%;
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
        width: 800px;
        height: 460px;
        border-radius: 8px;
        margin-left: 1rem;
    }
    .on-set-image > img{
        width: 800px;
        height: 460px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    .content-section{
        margin-top: 3rem;
        margin-left: 1rem;
        padding-left: 35rem;
    }
}
@media screen and (min-width: 3001px) and (max-width: 3500px){
    .inline-text-set{
        font-weight: bold;
        font-size: 35px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
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
        width: 80%;
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
        width: 800px;
        height: 460px;
        border-radius: 8px;
        margin-left: 1rem;
    }
    .on-set-image > img{
        width: 800px;
        height: 460px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    .content-section{
        margin-top: 3rem;
        margin-left: 1rem;
        padding-left: 17rem;
    }
}
@media screen and (min-width: 2500px) and (max-width: 3000px){
    .inline-text-set{
        font-weight: bold;
        font-size: 35px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
    .section-content{
        display: grid;
        grid-template-columns:  1fr 1fr;
        padding-right: 5rem;
        padding-left: 6rem;
    }
    .section-container{
        margin-left: 100px;
        margin-right: 100px;
    }
    .desc-section{
        margin-top: 12px;
        width: 80%;
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
        width: 800px;
        height: 460px;
        border-radius: 8px;
        margin-left: 1rem;
    }
    .on-set-image > img{
        width: 800px;
        height: 460px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    .content-section{
        margin-top: 3rem;
        margin-left: 1rem;
    }
}
@media screen and (min-width: 2000px) and (max-width: 2500px){
    .inline-text-set{
        font-weight: bold;
        font-size: 35px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
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
        width: 80%;
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
        width: 800px;
        height: 460px;
        border-radius: 8px;
        margin-left: 1rem;
    }
    .on-set-image > img{
            width: 800px;
            height: 460px;
            border-radius: 8px;
        }
    .image-container-mobile{
        display: none;
    }
    .content-section{
        margin-top: 3rem;
        margin-left: 1rem;
    }
}

@media screen and (min-width: 1800px) and (max-width: 2000px){
    .inline-text-set{
        font-weight: bold;
        font-size: 35px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
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
        width: 80%;
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
    .on-set-image > img{
        width: 600px;
        height: 360px;
        border-radius: 8px;
    }
    .image-container-mobile{
        display: none;
    }
    .content-section{
        margin-top: 3rem;
        margin-left: 1rem;
    }
 
}
@media  screen and (min-width: 990px) and (max-width: 1800px){
    .inline-text-set{
        font-weight: bold;
        font-size: 30px;
        background-image: -webkit-gradient(linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%));
        background-image: linear-gradient(180deg, #009CFF 0%, #2B9CE6 21.35%, #7E5CAC 57.81%, #DC257D 100%);
        color:transparent;
        -webkit-background-clip: text;
        background-clip: text;
    }
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
        width: 95%;
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
    .on-set-image > img{
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
        background-color:#009CFF !important ;
        border: 1px solid #009CFF;
        border-radius: 8px;
    }
    .on-set-image{
        background-color: #f4f4f4;
        width: 580px;
        height: 380px;
        border-radius: 8px;
        margin-bottom: 2rem;
    }
    .on-set-image > img{
        width: 580px;
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
    .on-set-image > img{
        width: 360px;
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

 