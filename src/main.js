import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false


// configures the axios library to direct all HTTP calls to this URL
axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
    render: h => h(App),
}).$mount('#app')