<template>
  <header class="outmai-header">
 			<p v-cloak class="header-info">
 				{{position.address}}
 				<span>{{tempture+'°'}}</span>
 			</p>
 			
 			<input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="search-inp">
 			<out-mai-header-nav></out-mai-header-nav>
 		
  </header>
</template>

<script>
	import OutMaiHeaderNav from './OutMaiHeaderNav'
export default {
  name: 'outmai-header',
  props:['position'],
  data () {
    return {
    		
    		tempture:0
      }
  },
  methods:{
  	
  	getWeather(){
  		      var that=this;
  		    	this.$http.get("https://mainsite-restapi.ele.me/bgs/weather/current",{
  		    		params:{
  		    					 latitude:this.position.latitude ,
    			         	 longitude:this.position.longitude
  		    		}
  	}).then((res)=>{
  		  that.tempture=res.data.temperature
  	})
  	}
  },
  mounted(){
  			this.getWeather()
  },
  components:{
  		OutMaiHeaderNav
  }
  }
</script>

<style scoped lang="scss">
	 .outmai-header{
	 	  padding: .266667rem .373333rem;
      background-image: -webkit-linear-gradient(left,#0af,#0085ff);
      background-image: linear-gradient(90deg,#0af,#0085ff);
      color: #fff;
      height: 15.253333rem;
	 }
	 .header-info{
	 		display:flex;
	 		justify-content:space-between;
	 		padding:5px 0px;
	 }
	 .search-inp{
	 		    display: block;
          margin: .2rem 0;
          width: 100%;
          height: 3.96rem;
          text-align: center;
          border-radius: .96rem;
          box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
          color: #333;
          font-size: 1.346667rem;
          border:none;
          outline:none;
	 }
</style>



