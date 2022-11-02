<template>
  <div class="wrapper">
    <h1>Postez votre message ci-dessous.</h1>
    <form>
      <input type="text" v-model="post" placeholder="New todo">
      <div class=buttonright>
        <button @click="addMsg()">créer</button>
      </div>
    </form>
    <ul v-if="posts.length > 0">
      <Message v-for="post in posts" :key="post.id" :post="post"
        @modifySuccessful="loadAllMsg()" @deleteSuccessful="loadAllMsg()"/>
    </ul>
    <p class="none" v-else>Aucun message. Veuillez ajourter un message dans le champs ci-dessus.</p>
  </div>
</template>

<script>
import Message from "../components/Message.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
  components: { Message },

  data() {
    return {
      posts: [],
      post: ""
    }
  },
  computed: {
    ...mapGetters({
        _userId: 'userId',
        _postId: 'postId',
    }),
  },

  methods: {  
    ...mapActions({
        _addMsg: 'addMsg',
        _loadMsg: 'loadMsg',
        _loadAllMsg: 'loadAllMsg',
        /*_loadOneMsg: 'loadOneMsg',*/
        _modifyMsg: 'modifyMsg',
        _deleteMsg: 'deleteMsg',
    }),  
    addMsg() {
        this._addMsg({ post: this.post, userId: this._userId }, this.post="").then(() => this.loadAllMsg());
    },
    loadMsg() {
        this._loadMsg().then((response) => this.posts_id = response.data);
    },
    loadAllMsg() {
        this._loadAllMsg().then((response) => this.posts = response.data);
    },
    /*loadOneMsg() {
        this._loadOneMsg().then((response) => this.post._id = response.data);
    },*/
    modifyMsg(postId) {
        this._modifyMsg(postId)({ postId: this._postId, userId: this._userId}).then(() => this.loadAllMsg());
    },
    deleteMsg() {
        this._deleteMsg()({ postId: this._postId, userId: this._userId}).then(() => this.loadAllMsg());
    }
  },
  mounted() {
    this.loadAllMsg();
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

.buttonright {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 10px
}
</style>
