<template>
  <li>
    <span>{{ video.file }}</span>
    <button @click.prevent="$emit('remove', video)">Remove</button>
  </li>
</template>

<script>
export default {
  props: {
    video: {
      required: true,
      type: File
    }
  }
}
</script>


<style lang="scss" scoped>
li {
  display: flex;
  margin: 5px 0;
}
span {
    flex: 1;
}
button {
    border: 1px solid orange;
    background: orange;
    color: white;
    font-size: 0.8rem;
    padding: 2px 4px;
    cursor: pointer;
}
button:hover {
    border-color: #ff8100;
    background: #ff8100;
    
}
</style>