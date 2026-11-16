<script setup>
const props = defineProps(['hData']);
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for(let i =0; i < props.hData.length; i++){
  let hourlyDate = props.hData[i].date;
  let jsDate = new Date(hourlyDate);
  let fixedDate = jsDate.getDay();
  let hour = hourlyDate.substr(11, 5);
  props.hData[i].date = weekDays[fixedDate] + '\n' + hour;
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

<style scoped>

.l-info{
  display: flex;
  flex-direction: row;
  align-items: start;
  font-size: 14px;
  font-weight: bold;

  width: 100%;
  height: fit-content;
  white-space: nowrap;    
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: rgba(255, 255, 255, 0.719) rgba(249, 249, 249, 0);
  scrollbar-width: thin;
}

.l-info div {
  width: 100%;
  padding-left: 1em;
}

@media (max-width: 774px) {
.l-info{
  width: 100%;
  height: fit-content;
  white-space: nowrap;    
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}

.l-info div {
  padding: 0 1em 0 1em;
}
}

</style>