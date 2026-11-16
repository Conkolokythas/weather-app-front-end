<script setup>
const props = defineProps(['hData']);
let hourlyDate = props.hData[0].date;
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let year = hourlyDate.substr(0, 4);
let month = hourlyDate.substr(5, 2);
let day = hourlyDate.substr(8, 2);

let fixedDate = new Date(year, month, day);
</script>

<template>
  <p>{{ year }} - {{ month }} - {{ day }}</p>
  <p>{{ fixedDate }}</p>
</template>