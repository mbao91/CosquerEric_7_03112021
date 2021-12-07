<template>
<div>
    <img alt="Groupomania logo" src="../assets/icon-above-font.png">
    <h1>Veuillez vous inscrire / connecter ci-dessous</h1>
    <div class="carre">
        <label for="username"></label>
        <input type="text" id="username" placeholder="Nom d'utilisateur/Email">
        <label for="pw"></label>
        <input type="text" id="pw" placeholder="Mot de passe">
        <button id="blue">Se connecter</button>
        <p>Mot de passe oublié ?</p>
        <hr>
        <button id="green">Créer un compte</button>
    </div>
</div>
</template>

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
    margin: 0% 40%;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 25px;
    background-color: #24e78e;
}
button{
    border-radius: 20px;
    border: 1px thin lightgrey;
    color: white; 
    font-weight: bold;
    &#blue {
    background-color: #166fe5;
    margin: 0% 5%;
    padding: 10px 0;
    }
    &#green {
    background-color: #168300;
    margin: 0% 15%;
    padding: 10px 0;
   
    }
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
    position: relative;
    z-index: -1;
}
</style>
