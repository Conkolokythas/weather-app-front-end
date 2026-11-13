<script setup>
import { useGeolocation } from '@vueuse/core';
import { ref, onMounted  } from 'vue';
import { watch } from 'vue';
import axios from 'axios';
import AOS from "aos";

onMounted(() => {
    AOS.init();
})


const { coords } = useGeolocation()
const weather = ref(null);


watch(coords, (newCoords) => {
  if (newCoords.latitude && newCoords.longitude) {
    console.log("Latitude:", newCoords.latitude)
    console.log("Longitude:", newCoords.longitude)

    axios.get('https://wappbend.netlify.app/', {
    params: {
      lat: newCoords.latitude,
      long: newCoords.longitude
    }
  })
  .then(response => {
     weather.value = response.data;
     console.log(weather.value);

    /*
    switch(num.current.icon_num) {
        case 3 || 4 || 5 || 6 || 8 || 27 || 28 || 29 || 30 || 31:
          document.body.style.backgroundImage = "url('img/sunny-clouds.jpg')";
          break;
        case 7 || 10 || 11 || 12 || 13 || 32: 
          document.body.style.backgroundImage = "url('img/cloudy-rain.jpg')";
          break;
        case 16 || 17 || 18 || 19 || 20 || 21 || 22 || 23 || 24 || 25 || 34 || 35 || 36:
          document.body.style.backgroundImage = "url('img/snow.jpg')";
          break;
        case 14 || 15 || 33:
          document.body.style.backgroundImage = "url('img/thunder.jpg')";
          break;
        case 2 || 26:
          document.body.style.backgroundImage = "url('img/sunny.jpg')";
      }
    */


  } )
  .catch(function (error) {
    console.log(error);
  })

  }
})


</script>

<template v-if="weather" data-aos="fade-up">

{{ weather }}

  <div class="container">
    <div class="title">

      <h1>{{ weather.timezone }}</h1>
    </div>
    

  <div class="courent-weather">

    <div class="w-d">

      <div class="w-img" >
        <div id="icon" class="w-icon" v-bind:style="{ 'background-image': 'url(weather_icons/set01/big/'+ weather.current.icon_num +'.png)', 'background-size': 'cover','background-repeat': 'no-repeat' }" v-bind:data-num="`${weather.current.icon_num}`"></div>
      </div>


     <div class="w-description">

      <h2>{{ weather.current.summary }}</h2>
      <h3 class="w-t-celsius">{{ weather.current.temperature }} °C</h3>

      <div class="w-temperature">
      
        <div class="w-uv">

          <div>
            <span><b>Wind:</b> {{ weather.current.wind.speed }} km/h</span>
          </div>

          <div>
            <span><b>Direction: </b></span>

          <span v-if="weather.current.wind_dir == `N`">North</span>
          <span v-else-if="weather.current.wind.dir == `NE`">Northeast</span>
          <span v-else-if="weather.current.wind.dir == `E`">East</span>
          <span v-else-if="weather.current.wind.dir == `SE`">Southeast</span>
          <span v-else-if="weather.current.wind.dir == `S`">South</span>
          <span v-else-if="weather.current.wind.dir == `SW`">Southwest</span>
          <span v-else-if="weather.current.wind.dir == `W`">West</span>
          <span v-else-if="weather.current.wind.dir == `NW`">Northwest</span>
          <span v-else-if="weather.current.wind.dir == `NNE`">North - Northeast</span>
          <span v-else-if="weather.current.wind.dir == `ENE`">East - Northeast</span>
          <span v-else-if="weather.current.wind.dir == `ESE`">East - Southwest</span>
          <span v-else-if="weather.current.wind.dir == `SSE`">South - Southwest</span>
          <span v-else-if="weather.current.wind.dir == `SSW`">South - Southwest</span>
          <span v-else-if="weather.current.wind.dir == `WSW`">West - Southwest</span>
          <span v-else-if="weather.current.wind.dir == `WNW`">West - Northwest</span>
          <span v-else-if="weather.current.wind.dir == `NNW`">North - Northwest</span>
          <span v-else>Unknown</span>

          </div>
          
        </div>
      </div>
    </div>
</div>

   <div class="w-slide">
      <div class="l-info">
        <div class="w-hourly" v-for="hour in weather.hourly.data">
          <div>
            <img :src="`weather_icons/set01/medium/${hour.icon}.png`" alt="">
          </div>
          <div>
            {{ hour.date }} 
        </div>
        <div>
          <span>{{ hour.temperature }} °C</span>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  </div>

</template>

<style scoped>

h1, h2, h3{
  color: whitesmoke;
}
.courent-weather{
  width: 100%;
}

.w-d {
  display: flex;
  justify-content:center;
  flex-direction: row;
  border-bottom: 1px solid rgb(245, 245, 245, 0.17);
  padding: 2em 0 2em 0;
}

.title {
  border-bottom: 1px solid rgb(245, 245, 245, 0.17);
  text-align: center;
}

.w-temperature, .w-slide {
  color: #e9e9e9
}

.w-uv div{
  margin-top: 0.5em;
}

.uv {
  padding: 0em 0.6em 0em 0.6em;
  border-radius: 10px;
}

.w-img {
  flex-grow: 1;
}

.w-icon{
  width: 150px;
  height: 150px;
}

.w-slide {
  margin-top: 2em;
  flex-grow: 1;
}

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

.w-description{
  flex-grow: 2;
  padding: 0.5em 0em 0.5em 1.5em;
}

.w-temperature div {
  padding-bottom: 0.5em;
}

.w-t-celsius {
  font-size: 24px;
}


@media (max-width: 774px) {
  .w-d {
    flex-direction: column;
    align-items: center;
  }

  .title {
    text-align: center;
  }

  .w-description{
  text-align: center;
  padding: 0;
}

.w-slide {
  margin-top: 2em;
  margin-bottom: 2em;
}

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
