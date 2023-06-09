import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import './style.css'
import App from './App.vue'
import PageComponents from './pages/PageComponents.vue';

const Home = { template: '<div>Home</div>' }
const ComponentsPage = PageComponents

const routes = [
  { path: '/', component: Home },
  { path: '/components', component: ComponentsPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App)

app.use(router)

app.mount('#app')