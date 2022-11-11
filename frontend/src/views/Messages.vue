<template>
  <div class="wrapper">
    <h1>Postez votre message ci-dessous.</h1>
    <Button id='blue' textButton="créer" @click.prevent="createMsg()"/>
    <ul v-if="posts.length > 0">
      <Messages v-for="post in posts" :key="post.id" :post="post"
        @modify="modifyMsg(post)" @deleteSuccessful="loadAllMsg()" @addSuccessful="loadAllMsg()"/>
    </ul>
    <p class="none" v-else>Aucun message</p>
  </div>
</template>

<script>
import Messages from "../components/Messages.vue";
import Button from "../components/Button.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
  components: { Messages, Button },
  data() {
    return {
      posts: [],
      post:""
      
    }
  },
  computed: {
    ...mapGetters({
        _userId: 'userId'
    }),
  },
  methods: {  
    ...mapActions({
        //_createMsg: 'createMsg',
        _addMsg: 'addMsg',
        _loadMsg: 'loadMsg',
        _loadAllMsg: 'loadAllMsg',
        _modifyMsg: 'modifyMsg',
        _deleteMsg: 'deleteMsg',
    }),
    createMsg() {
      this.$router.push('Create')
    },
    addMsg() {
        this._addMsg({ post: this.post, userId: this._userId }, this.post="").then(() => this.loadAllMsg());
    },
    loadMsg() {
        this._loadMsg().then((response) => this.posts_id = response.data);
    },
    loadAllMsg() {
        this._loadAllMsg().then((response) => this.posts = response.data);
    },
    modifyMsg(post) {
      console.log('modifyMsg', post)
      //this._modifyMsg(postId)({ postId: this._postId, userId: this._userId}).then(() => this.loadAllMsg());

      this.$router.push({ name: 'Modify', params: { post: post } })
    },
    deleteMsg() {
        this._deleteMsg()({ postId: this._postId, userId: this._userId}).then(() => this.loadAllMsg());
    },
  },
  mounted() {
    console.log('le composant <Messages> vient detre mounted');
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