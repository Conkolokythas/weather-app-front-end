<script setup>
import { ref } from 'vue'
defineProps(['hData']);
console.log(props.hData);

const count = ref(0)
</script>

<template>
  <div class="w-hourly" v-for="hour in weather.hourly.data">
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
</template>