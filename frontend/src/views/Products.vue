<template>
<section class="section-products">
		<div class="container">
				<div class="row justify-content-center text-center">
						<div class="col-md-8 col-lg-6">
								<div class="header">
										<!-- <h3>Featured Product</h3> -->
										<h1>Products</h1>
								</div>
						</div>
				</div>
				<div class="row">
						<SingleProduct></SingleProduct>
				</div>
		</div>
</section>
</template>

<script>
import singleProduct from '../components/singleProduct.vue'
import SingleProduct from '../components/singleProduct.vue';


export default {
    data() {
        return {
            name: "app",
            components: {
                singleProduct,
            }
        };
    },
    mounted() {
    },
    components: { SingleProduct }
}
</script>

<style scoped>
h1{
  font-size: 11rem;
  color: #fff;
  font-weight: 500;
  text-align: center;
}

.section-products .header {
    margin-bottom: 50px;
}

.section-products .header h3 {
    font-size: 1rem;
    color: #fe302f;
    font-weight: 500;
}

.section-products .header h2 {
    font-size: 2.2rem;
    font-weight: 400;
    color: #444444; 
}
</style>