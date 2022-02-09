<template>
  <div class="header-container">
      <div class="on-set-content-fix">
          <img class="set-main-img" src="../../../assets/header_vison.png"/>
          <div class="on-set-content">
            <div class="set-vison">
                <h2>“เราจะเป็นผู้นำด้านนวัตกรรมการเกษตร<br/>ในประเทศไทยที่ง่ายและเข้าถึงได้”</h2>
            </div>
            <div class="set-logo">
                <img height="120" width="100" src="../../../assets/Logo_white.png">
            </div>
            <div class="set-more-over">
                <a href="#is-set-vison" style="color: white; text-decoration: white; "><p>อ่านเพิ่มเติม</p></a>
                <div class="vector-down">
                    <a href="#is-set-vison" style="color: white;">
                        <i class="fa fa-angle-down"></i>
                    </a>
                </div>
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
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        top: 44%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 30%;
        padding-bottom: 20%;
    }
    .set-vison > h2{
                animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        font-size: 550%;
    }
    .set-logo{
        padding-top: 20%;
        padding-bottom: 20%;
    }
    .set-logo > img{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        height: 20%;
        width: 20%;
    }
    .set-more-over{
        color: white;
    }
    p{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        font-size: 400%;
    }
    i{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        font-size: 450%;
        font-weight: bold;
    }

    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
}

@media screen and (min-width: 3000px) and (max-width: 3500px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 30%;
        padding-bottom: 20%;
    }
    .set-vison > h2{
        font-size: 550%;
    }
    .set-logo{
                animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        padding-top: 10%;
        padding-bottom: 10%;
    }
    .set-logo > img{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 20%;
        width: 20%;
    }
    .set-more-over{
        color: white;
    }
    p{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 400%;
    }
    i{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 450%;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }

    }
}

@media screen and (min-width: 2500px) and (max-width: 3000px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        width: 95%;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .set-vison > h2{
                animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 60px;
    }
    .set-logo{
        padding-top: 240px;
        padding-bottom: 220px;
    }
    .set-logo > img{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 220px;
        width: 200px;
    }
    .set-more-over{
        color: white;
    }
    p{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 50px;
    }
    i{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 60px;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
}
@media screen and (min-width: 2000px) and (max-width: 2500px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        width: 95%;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .set-vison > h2{
                animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 60px;
    }
    .set-logo{
        padding-top: 150px;
        padding-bottom: 150px;
    }
    .set-logo > img{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 220px;
        width: 200px;
    }
    .set-more-over{
        color: white;
    }
    p{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 50px;
    }
    i{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 60px;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
}
@media screen and (min-width: 1401px) and (max-width: 2000px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        width: 95%;
        top: 59%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .set-vison > h2{
        animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 45px;
    }
    .set-logo{
        
        padding-top: 40px;
        padding-bottom: 60px;
    }
    .set-logo > img{
            animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 170px;
        width: 140px;
    }
    .set-more-over{
        color: white;
    }
    p{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 30px;
    }
    i{
                animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 40px;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
}

 @media screen and (min-width: 1310px) and (max-width: 1400px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        width: 95%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .set-vison > h2{
        animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        font-size: 40px;
    }
    .set-logo{
        padding-top: 40px;
        padding-bottom: 60px;
    }
    .set-logo > img{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 170px;
        width: 140px;
    }
    .set-more-over{
        color: white;
    }
    p{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 30px;
    }
    i{
    animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 40px;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
 }

 @media  screen and (min-width: 990px) and (max-width: 1309px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        width: 99%;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .set-vison > h2{
        animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 34px;
    }
    .set-logo{
        padding-top: 40px;
        padding-bottom: 60px;
    }
    .set-logo > img{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 120px;
        width: 80px;
    }
    .set-more-over{
        color: white;
    }
    p{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 20px;
    }
    i{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 30px;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
 }

 @media only screen and (min-width: 600px) and (max-width: 990px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        width: 99%;
        top: 51%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
 
    .set-vison{
        padding-top: 30px;
        padding-bottom: 30px;
    }
    .set-vison > h2{
        animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 23px;
    }
    .set-logo{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .set-logo > img{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 80px;
        width: 60px;
    }
    .set-more-over{
        color: white;
    }
    p{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 15px;
    }
    i{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 20px;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
        
    }
 }


@media only screen and (max-width: 600px){
    .header-container{
        text-align:center ;
        margin-bottom: 60px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }
    .on-set-content-fix{
        position: relative;
    }

    .on-set-content{
        position:absolute;
        width: 99%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 10px;
    }
/*  
    .set-vison{
        padding-top: 30px;
        padding-bottom: 30px;
    } */
    .set-vison > h2{
        animation: fadetitle ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 18px;
    }
    .set-logo{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .set-logo > img{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        height: 40px;
        width: 30px;
    }
    .set-more-over{
        color: white;
    }
    p{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 10px;
    }
    i{
        animation: fadeword ease 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        font-size: 10px;
        font-weight: bold;
    }
    @keyframes fadetitle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }    
    }

    @keyframes fadeword {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }

    }
}
 
</style>