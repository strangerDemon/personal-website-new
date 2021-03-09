import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, message } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.less';

const app = createApp(App);

/**
 * user vuex router
 */
app.use(store).use(router).mount('#app');

/**
 * ant
 */
/* Automatically register components under Button, such as Button.Group */
app.use(Button);

app.config.globalProperties.$message = message;