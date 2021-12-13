<template>
    <div class="bbg">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png">
        <div class="carre">
            <h1>Veuillez poster votre vidéo ci-dessous :</h1>
            <!-- <Message texte="Veuillez entrer votre message ci-dessous :"/> -->
            <textarea name="Multimedia" id="multimedia" cols="5" rows="10"></textarea>
            <div class="valider">
                <button class="bentry">Entrer</button>
            </div>
        </div>
    </div>
</template>

<script>
// // import Button from '../components/Button.vue'
// // import Message from '../components/Message.vue'

// export default {
//     name: 'Message',
//     components: { Button },
//     // data() {
//     //     return {
//     //         msg: ''
//     //     };    
//     // }
// }
</script>

<style scoped lang="scss">
.valider {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: 5px;
    
}
.bbg {
    // background-color: yellow;
    background-image: url('../assets/icon.png');
}
.bentry {
    border-radius: 2px;
    background-color: rgb(6, 66, 6);
    color: white;
    padding: 2px 50px;
}
.carre {
    display: flex;
    flex-direction: column;
    margin: 0% 25%;
    border: 1px solid grey;
    padding: 25px;
    background-color: #24e78e;
    position: relative;
}
h1 {
    color: red;
}
img {
    height: 300px;
    width: 300px;
    margin: -60px;
    z-index: -1;
}

</style>

