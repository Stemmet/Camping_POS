import { createStore } from 'vuex'

const nodeEOMPURL = 'https://camping-pos.herokuapp.com/';
export default createStore({
  state: {
    products: [
      {name:'Banana Skins', price: 20, image:'https://i.ibb.co/L8Nrb7p/1.jpg'},
      {name:'Shiney Star', price: 40, image:'https://i.ibb.co/L8Nrb7p/1.jpg'},
      {name:'Green Shells', price: 60, image:'https://i.ibb.co/L8Nrb7p/1.jpg'},
      {name:'Red Shells', price: 80, image:'https://i.ibb.co/L8Nrb7p/1.jpg'}
    ]
    // users: null,
    // user: null,
    // products: null,
    // product: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
  },
  actions: {
    getProducts : async (context) => {
      fetch(nodeEOMPURL+'products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.commit('setProducts', data.results)
      })
    },
    login: async (context, payload)=> {
      const {email, user_password} = payload;

    }
  },
  modules: {
  }
})
