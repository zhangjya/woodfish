import { createApp } from 'vue';
import 'normalize.css';

import router from './router/index';

// 支持挂载全局属性
import { initGlobalProperties } from './utils/globalProperties/index';

import App from './App.vue';

// 全局css
import './styles/app.css';

const app = createApp(App);
initGlobalProperties(app);

// 路由管理
app.use(router);

app.mount('#app');
