<template>
  <div id="app">
    <div id="nav">
      <div v-if="!isLogged">
        <router-link to="/inscription">Inscription</router-link> |
        <router-link to="/connexion">Connexion</router-link>
      </div>
      <div>
        <router-link to="/admin">Admin</router-link> |
        <router-link to="/user">User</router-link>
      </div>
      <div>
        <router-link to="/messages">Tous les messages</router-link> |
        <router-link to="/create">Create</router-link> |
        <router-link to="/modify">Modifier</router-link>
        <Button textButton="Déconnexion" id='green' @click="logout"/>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Button from './components/Button';

export default {
  name: 'App',
  components: { Button },
  computed: {
    ...mapGetters({
        isLogged: 'isLogged',
    }),
  },
  methods: {
      ...mapActions({
          _logout: 'logout',
      }),
      logout() {
        this._logout();
        this.$router.push('connexion');
      },
      /*{
        if(showConnexion) {
          showAdmin = false,
          showMessage = false
        } else if(showAdmin) {
          showConnexion = false,
          showMessage = false
        } else(showMessage) {
          showMessage = true
        }
      }*/
    },
    mounted() {
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // background-image: url('./assets/icon.png');
  color: #2c3e50;
}

#nav {
  border: 1px solid black;
  padding: 30px;
  position: relative;
  z-index: 1;

  .router-link-inscription {
    background-color: lightgrey;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>