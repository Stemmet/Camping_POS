import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getProducts : async (context) => {
      fetch("")
      .then((res) => res.json())
      .then((data) => {
        data.products = context.state.products
      })
    }
  },
  modules: {
  }
})
