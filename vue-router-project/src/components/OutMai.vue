<template>
  <div class="navtab">
 		<out-mai-header :position="position"></out-mai-header>
 		<out-mai-banner></out-mai-banner>
 		<nav-tab></nav-tab>
  </div>
</template>

<script>
	import OutMaiHeader from './OutMai_components/OutMaiHeader'
	import OutMaiBanner from './OutMai_components/OutMaiBanner'
	import NavTab from './NavTab'
	import {mapstate} from 'vuex'
export default {
  name: 'outmai',
  data () {
    return {
    		position:{
    				latitude:40.11722 ,
    				longitude:116.25003,
    				address:'北京科技职业技术学院'
    		}
      }
  },
  components:{
  	OutMaiHeader,
  	OutMaiBanner
  }
  }
</script>

<style scoped>
	 
</style>
