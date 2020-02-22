import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    userId: "1",
    lists: [],
    username: "用户名"
  },
  mutations: {
    increate1 () {
      this.state.count++
    },
    addItem (state, value) {
      state.lists.push(value)
    },
    setUserId(state,id){
      this.state.userId = id
    },
    setUserName(state,username){
      this.state.username = username
    }
  },
  getters: {
  },
  actions: {},
  modules: {}
})
