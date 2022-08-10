<template>
   <navbar></navbar>
  <router-view/>
</template>

<script>
 import navbar from './components/navbar.vue'

  export default{
    name: 'App',
    components:{
      navbar,
    }
  }
</script>

<style>
body{
  background-color: #1BC23E;
  padding: 20px 120px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  
}

@media only screen and (max-width: 590px){
  body{
  padding: 10px 20px;
 }
}
</style>
