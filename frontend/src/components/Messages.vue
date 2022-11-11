<template>
  <li>
    <span>{{ post.content }}</span>
    <button v-if="amIOwner" @click.prevent="modifyMsg()">Modify</button>
    <button v-if="amIOwner" @click.prevent="deleteMsg()">Remove</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      postVmodel: '',
    };
  },
  props: {
    post: {
      required: true,
    }
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      isAdmin: 'isAdmin',
    }),
    amIOwner() {
      return (this.post.userId === this.userId) || this.isAdmin;
    }
  },
  methods: {
    ...mapActions({
      _deleteMsg: 'deleteMsg',
    }),
    modifyMsg() {
      this.$router.push('modify');
    },
    deleteMsg() {
      this._deleteMsg(this.post._id).then(() => {
        //émettre un evenement au parent 'deleteSuccessful'
        this.$emit('addSuccessful')
      });
    },
  }
}
</script>


<style lang="scss" scoped>
li {
  display: flex;
  margin: 5px 0;
}
span {
    flex: 1;
}
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
</style>