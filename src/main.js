import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faPen);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
