import { createApp } from 'vue'
import App from './App.vue'
import { timeDueNewYear } from './utils/timeDueNewYear'

const app = createApp(App);

app.config.globalProperties.$timeDueNewYear = timeDueNewYear;

app.mount('#app');
