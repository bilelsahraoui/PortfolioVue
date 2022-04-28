<template>

    <main class="min-h-screen" :class="isDark ? 'dark':''">

        <!-- Main div -->
        <div class="dark:bg-slate-700">
            
            <!-- Icon Bilel -->
            <div class="flex justify-center mb-5 items-center">

                <div class="mt-28">
                    
                    <BilelIcon></BilelIcon>
                
                </div>
            
            </div>

            <!-- Message de Bienvenue -->
            <div class="flex justify-center mb-3 items-center">

                <p class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                    Bienvenue sur mon Portfolio ! 
                
                </p>

            </div>

            <div class="flex text-sm justify-center items-center">

                <p class="mx-10 text-center dark:text-slate-300">

                    Vous retrouverez ici mon parcours, mes compétences ainsi que mes créations <br>
                    en tant que développeur Full-Stack
                </p>

            </div>

            <!-- Design responsive en cours de travail -->

            <!-- Footer -->
            <div class="flex justify-center items-center">
                
                <div class="pb-5 pt-10">
                
                    <Footer></Footer>
                
                </div>
        
            </div>
    
        </div>

    </main>

</template>

<script>

import BilelIcon from '../icons/bilelIcon.vue';
import Footer from '../objects/footer.vue';

export default {
    data() {
        return {
        };
    },
    components: { BilelIcon, Footer },
    
}

</script>

