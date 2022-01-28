<template>
    <div class="easy-operate-container">
        <div class="easy-operate-content">
            <div class="img-container-mobile">
                <div class="on-set-image">  
                    
                </div>
            </div>
            <div class="content-container">
                <div class="set-content-container">
                    <!-- <div class="test-img"></div> -->
                    <img class="test-img" src="../../../assets/Maintenance.png"/>
                    <div class="title-content">
                        <h4>Easy to Operate</h4>
                    </div>
                    <div class="desc-content">
                        <h6>ใช้งานง่าย สะดวก และรวดเร็ว</h6>
                    </div>
                </div>
            </div>
             <div class="img-container-pc">
                <div class="on-set-image">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (min-width: 3501px){
    .img-container-mobile{
        display: none;
    }
    .easy-operate-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding-left: 40rem;
    }
    .on-set-image{
        width: 1000px;
        height: 580px;
        border-radius: 8px;
        background-color: #F4F4F4;
        margin-left: 9rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .set-content-container{
        margin-top: 13rem;
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
    .easy-operate-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding-left: 23rem;

    }
    .on-set-image{
        width: 1000px;
        height: 580px;
        border-radius: 8px;
        background-color: #F4F4F4;
        margin-left: 9rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .set-content-container{
        margin-top: 13rem;
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
    .easy-operate-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding-left: 15rem;
    }
    .on-set-image{
        width: 1000px;
        height: 580px;
        border-radius: 8px;
        background-color: #F4F4F4;
        margin-left: 9rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .set-content-container{
        margin-top: 13rem;
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
    .easy-operate-content{
        display: grid;
        grid-template-columns: 1fr 2fr;

    }
    .on-set-image{
        width: 1000px;
        height: 580px;
        border-radius: 8px;
        background-color: #F4F4F4;
        margin-left: 9rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .set-content-container{
        margin-top: 13rem;
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
    .easy-operate-content{
        display: grid;
        grid-template-columns: 1fr 2fr;

    }
    .on-set-image{
        width: 780px;
        height: 480px;
        border-radius: 8px;
        background-color: #F4F4F4;
        margin-left: 9rem;
    }
    .title-content{
        margin-top: 3rem;
    }
    .set-content-container{
        margin-top: 8rem;
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
    .easy-operate-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .title-content{
        margin-top: 3rem;
    }
    .on-set-image{
        width: 780px;
        height: 480px;
        border-radius: 8px;
        background-color: #F4F4F4;
        margin-left: 6rem;
    }
    .set-content-container{
        margin-top: 5rem;
        margin-left: 4.3rem;
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
    .easy-operate-content{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .title-content{
        margin-top: 3rem;
    }
    .on-set-image{
        width: 680px;
        height: 380px;
        border-radius: 8px;
        background-color: #F4F4F4;
        margin-left: 6rem;
    }
    .set-content-container{
        margin-top: 5rem;
        margin-left: 4.3rem;
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
   
    .on-set-image{
        width: 580px;
        height: 380px;
        border-radius: 8px;
        background-color: #F4F4F4;
        text-align: center;
        margin: auto;
    }
    .title-content, .desc-content{
        margin-left: 1.5rem;
    }
 
    .content-container{
        margin-top: 1rem;
        margin-left: 6rem;
        margin-right: 8px;
    }
    .test-img{
        display: none;
    }
}

@media only screen and (max-width: 600px){
    .img-container-pc{
        display: none;
    }
   
    .on-set-image{
        width: 360px;
        height: 200px;
        border-radius: 8px;
        background-color: #F4F4F4;
        text-align: center;
        margin: auto;
    }
    .title-content, .desc-content{
        margin-left: 1.5rem;
    }
 
    .content-container{
        margin-top: 1rem;
        margin-left: 8px;
        margin-right: 8px;
    }
    .test-img{
        display: none;
    }
}
</style>