<template>
  <div class="big">
    <div class="container">
<div class="navigation">
  <div class="menu-toggle"></div>
  <ul class="list">
    <li class="list-item active" style="--color:#1BC23E"><router-link to="/">
      <span class="icon">
        <i class="bi bi-house-door"></i>
      </span>
      <span class="text">Home</span>
      </router-link></li>
      <li class="list-item" style="--color:#1BC23E"><router-link to="/products">
        <span class="icon">
          <i class="bi bi-tree"></i>
        </span>
        <span class="text">Products</span>
        </router-link></li>
    <li class="list-item" style="--color:#1BC23E"><router-link to="/About">
      <span class="icon">
        <i class="bi bi-info-circle"></i>
      </span>
      <span class="text">About</span>
      </router-link></li>
    <li class="list-item" style="--color:#1BC23E"><router-link to="/contact">
      <span class="icon">
        <i class="bi bi-ui-checks"></i>
      </span>
      <span class="text">Contact</span>
      </router-link></li>
      <!-- <li class="list-item" style="--color:#1BC23E"><router-link to="/cart">
        <span class="icon">
          <i class="bi bi-bag-heart"></i>
        </span>
        <span class="text">My Cart</span>
        </router-link></li> -->
        <li class="list-item" style="--color:#1BC23E"><router-link to="/admin">
        <span class="icon">
          <i class="bi bi-archive"></i>
        </span>
        <span class="text">Admin</span>
        </router-link></li>
      <li class="list-item" style="--color:#1BC23E"><router-link to="/login">
        <span class="icon">
          <i class="bi bi-door-open"></i>
        </span>
        <span class="text">Login/Sign Up</span>
        </router-link></li>
    </ul>
  </div>
</div>
  </div>

    <div class="small">
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li><router-link class="menu__item" to="/">Home</router-link></li>
          <li><router-link class="menu__item" to="/products">Products</router-link></li>
          <li><router-link class="menu__item" to="/about">About</router-link></li>
          <li><router-link class="menu__item" to="/contact">Contact</router-link></li>
          <!-- <li><router-link class="menu__item" to="/cart">Cart</router-link></li> -->
          <li><router-link class="menu__item" to="/Admin">Admin</router-link></li>
          <li><router-link class="menu__item" to="/login">Log in/ Sign in</router-link></li>
        </ul>
      </div>
    </div>

    
</template>

<script scoped>
export default {
  data() {
    return {

    }
  },
  mounted() {
     const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = () => {
  navigation.classList.toggle('open');
}

const listItems = document.querySelectorAll('.list-item');
listItems.forEach(item => {
  item.onclick = () => {
    listItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  }
})
  }
}
</script>

<style scoped>

.small{
  display: none
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.navigation {
  position: fixed;
  inset: 20px 0 20px 20px;
  width: 75px;
  min-height: 500px;
  background: #fff;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation.open {
  width: 250px;
  z-index: 100;
}

.navigation .menu-toggle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}

.navigation .menu-toggle::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(-8px);
  transition: 0.5s;
}

.navigation.open .menu-toggle::before {
  transform: translateY(0) rotate(45deg);
}

.navigation .menu-toggle::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(8px);
  transition: 0.5s;
  box-shadow: 0 -8px 0 #333;
}

.navigation.open .menu-toggle::after {
  transform: translateY(0) rotate(-45deg);
  box-shadow: none;
}

.navigation ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}


.navigation ul li {
  list-style: none;
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.5s;
}

.navigation ul li.active {
  transform: translateX(30px);
}

.navigation.open ul li.active {
  transform: translateX(10px);
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.navigation {
  position: fixed;
  inset: 20px 0 20px 20px;
  width: 75px;
  min-height: 500px;
  background: #fff;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation.open {
  width: 250px;
}

.navigation .menu-toggle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}

.navigation .menu-toggle::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(-8px);
  transition: 0.5s;
}

.navigation.open .menu-toggle::before {
  transform: translateY(0) rotate(45deg);
}

.navigation .menu-toggle::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(8px);
  transition: 0.5s;
  box-shadow: 0 -8px 0 #333;
}

.navigation.open .menu-toggle::after {
  transform: translateY(0) rotate(-45deg);
  box-shadow: none;
}

.navigation ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}


.navigation ul li {
  list-style: none;
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.5s;
}

.navigation ul li.active {
  transform: translateX(30px);
}

.navigation.open ul li.active {
  transform: translateX(10px);
}

.navigation ul li a {
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 55px;
  height: 55px;
  line-height: 60px;
  color: #222;
  border-radius: 10px;
  font-size: 1.75em;
  transition: 0.5s;
}

.navigation ul li.active a .icon {
  color: #fff;
  background: var(--color);
}

.navigation ul li a .icon::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: var(--color);
  filter: blur(8px);
  opacity: 0;
  transition: 0.5s;
}

.navigation ul li.active a .icon::before {
  opacity: 0.5;
}

.navigation ul li a .text {
  position: relative;
  padding: 0 15px;
  height: 60px;
  display: flex;
  align-items: center;
  color: #333;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}

.navigation.open ul li a .text {
  opacity: 1;
  visibility: visible;
}

.navigation ul li.active a .text {
  color: var(--color);
}

@media only screen and (max-width: 590px){
  .big{
    display: none;
  }
  .small{
    display: block;
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');

  #menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #0B0B0B;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #0E9E2C;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
}
.menu__item {
  display: block;
  padding: 12px 24px;
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}
.menu__item:hover {
  background-color: #1BC23E;
}
}

</style>
