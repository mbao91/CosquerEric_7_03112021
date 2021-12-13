<template>
    <div>
        <button :id="id">{{ textButton }}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        textButton: String,
        id: String,
    }
}
</script>

<style>
button{
    border-radius: 20px;
    border: 1px thin lightgrey;
    color: white; 
    font-weight: bold;
}
button#blue {
    background-color: #166fe5;
    padding: 10px 25%;
}
button#green {
    background-color: #168300;
    padding: 10px 5%;
}
</style>