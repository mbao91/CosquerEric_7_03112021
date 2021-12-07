<template>
    <div class="message">
        <h1>{{ title }}</h1>
        <ul>
            <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: ['title', 'list']
}
</script>

<style scoped lang="scss">
img {
    height: 300px;
    width: 300px;
    margin: -60px;
    position: relative;
    z-index: -1;
}
h1 {
    text-decoration: underline;
}
.message {
    margin: 0% 33%;
    border: 1px solid black;
}
</style>