import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},
    currentSalesman: {},
    accessToken: localStorage.getItem('accessToken') || '',
  },
  mutations: {
    loginStop: (state, payload) => {
      state.accessToken = payload.token;
      state.currentUser = payload;
    },
    LOAD_SALESMEN(state, payload) {
      state.currentSalesman = payload;
    },
    GET_CURRENT_USER(state, payload) {
      state.currentUser = payload;
    },
    EDIT_SALESMAN(state, payload) {
      state.currentSalesman = payload;
    },
  },
  getters: {
    isLoggedIn: state => !!state.accessToken,
  },
  actions: {
    editSalesMan({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/edit', payload, {
            headers: {
              Authorization: `Bearer ${state.accessToken}`,
            },
          })
          .then(response => {
            commit('EDIT_SALESMAN', response.data);
            resolve(response.data);
          })
          .catch(reject);
      });
    },
    getCurrentUser({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/getcurrentuser', {
            headers: {
              Authorization: `Bearer ${state.accessToken}`,
            },
          })
          .then(response => {
            commit('GET_CURRENT_USER', response.data);
            resolve(response.data);
          })
          .catch(reject);
      });
    },
    getSalesmen({ commit, state, dispatch }) {
      if (!state.currentUser.id) {
        dispatch('getCurrentUser').then(() => {
          return new Promise((resolve, reject) => {
            axios
              .post('/salesmans/getbyid/' + state.currentUser.id, {
                headers: {
                  Authorization: `Bearer ${state.accessToken}`,
                },
              })
              .then(response => {
                commit('LOAD_SALESMEN', response.data);
                resolve(response.data);
              })
              .catch(reject);
          });
        });
      } else {
        return new Promise((resolve, reject) => {
          axios
            .post('/salesmans/getbyid/' + state.currentUser.id, {
              headers: {
                Authorization: `Bearer ${state.accessToken}`,
              },
            })
            .then(response => {
              commit('LOAD_SALESMEN', response.data);
              resolve(response.data);
            })
            .catch(reject);
        });
      }
    },
    doLogin({ commit }, loginData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/salesmans/login/', loginData)
          .then(response => {
            localStorage.setItem('accessToken', response.data.token);
            axios.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${response.data.token}`;
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
