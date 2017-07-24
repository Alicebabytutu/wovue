<template>
  <div id="app">
  	<transition mode="out-in" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
    <router-view></router-view>
   </transition>
   
  </div>
</template>

<script>
	
export default {
  name: 'app'
 
}
</script>

<style lang='scss'>
   @import './styles/virtual.scss';
   @import './styles/reset.scss';
    html{
    	font-size:2vw;
    }
		html,body,#app{
			height:100%;
			margin:0;
			padding:0;
			position:relative;
		}
		[v-cloak]{
			visibility:hidden;
		}
</style>
