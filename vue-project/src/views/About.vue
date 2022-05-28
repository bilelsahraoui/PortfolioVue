<template>

    <main class="min-h-full" :class="isDark ? 'dark':''">

        <!-- Main div -->
        <div class="dark:bg-slate-700">

            <!-- A propos de moi -->
            <div class="flex justify-center mb-3 items-center">

                <p class="text-xl pt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                    À propos de moi
                
                </p>

            </div>

            <div class="flex text-sm justify-center items-center pt-6">

                <p class="mx-3 text-center dark:text-slate-300">

                    Actuellement étudiant en BTS SIO (Services Informatique aux Organisations)
                    au Lycée Polyvalent de Cachan, je <br> 
                    souhaite continuer mes études en Master dans le développement Web après l'obtention de mon diplôme.
                </p>

            </div>

            <!-- Parcours -->
            <div class="flex justify-center mb-3 items-center">

                <p class="text-xl pt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                    Parcours
                
                </p>

            </div>

            <div class="flex text-sm justify-center items-center pt-6">

                <p class="mx-3 text-center dark:text-slate-300">

                    Dans le but de commencer mes études supérieures avec des bases en programmation, <br>
                    j'ai choisi de faire une Terminale STMG option SIG (SYSTEME D'INFORMATION ET DE GESTION). <br>
                    Après l'obtention de mon BAC, j'ai continué vers un BTS SIO (Services Informatiques aux Organisations). <br>
                    Je suis actuellement sur la fin de ma 2ème année de BTS. <br>
                    Après l'obtention de celui-ci, je souhaite continuer vers un master en tant que développeur web full-stack.
                
                </p>

            </div>

            <!-- Contact -->
            <div class="flex justify-center mb-3 items-center">

                <p class="text-xl pt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                    Me contacter
                
                </p>

            </div>

            <div class="flex justify-center items-center dark:text-slate-300">

                <p>N'hésitez pas à me contacter !</p>
            
            </div>

            <div class="flex text-sm justify-center items-center">

                <!--Email-->
                <div class="place-items-center justify-center pt-7 p-3 m-4">
                    
                    <div class="flex justify-center mb-3 items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope-plus-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/></svg>
                    
                    </div>

                    <a class="dark:text-slate-300" href="mailto:bsahraoui.mail@gmail.com" target="_blank" >bsahraoui.mail@gmail.com</a>
                
                </div>

                <!--Phone-->
                <div class="place-items-center justify-center pt-7 p-3 m-4">

                    <div class="flex justify-center mb-3 items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/></svg>

                    </div>

                    <p class="dark:text-slate-300">07 68 63 63 15 </p>
    
                </div>

            </div>

            <!-- Footer -->
            <div class="flex justify-center items-center">
                
                <div class="pt-3">
                
                    <Footer></Footer>
                
                </div>
        
            </div>

            <div class="dark:bg-slate-700 pb-32 md:pb-30">

            </div>

        </div>

    </main>

</template>

<script>

import BilelIcon from '../components/icons/bilelIcon.vue';
import Footer from '../components/objects/footer.vue';

export default {
    data() {
        return {
        };
    },
    components: { BilelIcon, Footer },
    
}

</script>