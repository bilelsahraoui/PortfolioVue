<template>
    
    <main class="min-h-screen" :class="isDark ? 'dark':''">
        
        <!-- Contenu de la page -->
        <div class="dark:bg-slate-700 pt-72">

            <!-- Erreur -->
            <div class="flex justify-center place-items-center">

                <b><p class="text-xl dark:text-slate-200"> Erreur 404</p></b>

            </div>
            
            <!-- Message -->
            <div class="flex justify-center place-items-center">

                <p class="text-lg dark:text-slate-400">La page que vous avez demandé n'existe pas</p>

            </div>

            <!-- Footer -->
            <div class="flex justify-center items-center">
                
                <div class="pt-[357px] pb-5">
                
                    <Footer></Footer>
                
                </div>
        
            </div>

        </div>
        
    </main>

</template>

<script>

import Footer from '../objects/footer.vue';

export default {
    data() {
        return {
        };
    },
    components: { Footer },
    
}

</script>