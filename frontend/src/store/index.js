import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {name:'Banana Skins', price: 20, image:'https://i.ibb.co/L8Nrb7p/1.jpg'},
      {name:'Shiney Star', price: 40, image:'https://i.ibb.co/L8Nrb7p/1.jpg'},
      {name:'Green Shells', price: 60, image:'https://i.ibb.co/L8Nrb7p/1.jpg'},
      {name:'Red Shells', price: 80, image:'https://i.ibb.co/L8Nrb7p/1.jpg'}
    ]
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
