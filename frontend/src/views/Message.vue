<template>
  <div class="wrapper">
    <h1>Postez votre message ci-dessous.</h1>
    <form>
      <input type="text" v-model="post" placeholder="New todo">
      <button @click="addTodo()">créer</button>
    </form>
    <ul v-if="todos.length">
      <Message v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
    </ul>
    <p class="none" v-else>Aucun message. Veuillez ajourter un message dans le champs ci-dessus.</p>
    <Button type="text" id='green' textButton='Deconnexion' @click="disconnect"/>
  </div>
</template>

<script>
import Message from "../components/Message.vue"
import Button from "../components/Button.vue"
import axios from 'axios'

export default {
  components: {
    Message,
    Button
  },

  data() {
    return {
      todos: [],
      post: ""
    }
  },

  methods: {
    addTodo() {
      console.log('test');
      axios.post('http://localhost:3306/post/', this.post)
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    console.log(res.data)
                } else {
                    console.log('mauvais login');
                }
            })
            .catch(error => {console.log('there is an error:' + error.response.status + error.response.request)})
    },

    removeTodo(item) {
      this.todos = this.todos.filter(todo => todo !== item)
    },
  },
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
