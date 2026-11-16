<script setup>
const props = defineProps(['hData']);
let hourlyDate = props.hData[0].date;
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/*let year = hourlyDate.substr(0, 4);
let month = hourlyDate.substr(5, 2);
let day = hourlyDate.substr(8, 2);*/

let jsDate = new Date(hourlyDate);
let fixedDate = jsDate.getDay();
</script>

<template>
  <p>{{ hourlyDate }}</p>
  <p>{{ weekDays[fixedDate] }}</p>
</template>