<template>
  <div class="contact-container">
      <div class="set-title">
          <h4>ติดต่อเจ้าหน้าที่ฝ่ายขาย</h4>
          </div>
      <div class="contact-content">
          <div class="set-grid">
                <div class="label-title">
                    <i class='fas fa-address-card' style='font-size:30px'></i>
                </div>
                <div class="label-text">
                    ธนพล ชินกังวาลวงศ์ 
                </div>
                <div class="label-title">
                    <i class='fas fa-compass' style='font-size:30px'></i>
                </div>
                <div class="label-text">
                    ที่อยู่ : 305/1 หมู่ 6 ต.หนองจ๊อม อ.สันทราย จ.เชียงใหม่ 50210
                </div>
                <div class="label-title">
                    <i class='fas fa-phone' style='font-size:30px'></i>
                </div>
                <div class="label-text">
                    +66 83 478 4611
                </div>
                <div class="label-title">
                    <i class='fas fa-envelope-open' style='font-size:30px'></i>
                </div>
                <div class="label-text">
                   thanapol@thaiagroinnovative.com
                </div>
          </div>
      </div>
      <div class="btn-home-page">
          <router-link to="/">
              <button class="btn btn-secondary"><i class="fa fa-home" style="font-size:20px"></i></button>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .btn-home-page{
        margin-top: 40px;
    }
    .btn{
        border-radius: 8px;
        width: 100px;
    }
    .contact-container{
        text-align: center;
        width: 70%;
        margin: auto;
        margin-bottom: 7rem;
        color: rgb(103, 103, 103)
    }

    .set-title{
        margin-top: 3rem
    }

    .set-grid{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .set-grid > div{
        margin-top: 20px;
    }


    .label-text{
        text-align: left;
        padding-left: 50px;
    }

    .contact-content{
        border: 1px solid rgb(215, 215, 215);
        margin-top: 35px;
        border-radius: 28px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

@media  screen  and (max-width: 990px){
    .contact-container{
        text-align: center;
        width: 90%;
        margin: auto;
        margin-bottom: 7rem;
        color: rgb(103, 103, 103)
    }

    .set-title{
        margin-top: 5rem
    }

    .set-grid{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .set-grid > div{
        margin-top: 20px;
    }


    .label-text{
        text-align: left;
        padding-left: 50px;
    }

    .contact-content{
        border: 1px solid rgb(215, 215, 215);
        margin-top: 35px;
        border-radius: 28px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
}

@media  screen  and (max-width: 600px){
    .contact-container{
        text-align: center;
        width: 90%;
        margin: auto;
        margin-bottom: 7rem;
        color: rgb(103, 103, 103)
    }

    .set-title{
        margin-top: 5rem
    }

    .set-grid{
        display: grid;
        grid-template-columns: 1fr 3fr;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .set-grid > div{
        margin-top: 20px;
    }


    .label-text{
        text-align: center;
        padding-left: 1px;
        margin-right: 6px;
    }

    .contact-content{
        border: 1px solid rgb(215, 215, 215);
        margin-top: 35px;
        border-radius: 28px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
}
</style>