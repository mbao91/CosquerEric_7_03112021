<template>
  <div class="wrapper">
    <h1>Postez votre message ci-dessous.</h1>
    <form @submit.prevent="addVideo">
      <input type="file" name="video" @change="newVideoFile" placeholder="New todo">
    </form>
    <ul v-if="todos.length">
      <Multimedia v-for="video in todos" :key="video.id" :todo="video" @remove="removeVideo"/>
    </ul>
    <p class="none" v-else>Nothing left in the list. Add a new todo in the input above.</p>
    <Button type="text" id='green' textButton='Deconnexion' @click="disconnect"/>
  </div>
</template>

<script>
import Multimedia from "../components/Multimedia.vue"
import Button from "../components/Button.vue"
// import axios from 'axios'

let nextVideoId = 0

const createVideo = video => ({
  video,
  id: nextVideoId++
})

export default {
  components: {
    Multimedia,
    Button
  },

  data() {
    return {
      videos: [],

      newVideoFile: ""
    }
  },

  methods: {
    addVideo() {
      const trimmedText = this.newVideoFile.trim()

      if (trimmedText) {
        this.videos.push(createVideo(trimmedText))
      }

      this.newVideoFile = ""
    },

    removeVideo(item) {
      this.videos = this.videos.filter(video => video !== item)
    },

    disconnect() {
        localStorage.setItem('isLogged', false)
        this.$router.push('Connexion')
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
  font: 16px/1.2 BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 10px;
}
.wrapper {
  width: 75%;
  margin: 0 auto;
}
form {
  margin-bottom: 20px;
}
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #777;
}
ul, li {
  margin: 0;
  padding: 0;
}
p.none {
  color: #888;
  font-size: small;
}
</style>
