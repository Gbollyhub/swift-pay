import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import url from '../url'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    user: [],
    transactions:[]
  },
  getters:{
    getUser(state) {
    return state.user
    },
    getTransactions(state) {
      return state.transactions
      },
  },
  mutations: {
    setUser(state, payload){
      return state.user = payload
    },
    setTransaction(state, payload){
      return state.transactions = payload
    }
  },
  actions: {
    async getProfile({commit, dispatch}){
      const token = localStorage.getItem('token');
      const user = await axios.get(`${url}/profile`, { headers: { 'Authorization': `Bearer ${token}` } })
      commit('setUser', user.data)
    },
    async getTransaction({commit, dispatch}){
      const token = localStorage.getItem('token');
      const transaction = await axios.get(`${url}/transactions`, { headers: { 'Authorization': `Bearer ${token}` } })
      const tran = transaction.data
      const newTran = tran.sort(function(a, b) {
        var c = new Date(a.createdAt);
        var d = new Date(b.createdAt);
        return d-c;
    });
       commit('setTransaction', newTran)
    }

  }

})
