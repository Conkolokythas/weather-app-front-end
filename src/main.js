import { createApp } from 'vue'
import App from './App.vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.mount('#app')



 onMounted(() => {

  const body = document.querySelector("body");
  const num = document.querySelector("#icon").getAttribute("data-num");
    console.log("Variables being set");
  switch(num) {
  case 3 || 4 || 5 || 6 || 8 || 27 || 28 || 29 || 30 || 31:
    body.style.backgroundImage = "url('img/sunny-clouds.jpg')";
    break;
  case 7 || 10 || 11 || 12 || 13 || 32: 
    body.style.backgroundImage = "url('img/cloudy-rain.jpg')";
    break;
  case 16 || 17 || 18 || 19 || 20 || 21 || 22 || 23 || 24 || 25 || 34 || 35 || 36:
    body.style.backgroundImage = "url('img/snow.jpg')";
    break;
  case 14 || 15 || 33:
    body.style.backgroundImage = "url('img/thunder.jpg')";
    break;
  case 2 || 26:
    body.style.backgroundImage = "url('img/sunny.jpg')";  
 }
 console.log("That works");
}) 
  
