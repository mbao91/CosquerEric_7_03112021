<template>
    <div class="bbg">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png"/>
        <h1>Se connecter ci-dessous</h1>
        <div class="carre">
            <label for="username"></label>
            <input type="text" id="username" placeholder="Nom d'utilisateur" v-model='userName'>
            <label for="pw"></label>
            <input type="password" id="pw" placeholder="Mot de passe" v-model='password'>
            <Button type="text" id='blue' textButton='Connexion' @click="connect"/>
            <!-- <button id="blue">Se connecter</button> -->
            <p>Mot de passe oublié ?</p>
            <!-- <Button id='green' textButton='Créer un compte' @click="create"/> -->
            <!-- <button id="green">Créer un compte</button> -->
        </div>
        <!-- <Message texte='coucou'/> -->
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import axios from 'axios'

window.axios = require('axios');

export default {
    name: 'Connexion',
    components: { Button },
    data() { 
        return {
            userName: '',
            password: '',
            // inscription: '',
            //utiliser axios
            
        };
    },
    methods: { 
        connect() {
            let user = {
                userName: this.userName,
                password: this.password,
            }
            axios.post('http://localhost:3306/login', user)
            .then(response => {
                if (response.code === 200) {
                    localStorage.setItem('isLogged', true)
                    this.$router.push('Message')
                    this.$emit('test');
                } else {
                    console.log('mauvais login');
                }
            })
            // .catch(error => {
            //     if (error.response) {
            //     console.log(error.toJson());
            //     console.log(error.response.data)
            //     console.log(error.response.status)
            //     console.log(error.response.headers)
            // }   else if (error.request) {
            //     console.log(error.request)
            // }   else {
            //     console.log('Error', error.message)
            // }
            // })
            
            // localStorage.setItem('isLogged', true);
            // this.$router.push('Message');
            // this.$emit('test');

            // axios.fetch("http://localhost:3306/profil")
            // .then(res => res.json())
            // .then(data => {
                
            // })

            // axios
            // .fetch('http://localhost:3306/profil')
            // .then(res => res.json())
            
            // .catch(error => {console.log('there is an error:' + error.response)})
        }
    },
    // methods: {
    //     connect() {
    //         //je vais voir sur le projet 5 comment on apelle une api
    //         console.log('je me connecte avec :', this.login, this.password);
    //         //fetch('localhost:3000/login', )
    //         // fetch("http://localhost:3000/api/profil/")
    //         // //Défini le type de fichier attendu, ici un json
    //         // .then((res) => res.json())
    //         // .then(data) => {
    //         // //Boucle parcourant les  entrées du tableau
    //         // }

    //     }
    // }
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
// button{
//     border-radius: 20px;
//     border: 1px thin lightgrey;
//     color: white; 
//     font-weight: bold;
//         &#blue {
//         background-color: #166fe5;
//         // margin: 0% 5%;
//         padding: 10px 20%;
//         &#green {
//         background-color: #168300;
//         // margin: 0% 15%;
//         padding: 10px 0;
//         }
//     }
// }
</style>
