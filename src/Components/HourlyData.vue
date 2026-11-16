<script setup>
const props = defineProps(['hData']);
let hourlyDate = props.hData[0].date;

let year = hourlyDate.substr(0, 1, 2, 3);
let month = hourlyDate.substr(5, 6);
let day = hourlyDate.substr(8, 9);
</script>

<template>
  <p>{{ year }} - {{ month }} - {{ day }}</p>
</template>