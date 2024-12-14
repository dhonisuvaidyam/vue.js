import './style.css';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import router from './routes';

// Import components

// Create Vue app instance
const app = createApp(App);

// Use plugins and provide global properties
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);


// Mount the app
createApp(App).use(router).mount('#app');

