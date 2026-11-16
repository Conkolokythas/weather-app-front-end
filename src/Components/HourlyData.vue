<script setup>
import { ref } from 'vue'
defineProps(['hData']);
console.log(hData);

const count = ref(0)
</script>

<template>
  <p>{{ hData }}</p>
</template>