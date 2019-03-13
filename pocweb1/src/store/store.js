import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSpinner:1
  },
  mutations: {
    establecerSpinner: function (state, showSpinner) {
      state.showSpinner = showSpinner;
    }
  }
})
