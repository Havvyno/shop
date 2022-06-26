import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
  },
  getters: {
  },
  mutations: {
    mutationSetProducts(state, products)  {
      state.products = products
    },
    mutationAddProduct(state, id) {
      let result = state.products.find(function (item) {
        return item.id === id
      })
      if(state.basket.length) {
        let isProduct = false
        state.basket.find(function(item) {
          if(item.id === id) {
            isProduct = true
            item.amount++
          }
        })
        if(!isProduct) {
          state.basket.push(result)
        }
      } else {
        state.basket.push(result)
      }
    },
    mutationBuyProduct(state) {
      state.basket = []
    },
    mutationRemoveProduct(state, id) {
      let result = state.basket.findIndex(function (item) {
        return item.id === id
      })

      state.basket.splice(result, 1)
    }
  },
  actions: {
    getProducts({commit}) {
      let url = 'https://my-json-server.typicode.com/havvyno/demo/products'

      return axios (url, {
        method: "GET"
      })
      .then((products) => {
        commit('mutationSetProducts', products.data)
        return products
      })
      .catch((e) => {
        console.log(e)
        return e
      })
    }
  },
})
