<script setup>
import { ref } from 'vue'
defineProps(['hData']);
console.log(props.hData);

const count = ref(0)
</script>

<template>
  <p>{{ props.hData }}</p>
</template>