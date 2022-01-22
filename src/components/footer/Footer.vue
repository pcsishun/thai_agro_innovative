<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="set-logo"><h4>LOGO</h4></div>
      <div class="set-ref-link">
        <a href="#" class="fa fa-facebook"></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style  scoped>
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
  margin-top: 2rem;
}
.set-logo-conatiner{
  margin-top: 1rem;
}
.set-ref-link{
  text-align: right;
  margin-right: 5rem;
}
</style>

 