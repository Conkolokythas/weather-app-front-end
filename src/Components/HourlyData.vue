<script setup>
const props = defineProps(['hData']);
console.log(props.hData);

</script>

<template>
  <p>{{ props.hData[0].date }}</p>
</template>