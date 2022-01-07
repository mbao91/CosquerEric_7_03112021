<template>
    <div class="bbg">
        <img alt="Groupomania logo" src="../assets/icon-above-font.png">
        <div>
            <Profil msg="Bienvenue sur la page de votre profil"/>
        </div>

    </div>
</template>

<script>
import Profil from '../components/Profil.vue'
export default {
    name: 'Profil',
    components: {
        Profil,
    }
}
</script>

<style scoped lang="scss">
.bbg {
    // background-color: yellow;
    background-image: url('../assets/icon.png');
}
img {
    height: 300px;
    width: 300px;
    margin: -60px;
    position: relative;
    z-index: -1;
}
</style>