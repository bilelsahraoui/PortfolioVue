<template>

    <main class="min-h-screen" :class="isDark ? 'dark':''">

        <!-- Main div -->
        <div class="dark:bg-slate-700">

            <!-- CV -->
            <div class="flex justify-center items-center">

                <p class="text-xl pt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                    CV
                
                </p>

            </div>

            <!-- Icon PDF -->
            <div class="dark:bg-slate-700 flex pt-3 justify-center items-center dark:text-slate-300 md:text-red-500">
                
                <p class="mx-10 text-center">
                
                    Si vous souhaitez consulter mon CV, il est disponible ici : 
                
                </p>
            
            </div>

            <div class="flex justify-center mt-5 items-center">

                <CVPDF></CVPDF>

            </div>

            <!-- Compétences -->
            <div class="flex justify-center mb-3 items-center">

                <p class="text-xl pt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                    Compétences
                
                </p>

            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10 items-center rounded-lg text-white mx-3">

                <div class="flex justify-center mb-3 items-center" v-for="competence in competences" :key="competence.id">

                    <div class="w-80 about-picture">

                        <img

                            :src="`../../images/${competence.img}`"
                            :alt="`${competence.name}`"
                        
                        />
                        
                        <p class="picture-title">

                            {{competence.name}}
                                
                        </p>
                    
                    </div>

                </div>

            </div>

            <!-- Apprentissage -->
            <div class="flex justify-center mb-3 items-center">

                <p class="text-xl pt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                    En cours d'apprentissage
                
                </p>

            </div>

            <!-- <div class="grid grid-cols-2 pt-10 rounded-lg text-white"> -->

                <div class="flex justify-center mb-3 text-white">

                    <div class="w-80 about-picture mx-4 pt-5" v-for="langage in apprentissage" :key="langage.id">

                        <img

                            :src="`../../images/${langage.img}`"
                            :alt="`${langage.name}`"
                        
                        />
                        
                        <p class="picture-title">

                            {{langage.name}}
                                
                        </p>
                    
                    </div>

                </div>


            <!-- Footer -->
            <div class="flex justify-center items-center">
                
                <div class="pb-5">
                
                    <Footer></Footer>
                
                </div>
        
            </div>

        </div>

    </main>

</template>

<script>

import CVPDF from '../icons/cv-pdf.vue';
import Footer from '../objects/footer.vue';
import Navbar from '../objects/navbar.vue';

export default {
    data() {
        return {
            competences: [
            {
                id: 1,
                name: 'Vue.js',
                img: 'vue.png',
            },
            {
                id: 2,
                name: 'JavaScript',
                img: 'js.png',
            },
            {
                id: 3,
                name: 'Symfony',
                img: 'symfony.jpg',
            },
            {
                id: 4,
                name: 'PHP',
                img: 'php.png',
            },
            {
                id: 5,
                name: 'Java',
                img: 'java.png',
            },
            {
                id: 6,
                name: 'C#',
                img: 'csharp.png',
            },
            {
                id: 7,
                name: 'Sql / DataBase',
                img: 'sql.png',
            },
            {
                id: 8,
                name: 'Python',
                img: 'python.png',
            },

            ],

            apprentissage: [
            {
                id: 1,
                name: 'React.js',
                img: 'react.png',
            },
            {
                id: 2,
                name: 'Laravel',
                img: 'laravel.png',
            },

            ],
        };
    },
    components: { CVPDF, Footer },
    
}

</script>