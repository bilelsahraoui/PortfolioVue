import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import About from "../views/About.vue";
import Accueil from "../views/Accueil.vue";
import Cv from "../views/Cv.vue";
import Meteo from "../views/Meteo.vue";
import Projets from "../views/Projets.vue";
import Veille from "../views/Veille.vue";

const routes = [
    {
        path: '/',
        redirect: '/',
        component: DefaultLayout,
        children: [
            {path: '/', name: 'Accueil', component: Accueil},
            {path: '/projets', name: 'Projets', component: Projets},
            {path: '/a-propos', name: 'À propos', component: About},
            {path: '/MeteoAPI', name: 'Météo', component: Meteo},
            {path: '/cv-competences', name: 'CV & Compétences', component: Cv},
            {path: '/veille-informationnelle', name: 'Veille Informationnelle', component: Veille}
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;