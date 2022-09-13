<template>
    <div class="bbg">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png">
        <div>
            <div class="profil">
                <div class="profil-photo">
                    
                </div>
                <div class="profil-descriptif">
                    <h1>Postez votre message ci-dessous.</h1>
                    <form @submit.prevent="addTodo">
                        <input type="text" name="todo-text" v-model="newTodoText" placeholder="New todo">
                    </form>
                </div>
            </div>
            <div>
                <Button type="text" id='green' textButton='Deconnexion' @click="disconnect"/>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue'
// import axios from 'axios'
export default {
    name: 'Profil',
    components: { Button },
    data(){
        return {

        }
    }, 
    methods: {
        disconnect() {
            localStorage.setItem('isLogged', false)
            this.$router.push('Connexion')
        },
    // mounted() {
    //     this.isLogged = localStorage.getItem('isLogged');
    // }
    }
}
</script>

<style scoped lang="scss">
.bbg {
    // background-color: yellow;
    background-image: url('../assets/icon.png');
}
img {
    height: 300px;
    width: 300px;
    margin: -60px;
    position: relative;
    z-index: -1;
}
</style>