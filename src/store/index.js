import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wasSearching: false,
  },
  mutations: {
    savePresents(state){
      state.wasSearching = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
