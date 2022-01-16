<template>
<div id="app">
  <div id="nav">
    <div v-if="!isLogged">
      <router-link to="/inscription">Inscription</router-link> |
      <router-link to="/connexion">Connexion</router-link>
    </div>
    <div v-if="isLogged">
      <router-link to="/profil">Profil</router-link> | 
      <router-link to="/message">Message</router-link> | 
      <router-link to="/multimedia">Multimédia</router-link>
    </div>
  </div>
  <router-view @test="test()"/>
</div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      isLogged: false,
    }
  },
  methods: {
    test() {
      this.isLogged = localStorage.getItem('isLogged');
    },
  },
  mounted() {
    this.isLogged = localStorage.getItem('isLogged');
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