<template>
    <div class="message">
        {{ texte }}
    <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        texte: {
            type: String,
            default: 'par defaut',
        }
    }
}
</script>

<style scoped lang="scss">
.message {
    margin: 0% 33%;
    border: 1px solid black;
}
</style>