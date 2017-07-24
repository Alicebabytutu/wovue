<template>
  <div class="findmore">
  		<find-more-header></find-more-header>
 		
 		<nav-tab></nav-tab>
  </div>
</template>

<script>
import NavTab from './NavTab'
import FindMoreHeader from './FindMore_components/FindMoreHeader'
export default {
  name: 'findmore',
  data () {
    return {
    
    
      }
  },
  components:{
  		FindMoreHeader
  }
  
  }
</script>

<style scoped>
	 
</style>
