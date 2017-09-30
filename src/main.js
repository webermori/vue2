import Vue from 'vue'
//import App from './App.vue'

new Vue({
  el: '#app',
  data: {
  	titulo: "Weber",
  	bool: true,
  	numeroInteiro: 10,
  	numeroFloat: 20.10,
  	objeto: {
  		name: 'Mario Mori'
  	},
  	link: "http://localhost:8080/"
  },
  //render: h => h(App)
})
