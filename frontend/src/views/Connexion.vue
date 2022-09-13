<template>
    <div class="bbg">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png"/>
        <h1>Se connecter ci-dessous</h1>
        <div class="carre">
            <label for="email"></label>
            <input type="email" id="email" required placeholder="Email" v-model='email'>
            <label for="pw"></label>
            <input type="password" id="pw" placeholder="Mot de passe" v-model='password'>
            <Button type="text" id='blue' textButton='Connexion' @click="connect"/>
            <p>Mot de passe oublié ?</p>
        </div>
        <!-- <Message texte='coucou'/> -->
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import axios from 'axios'

export default {
    name: 'Connexion',
    components: { Button },
    data() { 
        return {
            email: '',
            password: '',           
        };
    },
    methods: { 
        connect() {
            let user = {
                email: this.email,
                password: this.password,
            }
            axios.post('http://localhost:3306/user/login', user)
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    localStorage.setItem('isLogged', true)
                    this.$router.push('Message')
                    console.log(res.data)
                } else {
                    console.log('mauvais login');
                }
            })
            .catch(error => {console.log('there is an error:' + error.response.status + error.response.request)})
        }
    },
}
</script>

<style scoped lang="scss">
body {
    background-color: lightgrey;
}
.bbg {
    // background-color: yellow;
    background-image: url('../assets/icon.png');
}
h1 {
    color: red;
} 
p {
    color: #166fe5;
    font-weight: bold;
}
.carre {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 0% 40%;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 25px;
    background-color: #24e78e;
}

input {
    border-radius: 20px;
    border: 1px solid black;
    padding: 2% 25%;
    text-align: center;
    margin-bottom: 10px;
}
img {
    height: 300px;
    width: 300px;
    margin: -60px;
    z-index: -1;
}
</style>
