import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

const app = createApp(App);

/**
 * user vuex router
 */
app.use(store).use(router).mount('#app');

/**
 * ant
 */
/* Automatically register components under Button, such as Button.Group */
app.use(ant);
