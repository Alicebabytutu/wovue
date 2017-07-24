<template>
  <footer class="navtab">
 			<router-link to="/outmai"><span class="iconfont icon-element"></span>首页</router-link>
 			<router-link to="/findmore"><span class="iconfont icon-faxian"></span>分类</router-link>
 			<router-link to="/order"><span class="iconfont icon-dingdan3"></span>购物车</router-link>
 			<router-link to="/mine"><span class="iconfont icon-wode"></span>我的</router-link>
  </footer>
</template>

<script>
	import Vue from 'vue'
const NavTab= {
  name: 'navtab',
  data () {
    return {
    
      }
   }
  }
Vue.component('nav-tab',NavTab)
export default NavTab
</script>
<style scoped lang="scss">
   @import '../styles/virtual.scss';
	 .navtab{
	 	  width:100%;
	 	  height:1.3333rem;
	 	  position:absolute;
	 	  bottom:0;
	 	  left:0;
	 	  display:flex;
	 	  box-shadow:-12px -27px 2px -5px #eee;
	 	  a{
	 	  	flex-grow:1;
	 	  	flex-shrink:1;
	 	  	display:flex;
	 	  	flex-flow:column;
	 	  	justify-content:space-around;
	 	  	align-items:center;
	 	  	font-size:0.8em;
	 	  	color:#666;
	 	  	span{
	 	  		font-size:1.8em;
	 	  	}
	 	  	&.router-link-active{
	 	  		color:$base-color;
	 	  	}
	 	  }
	 }
	 body{
	 	font-size:12px;
	 }
</style>
