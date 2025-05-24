// src/main.js
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import PrimeVue from 'primevue/config';


import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primevue';

const app = createApp(App);
app
  .use(router)
  .use(PrimeVue)
  .component('Button', Button)
  .mount('#app');
