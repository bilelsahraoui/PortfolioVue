<template>

    <main class="min-h-screen" :class="isDark ? 'dark':''">

        <!-- Main div -->
        <div class="dark:bg-slate-700">

            <!-- Projets div -->
            <div class="justify-center items-center flex">

                <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-3 place-content-evenly w-3/4 rounded-lg">

                    <!-- Boucle Projets -->
                    <div class="py-10 justify-center min-w-xl items-center flex rounded-md" v-for="projet in projets" :key="projet.id">

                        <!-- card -->
                        <div class="mx-auto flex w-96 flex-col justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-300/60">

                            <!-- img -->
                            <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" :src="`../../images/${projet.img}`" />
                            
                            <!-- text information -->
                            <div class="p-4">
                            
                                <small class="text-blue-400 text-xs dark:text-blue-400"> Projet n°{{ projet.id }} </small>
                                
                                <h1 class="text-2xl font-medium text-slate-600 pb-2 dark:text-slate-200"> {{ projet.name }} </h1>
                                
                                <p class="tracking-tight font-light dark:text-slate-400 leading-6"> {{ projet.description }} </p>

                                <p class="tracking-tight font-light text-blue-800 italic leading-6">
                                    <a :href="projet.github" target="_blank">
                                        GitHub
                                    </a>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
                
            </div>

            <!-- Footer -->
            <div class="flex justify-center items-center">
                    
                <div class="py-5">
                    
                    <Footer></Footer>
                    
                </div>
            
            </div>

        </div>

    </main>

</template>

<script> 

import Footer from '../components/objects/footer.vue';

export default {
    data() {
        return {

            projets: [
            {
                id: 1,
                name: 'SicilyLines Symfony',
                description: 'Une application web permettant de réserver des traversées entre les îles de la Sicile',
                img: 'bateau.jpg',
                github: 'https://github.com/bilelsahraoui/SicilyLines-Symfony',
            },
            {
                id: 2,
                name: 'SicilyLines C#',
                description: 'Une application winForms permettant de gérer les liaisons et les tarifs proposés par la compagnie',
                img: 'sicilebateau.jpg',
                github: 'https://github.com/bilelsahraoui/SicilyLines-v2',
            },
            {
                id: 3,
                name: 'Météo API',
                description: "Récupère les informations d'une API et les affiche, projet accessible depuis la barre de navigation ",
                img: 'meteo.png',
                github: 'https://github.com/bilelsahraoui/MeteoAPI',
            },
            {
                id: 4,
                name: 'Flouflix',
                description: "Flouflix est une imitation de Netflix, récuperant ses données depuis l'API The Movie Database",
                img: 'flouflix.png',
                github: 'https://github.com/bilelsahraoui/Flouflix',
            },
            {
                id: 5,
                name: 'Portfolio',
                description: 'Portfolio actuel, réalisé via le framework Vue.js & Tailwind css',
                img: 'vue.png',
                github: 'https://github.com/bilelsahraoui/PortfolioVue',
            },
            {
                id: 6,
                name: 'Site bonbons',
                description: "Une application web permettant d'acheter des bonbons, réalisé en 1ère année de BTS",
                img: 'bonbons.jpg',
                github: 'https://github.com/bilelsahraoui/Bonbons2021',
            },

            ],
        };
    },

    components: { Footer },

}

</script>