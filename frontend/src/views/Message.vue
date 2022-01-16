<template>
  <div class="wrapper">
    <h1>Postez votre message ci-dessous.</h1>
    <form @submit.prevent="addTodo">
      <input type="text" name="todo-text" v-model="newTodoText" placeholder="New todo">
    </form>
    <ul v-if="todos.length">
      <Message v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/>
    </ul>
    <p class="none" v-else>Nothing left in the list. Add a new todo in the input above.</p>
    <Button type="text" id='green' textButton='Deconnexion' @click="disconnect"/>
  </div>
</template>

<script>
import Message from "../components/Message.vue"
import Button from "../components/Button.vue"
// import axios from 'axios'

let nextTodoId = 1

const createTodo = text => ({
  text,
  id: nextTodoId++
})

export default {
  components: {
    Message,
    Button
  },

  data() {
    return {
      todos: [
        // createTodo("Learn Vue"),
        // createTodo("Learn about single-file components"),
        // createTodo("Fall in love ❤️")
        ""
      ],

      newTodoText: ""
    }
  },

  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim()

      if (trimmedText) {
        this.todos.push(createTodo(trimmedText))
      }

      this.newTodoText = ""
    },

    removeTodo(item) {
      this.todos = this.todos.filter(todo => todo !== item)
    },

    disconnect() {
        localStorage.setItem('isLogged', false)
        this.$router.push('Connexion')
    //     axios.get('http://localhost:3306/users/')
    //     .then(res => {
    //         console.log(res.status)
    //         if(res.status === 200) {
    //         localStorage.setItem('isLogged', false)
    //         console.log(res.data)
    //     }   else {
    //         console.log('something went wrong !')
    //     }
    //   })
    //   this.$emit('test')
    //   this.$router.push('Connexion')
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
