<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.georgefisher.co.uk/templates/georgefisher.co.uk/_images/home/camping-home-tents.jpg" class="d-block " alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1596055746427-d5f61aa5df99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZyUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&w=1000&q=80" class="d-block " alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.tripsavvy.com/thmb/CZWq4RpmgQNtzdzB6tQpSFMAAVA=/1106x1106/smart/filters:no_upscale()/golden-sunrise-illuminating-tent-camping-dramatic-mountain-landscape-panorama-scotland-526564828-123a70a538f84495addd791f14fd7385.jpg" class="d-block " alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style scoped>
#carouselExampleCaptions{
    width: 100.8vh;
    margin-bottom: 10px;
    z-index: 0;
}
img {
    height: 30vh;
    width: 100.8vh;
    object-fit: cover;
    /* object-position: 70%; */
}

</style>