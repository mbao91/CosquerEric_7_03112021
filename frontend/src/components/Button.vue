<template>
    <div>
        <button :id='id'>{{ textButton }}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        textButton: String,
        id: String
    }
}
</script>

<style lang='scss'>
button{
    border-radius: 20px;
    border: 1px thin lightgrey;
    font-weight: bold;
    cursor: pointer;
    
}
button#blue {
    background-color: #166fe5;
    padding: 8px 15%;
    margin-bottom: 10px;
    margin-top: -5px;
    color: white
}
button#green {
    background-color: #168300;
    padding: 5px 5%;
    margin: 5px;
    
}
button#bentry {
    border-radius: 2px;
    background-color: rgb(6, 66, 6);
    color: white;
    padding: 2px 50px;
}
</style>