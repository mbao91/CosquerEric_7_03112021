<template>
    <div>
        <img alt="Groupomania logo" src="../assets/icon-above-font.png">
        <div class="carre">
            <Message title="Veuillez entrer votre message ci-dessous :"/>
        </div>
    </div>
</template>

<script>
import Message from '@/components/Message.vue'
export default {
    name: 'Message',
    components: {
        Message
    }
}
</script>

<style scoped lang="scss">
.carre {
    display: flex;
    flex-direction: column;
    margin: 0% 40%;
    border: 1px solid grey;
    padding: 25px;
    background-color: #24e78e;
}
</style>
