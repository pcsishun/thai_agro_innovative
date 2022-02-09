<template>
  <div class="header-container">
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
                      <i class="fa fa-angle-down" style="font-size:36px"></i>
                  </a>
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
.header-container{
    text-align:center ;
    margin-bottom: 140px;
}
.set-main-img{
    width:  100%;
    height: 100%;
}

.on-set-content{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.set-vison{
    padding-bottom: 40px;
}
.set-logo{
    padding-bottom: 85px;
}
.set-more-over{
    color: white;
}
@media only screen and (min-width: 601px)and (max-width: 989px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }

    .on-set-content{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .set-vison{
        padding-bottom: 40px;
    }
    .set-logo{
        padding-bottom: 85px;
    }
    .set-more-over{
        color: white;
    }
    br{
        display: none;
    }
}
@media only screen and (max-width: 600px){
    .header-container{
        text-align:center ;
        margin-bottom: 140px;
    }
    .set-main-img{
        width:  100%;
        height: 100%;
    }

    .on-set-content{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }
    .set-vison{
        padding-bottom: 40px;
    }
    .set-logo{
        padding-bottom: 85px;
    }
    .set-more-over{
        color: white;
    }
    br{
        display: none;
    }
}
 
</style>