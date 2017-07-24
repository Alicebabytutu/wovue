
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	
}

const getters={
	
}


const mutations={
	addNumber(){
		console.log("2.mutation的方法被actions调用")
		console.log("3.mutation更改了state")
		state.count++
	},
	reduceNumber(){
		state.count--
	}
}

const actions={
	addNumber({commit}){
		console.log("1.view调用actions的方法")
		commit('addNumber')
	},
	reduceNumber({commit}){
		commit('reduceNumber')
	}
}

const store =new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})


export default store