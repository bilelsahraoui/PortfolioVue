<template>

    <main class="min-h-full" :class="isDark ? 'dark':''">

        <!-- Main div -->
        <div class="dark:bg-slate-700">

            <!-- Projets div -->
            <div class="justify-center items-center flex">

                <div class="grid grid-cols-2 gap-3 place-content-evenly w-3/4 rounded-lg">

                    <!-- Boucle Projets -->
                    <div class="py-10 justify-center min-w-xl items-center flex rounded-md" v-for="projet in projets" :key="projet.id">

                        <!-- card -->
                        <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">

                            <!-- img -->
                            <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" :src="`../../images/${projet.img}`" />
                            
                            <!-- text information -->
                            <div class="p-4">
                            
                                <small class="text-blue-400 text-xs"> Projet n°{{ projet.id }} </small>
                                
                                <h1 class="text-2xl font-medium text-slate-600 pb-2"> {{ projet.name }} </h1>
                                
                                <p class="text-sm tracking-tight font-light text-slate-400 leading-6"> {{ projet.description }} </p>

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

// bg-gradient-to-r mt-10 from-[#A69E8C] to-[#C8B2A1] 
// dark:bg-gradient-to-r dark:from-[#42d392] dark:to-[#5f8bee] 

import Footer from '../objects/footer.vue';

export default {
    data() {
        return {

            projets: [
            {
                id: 1,
                name: 'SicilyLines Symfony',
                description: 'Une application web permettant de réserver des traversées entre les îles de la Sicile',
                img: 'bateau.jpg',
            },
            {
                id: 2,
                name: 'SicilyLines C#',
                description: 'Une application winForms permettant de gérer les liaisons et les tarifs proposés par la compagnie',
                img: 'sicilebateau.jpg',
            },
            {
                id: 3,
                name: 'Site bonbons',
                description: "Une application web permettant d'acheter des bonbons",
                img: 'bonbons.jpg',
            },
            {
                id: 4,
                name: 'Portfolio',
                description: 'Portfolio actuel, fait via le framework Vue.js',
                img: 'vue.png',
            },

            ],
        };
    },

    components: { Footer },

}

</script>