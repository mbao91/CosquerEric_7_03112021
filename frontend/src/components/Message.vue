<template>
  <li>
    <span>{{ post.content }}</span>
    <input v-if="isEditMode" type="text" v-model="postVmodel" placeholder="test">
    <button v-if="!isEditMode" @click.prevent="this.isEditMode = true">Modify</button>
    <button v-if="!isEditMode" @click.prevent="deleteMsg()">Remove</button>
    <button v-if="isEditMode" @click.prevent="validate()">Valider</button>
    <button v-if="isEditMode" @click.prevent="this.isEditMode = false">Annuler</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isEditMode: false,
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
      _userId: 'userId',
      _postId: 'postId',
    }),
  },
  methods: {
    ...mapActions({
      _modifyMsg: 'modifyMsg',
      _deleteMsg: 'deleteMsg',
    }),
    deleteMsg() {
      this._deleteMsg(this.post._id).then(() => {
        //émettre un evenement au parent 'deleteSuccessful'
        this.$emit('deleteSuccessful')
      });
    },
    validate() {
      this._modifyMsg(this.post._id).then(() => {
        //émettre un evenement au parent 'modifySuccessful'
        this.$emit('modifySuccessful'),
        this.isEditMode = false
      });
    }
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