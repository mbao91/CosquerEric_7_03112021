<template>
  <div>
    <h1>Modifier votre message</h1>
    <div class="flex2">
      <input type="text" placeholder="Ecrivez votre message ici">
      <button @click="modifyMsg()">modifier</button>
      <button @click="retourEnArriere()">Annuler</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    };
  },
  props: [ 'post' ],
  computed: {
    ...mapGetters({
      _userId: 'userId',
    }),
  },
  methods: {
    ...mapActions({
      _modifyMsg: 'modifyMsg',
    }),
    modifyMsg(postId) {
      console.log('modifyMsg', postId)
      //this._modifyMsg(postId)({ postId: this._postId, userId: this._userId}).then(() => this.loadAllMsg());
    },
    retourEnArriere() {
      this.$router.push('messages');
    },
  },
  mounted() {
    console.log('mon msg', this.post)
  },
}
</script>


<style lang="scss" scoped>
button {
    border: 1px solid orange;
    background: orange;
    color: white;
    font-size: 0.8rem;
    padding: 2px 4px;
    cursor: pointer;
    display: flex;
    margin-right: 5px;
}
button:hover {
    border-color: #ff8100;
    background: #ff8100;
}
input {
  margin-right: 5px;
}
.flex2 {
  display: inline-flex;
}
</style>