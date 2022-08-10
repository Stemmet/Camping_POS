<template>
 <div class="landing">
  <div class="wrapper">
    <div class="container">
      <h1>Camping Tech</h1>
    </div>
  </div>
 </div>
<div>
  
</div>
<div id="back">
  <div class="backLeft"></div>
</div>

<div class="topProducts">

</div>
<div id="slideBox">
  <div class="topLayer">
    <div class="right">
      <div class="content">
        <h2>Best Sellers</h2>
          <div class="container">
    <div class="card">
      <h3 class="title">Card 1</h3>
    </div>
    <div class="card">
      <h3 class="title">Card 2</h3>
    </div>
    <div class="card">
      <h3 class="title">Card 3</h3>
    </div>
    <div class="card">
      <h3 class="title">Card 4</h3>
    </div>
        </div>
        <div>
          <router-link to="/products"><button id="login" type="submit">Shop Now</button></router-link>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="carousel">
  <carousel></carousel>
</div>
</template>

<script>
import carousel from '../components/carousel.vue'

  export default{
    name: 'app',
    components:{
      carousel,
    }
  }
</script>

<style>
.landing {
  background-image: url(https://cdn.wallpapersafari.com/91/55/wVnSEW.jpg);
  background-size: cover ;
  background-position:top;
  background-repeat: no-repeat;
  width: 177vh;
  height: 95vh; 
  margin-bottom: 10px;
  /* filter: grayscale(); */
}

:root {
  --color-1: #FFF;
  --color-2: #FFF;
  --color-3: #FFF;
  --color-4: #FFF;
  --color-5: #FFF;
}


.wrapper {
  line-height: 1;
  min-height: 100%;
  display: grid;
  place-items: center;
  /* min-height: calc(100vh - 16px); */
}

h1 {
  font-family: "Poppins", sans-serif;
  font-size: 15vw;
  font-weight: 800;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
  margin: auto;
  text-transform: uppercase;
  background: linear-gradient(219deg, 
    var(--color-1) 19%, 
    transparent 19%,transparent 20%, 
    var(--color-2) 20%, var(--color-2)  39%,
    transparent 39%,transparent 40%, 
    var(--color-3) 40%,var(--color-3) 59% ,
    transparent 59%,transparent 60%, 
    var(--color-4) 60%, var(--color-4) 79%,
    transparent 79%, transparent 80%, 
    var(--color-5) 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.container {
  /* padding: 1.5rem;    */
  text-align: center;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 6.5rem;
  }
}

body {
  height: 100%;
  overflow-x: hidden;
  width: 100% !important;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
    /* background: #f2eee3; */
}
.backLeft {
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  background: #e74c3c url(https://images5.alphacoders.com/555/thumb-1920-555700.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

#back {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -999;
  overflow-x: hidden;
}

#slideBox {
  width: 76.2vh;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: 50%;
  position: absolute;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.topLayer {
  width: 200%;
  height: 100%;
  position: relative;
  left: 0;
  left: -100%;
}
.right {
  width: 50%;
  height: 100%;
  background: #FFF;
  right: 0;
  position: absolute;
}
.content {
  width: 250px;
  margin: 0 auto;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -200px;
}
.content h2 {
  color: #1BC23E;
  font-weight: 300;
  font-size: 35px;
}

button {
  background: #1BC23E;
  padding: 10px 16px;
  width:140px;
  font-weight: 600;
  text-transform:  uppercase;
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  letter-spacing: 0.5px;
  border-radius: 2px;
  
  border: 0;
  outline: 0;
  margin: 15px 15px 15px 0;
  transition: all 0.25s;
  justify-items: center;
}

/* button:hover {
  background: #0E9E2C;
  box-shadow: 0 4px 7px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
} */
.off {
  background: none;
  color: #1BC23E;
  box-shadow: none;
}

input {
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #45494C;
  font-size: 14px;
  color: #959595;
  padding: 8px 0;
  margin-top: 20px;
}

.container {
  width: 1000px;
  display: flex;
}
.card {
  display: flex;
  height: 280px;
  width: 130px;
  background-color: #2F363E;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem rgba(0, 0, 0,0.4);
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  cursor: pointer;
}
.card:not(:first-child) {
  margin-left: -50px;
}
.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}
.card:hover~.card {
  position: relative;
  left: 60px;
  transition: 0.4s ease-out;
}
.title{
  color: white;
  font-weight: 400;
  position: absolute;
  font-size: 36px;
  left: 20%;
  top: 30%;
}

.carousel{
  margin-top: 102.6vh;
}
/* .topProducts{
  margin-bottom: 10px;
  position: fixed;
} */
</style>
