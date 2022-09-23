<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/inscription">Inscription</router-link> |
        <router-link to="/connexion">Connexion</router-link>
      </div>
      <div>
        <router-link to="/message">Message</router-link>
        <Button textButton="Déconnexion" @click="logout"/>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '@/components/Button';

export default {
  name: 'App',
  components: { Button },
  methods: {
      ...mapActions({
          _logout: 'logout',
      }),
      logout() {
        this._logout();
        this.$router.push('connexion');
      }
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