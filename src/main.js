import { createApp } from 'vue'
import App from './App.vue'
import store from '../store'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus);
library.add(faMinus);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .mount('#app')
