import Vuex from 'vuex';
import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3306/'
})

// Utilisateur par défaut
const defaultUser = {
  userId: -1,
  token: ''
}

const defaultPost = {
  postId: -1,
}

// Si l'utilisateur n'est pas dans le local storage, l'utilisateur est par défaut
// Sinon récupérer l'utilisateur du local storage
let user = localStorage.getItem('user');
if (!user) {
  user = defaultUser;
} else {
  try {
    user = JSON.parse(user);
    server.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  } catch(exception) {
    user = defaultUser;
  }
}

let post = localStorage.getItem('post');
if (!post) {
  post = defaultPost;
} else {
  try {
  post = JSON.parse(post);
  } catch(exception) {
  post = defaultPost;
  }
}  

export default new Vuex.Store({
  state: {
      isLogged: false,
      user: user,
      post: post,
  },

  getters: {
    userId: state => {
      return state.user.userId;
    },
    postId: state => {
      return state.post.postId;
    }
  },

  mutations: {
    LOG_USER: function(state, user) {
      server.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
      state.isLogged = true;
    },

    LOG_OUT: function(state) {
      state.user = defaultUser;
      state.isLogged = false;
      localStorage.clear();
    },
  },

  actions: {
    // S'inscrire
    signUp(_context, userInfos) {
      return new Promise((resolve, reject) => {
        server.post('user/signup', userInfos)
            .then(function(response) {
              resolve(response);
            })
            .catch(function(error) {
              reject(error);
            })
      });
    },

    //Se connecter
    login({ commit }, userInfos) {
      return new Promise((resolve, reject) => {
        server.post('user/login', userInfos)
            .then(function(response) {
              commit('LOG_USER', response.data);
              resolve(response);
            })
            .catch(function(error) {
              reject(error);
            })
      });
    },

    logout({ commit }) {
      commit('LOG_OUT');
      // Supprimer l'utilisateur du local storage
      localStorage.removeItem('users');
    },

    //ajouter un message
    addMsg(_context, msgInfos) {
      return new Promise((resolve, reject) => {
        server.post('post', msgInfos)
            .then(function(response) {
              resolve(response);
            })
            .catch(function(error) {
              reject(error);
            })
      });
    },

    //load un message
    loadMsg(_context, postId) {
      return new Promise((resolve, reject) => {
        server.get('post/:id', postId)
            .then(function(response) {
              resolve(response);
            })
            .catch(function(error) {
              reject(error);
            })
      });
    },
    //load tous les messages
    loadAllMsg() {
          return new Promise((resolve, reject) => {
            server.get('post')
                .then(function(response) {
                  resolve(response);
                })
                .catch(function(error) {
                  reject(error);
                })
          });
        },

    //modifier un message
    modifyMsg(_context, postId, msgInfos ) {
      return new Promise((resolve, reject) => {
        server.put('post/:id' + postId, msgInfos)
            .then(function(response) {
              resolve(response);
            })
            .catch(function(error) {
              reject(error);
            })
      });
    },

    //supprimer un message
    deleteMsg(_context, postId) {
      return new Promise((resolve, reject) => {
        server.delete('post/' + postId)
            .then(function(response) {
              resolve(response);
            })
            .catch(function(error) {
              reject(error);
            })
      });
    },
  },
})
