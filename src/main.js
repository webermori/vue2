import Vue from 'vue';
//import App from './App.vue'
import {Time} from './time';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
//require('bootstrap');

new Vue({
  el: '#app',
  data: {
    times: [
      new Time("Santos", require('./assets/santos_60x60.png')),
      new Time("Flamengo", require('./assets/flamengo_60x60.png')),
      new Time("Coritiba", require('./assets/coritiba_60x60.png')),
    ],

    alfabeto: {
        a: 'A',
        b: 'B',
        c: 'C',
        d: 'D'
    }
  },
})
