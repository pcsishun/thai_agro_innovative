<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="set-logo">
        <a href="#"><img width="150" height="70" src="../.././assets/tai-gray.png"></a>
        <div class="set-licens-container">
          <span>Term & Privacy</span>
          <span>&nbsp; ©2022 Thai Argo Innovative</span>
        </div>
      </div>
      <div class="set-ref-link">
        <a href="#"><img height="40" width="40" src="../.././assets/facebook.png"/></a>
        <a href="#"><img height="40" width="40" src="../.././assets/linkedin.png"/></a>
        <a href="#"><img height="40" width="40" src="../.././assets/youtube.png"/></a>
        <a href="#"><img height="40" width="40" src="../.././assets/github.png"/></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style  scoped>
.footer{
  font-family: 'Noto Sans Thai', sans-serif;
} 

  @media only screen and (min-width: 990px){
    .footer {
    position: absolute;
    bottom: 100;
    width: 100%;
    height: 90px;
    background-color: #f5f5f5;
    }

    .footer-container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 10px;
    }
  
  .set-logo{
    display: grid;
    grid-template-columns: 0.4fr 1fr;
  }
  .set-licens-container{
    margin-right: 3rem;
    margin-top: 1.5rem;
  }
  .set-logo> a  > img{
    margin-left: 60px;
  }

  .set-ref-link{
    text-align: right;
    margin-right: 5rem;
    margin-top: 1rem;
  }

  .set-ref-link > a > img {
    margin-left: 20px;
  }

}

@media only screen and (max-width: 990px){
  .footer {
    position: absolute;
    bottom: 100;
    width: 100%;
    height: 150px;
    background-color: #f5f5f5;
  }
  .footer-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
  }
 
 
  .set-logo> a > img{
    margin-left: 1.7rem;
  }
  .set-licens-container{
    margin-left: 2rem;
  }
  .set-ref-link{
    text-align: right;
    width: 80%;
  }

  .set-ref-link > a > img {
    margin-left: 20px;
    margin-top: 10px;
  }

}
</style>

 