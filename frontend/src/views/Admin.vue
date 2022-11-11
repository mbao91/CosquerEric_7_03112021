<template>
  <div>
    <span>{{ profil.content }}</span>
  </div>
</template>

<script>
export default {
data() {
    return {
        props: {
            profil: {
                require: true,
                }
            }
        }
    }
}
</script>

<style lang: scss>

</style>