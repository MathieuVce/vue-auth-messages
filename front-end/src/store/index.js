import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    messages: [],
    message: {},
    token: localStorage.getItem('token') || '',
  },
  getters: {
  },
  mutations: {
    setMessage(state, message) {
      if (message === null) {
        state.message = {
          message: "",  
          id: -1
        };
        return;
      }
      state.message = message;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    addMessage(state, message) {
      state.messages.push(message);
    },
    auth(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = '';
      localStorage.removeItem('token');
    }
  },
  actions: {
    initialize({ commit }) {
      let token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth', token);
      }
    },
    async fetchMessages({ commit }) {
      try {
        let response = await axios.get('http://localhost:3000/messages');
        commit('setMessages', response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des messages', error);
      }
    },
    async submitMessage({ commit }, messageBody) {
      if (!messageBody) return;
      try {
        let response = await axios.post('http://localhost:3000/messages', {
          message: messageBody,
        });
        commit('addMessage', response.data);
      } catch (error) {
        alert(error.response.data.error)
        console.error('Erreur lors de l\'ajout du message', error);
      }
    },
    async deleteMessage({ commit }, id) {
      try {
        let response = await axios.delete(`http://localhost:3000/messages/${id}`);
        commit('setMessages', response.data);
        commit('setMessage', null);
      } catch (error) {
        alert(error.response.data.error)
        console.error('Erreur lors de la suppression du message', error);
      }
    },
    async getMessage({ commit }, id) {
      try {
        let response =  await axios.get(`http://localhost:3000/messages/${id}`);
        commit('setMessage', response.data);
      } catch (error) {
        alert(error.response.data.error)
        console.error('Erreur lors de la récupération du message', error);
        commit('setMessage', null);
      }
    },
    async register({ commit }, registerForm) {
      try {
        let response = await axios.post('http://localhost:3000/register', registerForm);
        localStorage.setItem('token', response.data);
        axios.defaults.headers.common['Authorization'] = response.data;
        commit('auth', response.data);
      } catch (error) {
        alert(error.response.data.error)
        console.error('Erreur lors de l\'inscription', error);
      }
    },
    async login({ commit }, loginForm) {
      try {
        let response = await axios.post('http://localhost:3000/login', loginForm);
        localStorage.setItem('token', response.data);
        axios.defaults.headers.common['Authorization'] = response.data;
        commit('auth', response.data);
      } catch (error) {
        alert(error.response.data.error)
        console.error('Erreur lors de la connexion', error);
      }
    }
  },
})
