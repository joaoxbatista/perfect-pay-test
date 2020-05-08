import Vue from 'vue'
import Vuex from 'vuex'
import balance from './balance'
import product from './product'


Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      balance,
      product
    },
  })

  return Store
}
