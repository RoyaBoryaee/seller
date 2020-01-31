import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    accessToken: localStorage.getItem('accessToken') || '',
  },
  mutations: {
    loginStop: (state, payload) => {
      state.accessToken = payload.token;
      state.currentUser = payload;
    },
  },
  getters: {
    isLoggedIn: state => !!state.accessToken,
  },
  actions: {
    getSalesmen({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/getall')
          .then(response => {
            commit('LOAD_SALESMEN', response);
            resolve(response.data);
          })
          .catch(reject);
      });
    },
    doLogin({ commit }, loginData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/login/', loginData)
          .then(response => {
            localStorage.setItem('accessToken', response.data.token);
            commit('loginStop', response.data);

            resolve(response.data);
          })
          .catch(reject);
      });
    },
    doSignup(signupData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/register/', signupData)
          .then(response => {
            resolve(response.data);
          })
          .catch(reject);
      });
    },
  },
});
