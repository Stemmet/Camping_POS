<template>
  <div class="landing">
    <h1>CAMPING TECH</h1>
 </div>
<div>
  
  </div>
  <div class="big">
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
      </div>

<div class="big">
  <div class="two">
    <div id="back">
      
      <div class="topProducts">
        
        </div>
  <div id="slideBox">
    <div class="topLayer">
      <div class="right">
        <div class="content">
          <h2>Come find us...</h2>
            <div class="container">
              
              </div>
          <div>
            <router-link to="/products"><button id="login" type="submit">About us</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  <div class="carousel">
    <carousel></carousel>
  </div>

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.29342152615!2d18.490473615169563!3d-33.98499628062438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Imam%20Haron%20Rd%2C%20Lansdowne%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1660224447011!5m2!1sen!2sza" width="760" height="410" style="border:0; margin-bottom: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

<div class="small">

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

<style scoped>

.landing {
  background-image: url(https://cdn.wallpapersafari.com/91/55/wVnSEW.jpg);
  background-size: cover ;
  background-position:center;
  background-repeat: no-repeat;
  width: 177vh;
  height: 50vh; 
  margin-bottom: 10px;
  justify-content: center;
}

.landing h1{
  font-size: 11rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
}

.backLeft {
  position: absolute;
  left: 0;
  width: 50%;
  height: 81vh;
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
  margin-bottom: 10px;
}

#slideBox {
  width: 76.2vh;
  height: 81vh;
  /* height: 100%; */
  overflow: hidden;
  margin-left: 50%;
  position: absolute;
  

}
.topLayer {
  width: 200%;
  height: 100%;
  position: absolute;
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
  font-family: "Poppins", sans-serif;
  border: 0;
  outline: 0;
  margin: 15px 15px 15px 0;
  transition: all 0.25s;
  justify-items: center;
}

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
  font-family: "Poppins", sans-serif;
  position: absolute;
  font-size: 36px;
  left: 20%;
  top: 30%;
}
  .two{
    margin-top: 83.6vh;
  }

.carousel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 200px 200px;
}

.carouInfo{
  background-color: #FFF;
  width: 75vh;
  height: 60vh;
  position: relative;
  bottom: 61.3vh;
  /* left: 101vh; */
}



@media only screen and (max-width: 590px){
  .big{
      display: none;
  }

  .landing{
    width: 42vh;
    height: 20vh; 
    margin-bottom: 10px;
    color: #fff;
  }


}
  
</style>
