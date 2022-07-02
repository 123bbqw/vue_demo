import Vue from 'vue'
import App from './App'
import {mixin} from './mixin'
Vue.mixin(mixin)
new Vue({
    el: "#app",
    render: h => h(App),
    comments: { App }
})