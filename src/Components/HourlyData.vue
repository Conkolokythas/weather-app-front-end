<script setup>
const props = defineProps(['hData']);
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for(let i =0; i < props.hData.length; i++){
  let hourlyDate = props.hData[i].date;
  let jsDate = new Date(hourlyDate);
  let fixedDate = jsDate.getDay();
  props.hData[i].date = fixedDate;
}


</script>

<template>

     <div class="w-slide">
      <div class="l-info">
        <div class="w-hourly" v-for="hour in props.hData">
          <div>
            <img :src="`weather_icons/set01/medium/${hour.icon}.png`" alt="">
          </div>
          <div>
            {{hour.date}} 
          </div>
        <div>
          <span>{{ hour.temperature }} °C</span>
        </div>
      </div>
    </div>
  </div>
</template>