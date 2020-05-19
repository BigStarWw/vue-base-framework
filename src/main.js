import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from './api/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 使用第三方插件
Vue.use(ElementUI);

Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
