import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import blog from './modules/blogs'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    blog
  }
})
