<template>
		<div class="swiper-container header-nav">
 				  <div class="swiper-wrapper">
					    <div class="swiper-slide">新闻</div>
					    <div class="swiper-slide">财经</div>
					    <div class="swiper-slide">娱乐</div>
					    <div class="swiper-slide">体育</div>
					    <div class="swiper-slide">订阅</div>
					    <div class="swiper-slide">微博</div>
					    <div class="swiper-slide">空间</div>
					    <div class="swiper-slide">书城</div>
                  </div>
 		</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				navs:[]
			}
		},
		beforeMount(){
			var that=this;
	     	axios.get('',{
			params:{
					
				}
			})
			.then(function(response){
				that.navs=response.data
			})
			.catch(function(err){
				console.log(err);
			})
		},
		mounted(){
		new Swiper(".header-nav",{
			freeMode :true,
			slidesPerView:'auto',
			freeModeSticky:true,
		})
		}
	}
</script>
<style scoped>
	.swiper-slide {
		padding: 0 20px;
		width:auto;
	}
</style>
<!--https://mainsite-restapi.ele.me/shopping/v3/hot_search_words-->