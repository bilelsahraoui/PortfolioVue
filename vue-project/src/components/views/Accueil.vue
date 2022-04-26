<template>

    <main class="min-h-full" :class="isDark ? 'dark':''">

        <div class="dark:bg-slate-700 min-h-screen">
            
            <!-- Icon Bilel -->
            <div class="flex justify-center mb-5 mt-1 items-center">

                <BilelIcon></BilelIcon>
    
            </div>

            <!-- Message de Bienvenue -->
            <div class="flex justify-center items-center">

                <p class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#5f8bee]"> 

                Bienvenue sur mon Portfolio ! 
                
                </p>

            </div>

        </div>

    </main>

</template>

<script>

import BilelIcon from '../icons/bilelIcon.vue';

export default {
    data() {
        return {
            username: 'Visiteur',
            // isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
        };
    },
    components: { BilelIcon },
    
}

</script>

