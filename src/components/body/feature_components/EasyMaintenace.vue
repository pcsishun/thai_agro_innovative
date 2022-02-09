<template>
    <div class="easy-main-container">
        <div class="easy-main-content">
            <div class="img-container-mobile">
                <img class="on-set-image" src="../../../assets/maintance2.jpg"/>
            </div>
            <div class="content-container">
                <div class="set-content-container">
                    <!-- <div class="test-img"></div> -->
                    <img class="test-img" src="../../../assets/Lesswater.png"/>
                    <div class="title-content">
                        <h4>Easy to Maintenance</h4>
                    </div>
                    <div class="desc-content">
                        <h6>เป็นโครงสร้างแบบ Modular สามารถซ่อมแซมได้ง่าย พร้อมประกันอุปกรณ์ 1 ปี</h6>
                    </div>
                </div>
            </div>
             <div class="img-container-pc">
                 <img class="on-set-image" src="../../../assets/maintance2.jpg"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (min-width: 3501px)  {
    .img-container-mobile{
        display: none;
    }
    .easy-main-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 1rem;
    }
    .img-container-pc{
        text-align: right;
    }
    .on-set-image{
        width: 94%;
        height: 1080px;
        border-radius: 24px;
        background-color: #F4F4F4;
    }
    .title-content{
        margin-top: 3rem;
    }
    .content-container{
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .set-content-container{
        margin-top: 5rem;
        margin-left: 5rem;
    }
    .test-img{
        width: 100px;
        height: 100px;
    }
}
@media screen and (min-width: 3000px) and (max-width: 3500px){
    .img-container-mobile{
        display: none;
    }
    .easy-main-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
       grid-column-gap: 1rem;

    }
    .img-container-pc{
        text-align: right;
    }
    .on-set-image {
        width: 90%;
        height: 880px;
        border-radius: 24px;
        background-color: #F4F4F4;
        margin-left: 9rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .content-container{
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .set-content-container{
        margin-top: 5rem;
        margin-left: 5rem;
    }
    .test-img{
            width: 100px;
            height: 100px;
        }
}
@media screen and (min-width: 2500px) and (max-width: 3000px){
 
    .img-container-mobile{
        display: none;
    }
    .easy-main-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 1rem;
    }
    .img-container-pc{
        text-align: right;
    }
    .on-set-image {
        width: 90%;
        height: 780px;
        border-radius: 24px;
        background-color: #F4F4F4;
        margin-left: 9rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .content-container{
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .set-content-container{
        margin-top: 5rem;
        margin-left: 5rem;
    }
    .test-img{
            width: 100px;
            height: 100px;
        }
}
@media screen and (min-width: 2000px) and (max-width: 2500px){
    .img-container-mobile{
        display: none;
    }
    .easy-main-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 1rem;
    }
    .img-container-pc{
        text-align: right;
    }
    .on-set-image {
        width: 90%;
        height: 580px;
        border-radius: 24px;
        background-color: #F4F4F4;
    }
    .title-content{
        margin-top: 3rem;
    }
    .content-container{
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .set-content-container{
        margin-top: 5rem;
        margin-left: 5rem;
    }
    .test-img{
            width: 100px;
            height: 100px;
        }
}

 

@media screen and (min-width: 1401px) and (max-width: 2000px){
    .img-container-mobile{
        display: none;
    }
    .easy-main-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 1rem;

    }
    .img-container-pc{
        text-align: right;
    }
    .on-set-image {
        width: 90%;
        height: 480px;
        border-radius: 24px;
        background-color: #F4F4F4;
    }
    .title-content{
        margin-top: 3rem;
    }
    .content-container{
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .set-content-container{
        margin-top: 3rem;
        margin-left: 4.3rem;
    }
    .test-img{
            width: 100px;
            height: 100px;
        }
}

 @media screen and (min-width: 1310px) and (max-width: 1400px){
    .img-container-mobile{
        display: none;
    }
    .easy-main-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
         grid-column-gap: 1rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .img-container-pc{
        text-align: right;
    }
    .on-set-image {
        width: 95%;
        height: 480px;
        border-radius: 24px;
        background-color: #F4F4F4;
    }
    .content-container{
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .set-content-container{
        margin-top: 3rem;
        margin-left: 4.3rem;
        margin-right: 1rem;
    }
    .test-img{
            width: 100px;
            height: 100px;
        }
 }


@media  screen and (min-width: 990px) and (max-width: 1309px){
    .img-container-mobile{
        display: none;
    }
    .easy-main-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 1rem;
    }
    .img-container-pc{
        text-align: right;
    }
    .title-content{
        margin-top: 3rem;
    }
    .on-set-image {
        width: 95%;
        height: 380px;
        border-radius: 24px;
        background-color: #F4F4F4;
     
    }
    .content-container{
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .set-content-container{
        margin-top: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .test-img{
        width: 100px;
        height: 100px;
    }
}

@media only screen and (min-width: 600px) and (max-width: 990px){
    .img-container-pc{
        display: none;
    }
    .img-container-mobile{
        text-align: center;
        margin: auto;
    } 
    .on-set-image {
        width: 78%;
        height: 380px;
        border-radius: 24px;
        background-color: #F4F4F4;
        text-align: center;
        margin: auto;
    }
    .title-content, .desc-content{
        margin-left: 1.5rem;
    }
 
    .content-container{
        width: 78%;
        margin-left: 10%;
        margin-top: 1rem;
        border-radius: 24px;
        margin-right: 10%;
        height: 250px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
    }
    .test-img{
        width: 100px;
        height: 100px;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }
}

@media only screen and (max-width: 600px){
    .img-container-pc{
        display: none;
    }
    .img-container-mobile{
        text-align: center;
        margin: auto;
    } 
    .on-set-image {
        width: 95%;
        height: 230px;
        border-radius: 24px;
        background-color: #F4F4F4;
        text-align: center;
        margin: auto;
    }
    .title-content, .desc-content{
        margin-left: 1.5rem;
        width: 80%;
    }
     .content-container{
        width: 95%;
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(0, 156, 255, 0.15) 0%, rgba(0, 156, 255, 0.05) 100%);
        height: 250px;
        margin: auto;
    }
    .content-set-container{
        margin-top: 1rem;
    }
    .test-img {
        width: 100px;
        height: 100px;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }
}
</style>