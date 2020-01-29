import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null,
  },
  mutations: {
    loginStart: state => (state.loggingIn = true),
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    logout(state) {
      state.accessToken = '';
    },
  },
  getters: {
    isLoggedIn: state => !!state.accessToken,
  },
  actions: {
    doLogin({ commit }, loginData) {
      console.log(loginData);
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/login/', loginData)
          .then(response => {
            localStorage.setItem('accessToken', response.data.token);
            commit('loginStop', null);
            commit('updateAccessToken', response.data.token);
            resolve(response);
          })
          .catch(reject);
      });
    },
    doSignup({ commit }, signupData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/register/', signupData)
          .then(response => {
            localStorage.setItem('accessToken', response.data.token);
            commit('loginStop', null);
            commit('updateAccessToken', response.data.token);
            resolve(response.data);
          })
          .catch(reject);
      });
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
    },
  },
});
