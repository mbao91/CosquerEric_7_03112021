<template>
    <div class="bbg">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png"/>
        <h1>Veuillez vous inscrire ci-dessous</h1>
        <div class="carre">
            <label for="username"></label>
            <input type="text" id="username" required placeholder="Nom d'utilisateur" v-model='userName'>
            <label for="pw"></label>
            <input type="password" id="pw" required placeholder="Mot de passe" v-model='password'>
            <label for="email"></label>
            <input type="email" id="email" required placeholder="Email" v-model='email'>
            <label for="firstName"></label>
            <input type="text" id="firstName" required placeholder="Prénom" v-model='firstName'>
            <label for="lastName"></label>
            <input type="text" id="lastName" required placeholder="Nom de famille" v-model='lastName'>
            <label>Role:</label>
            <select v-model="role">
                <option value="Employee">Employé(e)</option>
                <option value="SuperAdmin">Administrateur</option>
            </select>
            <Button type="submit" id='green' textButton='Créer un compte' @click="signup"/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '../components/Button.vue'

// window.axios = require('axios');

export default {
    name: 'Inscription',
    components: { Button },
    data() { 
        return {
            userName: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            role: 'Employee'
        }
    },
    methods: { 
        ...mapActions({
            _signup: 'signup',
        }),
        signup() {
            let user = {
                userName: this.userName,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                role: this.role,
            };
            this._signup(user).then((res) => {
                if (res.status === 201) this.$router.push('connexion');
            });
        }
    }
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
label {
    font-weight: bold;
    display: flex;
    justify-content: center;
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

input, select {
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