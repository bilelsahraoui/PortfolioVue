import './assets/base.css';
import 'aos/dist/aos.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import AOS from 'aos';
import App from './App.vue';
import Cv from './components/views/Cv.vue';
import Accueil from './components/views/Accueil.vue';
import About from './components/views/About.vue';
import Veille from './components/views/Veille.vue';
import Projets from './components/views/Projets.vue';
import PageNotFound from './components/views/PageNotFound.vue';

const routes = [
    {
        name: 'Accueil',
        path: '/',
        component: Accueil,
    },
    {
        name: 'CV & Compétences',
        path: '/cv-competences',
        component: Cv,
    },
    {
        name: 'About',
        path: '/a-propos',
        component: About,
    },
    {
        name: 'Projets',
        path: '/projets',
        component: Projets,
    },
    {
        name: 'Veille',
        path: '/veille-informationnelle',
        component: Veille,
    },
    {
        name: '404',
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')