<template>
    <div class="easy-install-container">
        <div class="easy-install-content">
            <div class="img-container-mobile">
                <div class="on-set-image">
                    
                </div>
            </div>
            <div class="content-container">
                <div class="set-content-container">
                    <div class="test-img"></div>
                    <div class="title-content">
                        <h4>Know down system <br>Easy installation</h4>
                    </div>
                    <div class="desc-content">
                        <h6>Detail description</h6>
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
@media screen and (min-width: 1800px){
    .img-container-mobile{
        display: none;
    }
    .easy-install-content{
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
        background-color: rgb(187, 187, 187);
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-left: 10rem;
    }
}

@media  screen and (min-width: 990px) and (max-width: 1800px){
    .img-container-mobile{
        display: none;
    }
    .easy-install-content{
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
        margin-top: 8rem;
        margin-left: 4.3rem;
    }
    .test-img{
        background-color: rgb(187, 187, 187);
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-left: 10rem;
    }
}

@media only screen and (max-width: 990px){
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
 
    .content-container{
        margin-top: 1rem;
        margin-left: 8px;
        margin-right: 8px;
    }
}
</style>