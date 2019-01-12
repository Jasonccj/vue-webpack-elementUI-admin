import Vue from 'vue'                       //引入vue
import App from '.App'                      //引入App.vue

new Vue({
    el: '#app',                             //挂载
    render: h => h(App)                     //渲染Dom
})