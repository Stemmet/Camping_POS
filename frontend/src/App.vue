<template>
   <navbar></navbar>
  <router-view/>
  <FooterCom></FooterCom>
</template>

<script>
 import navbar from './components/navbar.vue'
 import footerCom from './components/footerCom.vue'
import FooterCom from './components/footerCom.vue'

  export default{
    name: 'App',
    components:{
    navbar,
    footerCom,
    FooterCom
}
  }
</script>

<style>
body{
  background-color: #1BC23E;
  padding: 20px 120px;
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

@media only screen and (max-width: 590px){
  body{
  padding: 20px 20px;
 }
}
</style>
