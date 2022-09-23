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
  </div>
</template>

<script>
import Message from "../components/Message.vue";

export default {
  components: { Message },

  data() {
    return {
      todos: [],
      post: ""
    }
  },

  methods: {    
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
