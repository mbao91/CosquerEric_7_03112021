<template>
    <div>
        <img alt="Groupomania logo" src="../assets/icon-above-font.png"/>
        <h1>Veuillez vous inscrire / connecter ci-dessous</h1>
        <div class="carre">
            <label for="username"></label>
            <input type="text" id="username" placeholder="Nom d'utilisateur/Email" v-model='login'>
            <label for="pw"></label>
            <input type="text" id="pw" placeholder="Mot de passe" v-model='password'>
            <Button id='blue' textButton='Connexion' @click="connect"/>
            <!-- <button id="blue">Se connecter</button> -->
            <p>Mot de passe oublié ?</p>
            <Button id='green' textButton='Créer un compte'/>
            <!-- <button id="green">Créer un compte</button> -->
        </div>
        <!-- <Message texte='coucou'/> -->
    </div>
</template>

<script>
import Button from '../components/Button.vue';

export default {
    name: 'Inscription',
    components: { Button },
    data() { 
        return {
            login: '',
            password: '',
        };
    },
    methods: {
        connect() {
            //je vais voir sur le projet 5 comment on apelle une api
            console.log('je me connecte avec :', this.login, this.password);
            //fetch('localhost:3000/login', )
            // fetch("http://localhost:3000/api/profil/")
            // //Défini le type de fichier attendu, ici un json
            // .then((res) => res.json())
            // .then(data) => {
            // //Boucle parcourant les  entrées du tableau

            // }
        }
    }
}
</script>

<style scoped lang="scss">
body {
    background-color: lightgrey;
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
