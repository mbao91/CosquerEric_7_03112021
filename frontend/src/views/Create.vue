<template>
  <div>
    <h1>Créer votre propre message personnalisé</h1>
    <div class="flex">
      <input type="text" v-model="post" placeholder="Ecrivez votre message ici">
      <button @click="addMsg()">créer</button>
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
      post: '',
    };
  },
  computed: {
    ...mapGetters({
      _userId: 'userId',
    }),
  },
  methods: {
    ...mapActions({
      _addMsg: 'addMsg',
    }),
    addMsg() {
      this._addMsg({ post: this.post, userId: this._userId }).then(() => {
        this.$emit('deleteSuccessful')
        this.retourEnArriere();
      });
    },
    retourEnArriere() {
      this.$router.push('messages');
    },
    /*validate() {
      this._modifyMsg(this.post._id).then(() => {
        //émettre un evenement au parent 'modifySuccessful'
        this.$emit('modifySuccessful')
      });
    }*/
  }
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
.flex {
  display: inline-flex;
}
</style>