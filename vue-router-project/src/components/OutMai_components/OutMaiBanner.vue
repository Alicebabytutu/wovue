<template>
	<div class="swiper-container outmai-banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="classify in classifies">
				<div class="classify" v-for="data in classify">
					<img src="/static/classify.jpeg" />
					<span v-text="data.name"></span>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				classifies:[],
				swiper:null
			}
		},
		methods:{
			getClassify(){
				var that=this;
				axios.get('https://mainsite-restapi.ele.me/shopping/v2/entries?templates[]=main_template',{
					params:{
//						  latitude:40.11722,
//						  longitude:116.25003
					}
				})
				.then(function(response){
					var data=response.data[0].entries  
				    that.classifies=[];
				    for(var i=0;i<data.length;i++){
				    	if(i%8==0){
				    		that.classifies.push([])
				    	}
				    }
				    
				   for(var i=0;i<data.length;i++){
				    	if(i%8==0){
				    		that.classifies.push([])
				    	}
				    }
				   for(var i=0;i<data.length;i++){
				    	var index=Math.floor(i/8);
				    	that.classifies[index].push(data[i])
				    }
				   console.log(that.classifies)
				  
				  
				})
			}
		},
		watch:{
//			position:{
//				handler:function(val,oldVal){
//					this.getClassify()
//				},
//				deep:true
//			}
		},
		mounted(){
			this.swiper=new Swiper(".outmai-banner")
		
		},
		updated(){
			this.swiper.update()
		},
		computed:{
			...mapState(['position'])
		}
	}
	
</script>

<style scoped lang="scss">
	.outmai-banner{
			.swiper-slide{
				display:flex;
				flex-wrap:wrap;
				.classify{
					width:25%;
					display:flex;
					flex-flow:column;
					align-items:center;
				}
			}
		.classify{
			img{
				width:60%;
			}
			span{
				font-size:12px;
			}
		}
	}
</style>


<!--https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=40.11722&longitude=116.25003&templates[]=main_template-->