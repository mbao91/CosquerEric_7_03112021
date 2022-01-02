<template>
    <div class="bbg">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png">
        <div class="carre">
            <!-- <Message texte="Veuillez entrer votre message ci-dessous :"/> -->
            <h1>Veuillez entrer votre message ci-dessous :</h1>
            <textarea name="Message" id="message" cols="5" rows="10" v-model="tempMessage"></textarea>
            <div v-for="message in messages" :key="message" class="pill">
                {{ message }}
            </div>
            <div class="valider">
                <Button type="submit" textButton="Entrer" id='bentry' @click="mounted"/>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue'
// import Message from '../components/Message.vue'
import axios from 'axios'

export default {
    name: 'Message',
    components: { 
        Button,
        // Message
    },
    data() {
        return {
            tempMessage: '',
            messages: []
        }
    },
    methods: {
        // addMessage(e) {
        //     if (e.key === ',' && this.tempMessage) {
        //         this.messages.push(this.tempMessage)
        //         this.tempMessage = ''
        //     }
        // }
        mounted() {
            let message = {
                message: this.tempMessage
            }
            axios
            .post('http://localhost:3306/message', message)
            .then(response => console.log(response.data))
            .catch(error => {console.log('there is an error:' + error.response)})
        }
    }
}
</script>

<style scoped lang="scss">
.bbg {
    // background-color: yellow;
    background-image: url('../assets/icon.png');
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
.valider {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 5px;
    
}
// .bentry {
//     border-radius: 2px;
//     background-color: rgb(6, 66, 6);
//     color: white;
//     padding: 2px 50px;
// }
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
