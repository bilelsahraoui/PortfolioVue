<template>

    <main class="min-h-full" :class="isDark ? 'dark':''">

        <!-- Projets div -->
        <div class="justify-center items-center flex">
            
            <div class="bg-red-500 max-w-fit items-center flex">

                <!-- Boucle Projets -->
                <div class="" v-for="projet in projets" :key="projet.id">

                    <p>{{ projet.name }} | {{ projet.description }}</p>

                </div>

            </div>
            
        </div>

        <!-- Footer -->
        <div class="flex justify-center items-center">
                
            <div class="pt-[357px] pb-5">
                
                <Footer></Footer>
                
            </div>
        
        </div>

    </main>

</template>

<script>

import Footer from '../objects/footer.vue';

export default {
    data() {
        return {

            projets: [
            {
                id: 1,
                name: 'SicilyLines Symfony',
                description: 'Je suis la description de Symfony',
                img: '',
            },
            {
                id: 2,
                name: 'SicilyLines C#',
                description: 'Je suis la description de C#',
                img: '',
            },
            {
                id: 3,
                name: 'Site bonbons',
                description: 'Je suis la description du site bonbons',
                img: '',
            },
            {
                id: 3,
                name: 'Portfolio',
                description: 'Je suis la description du Portfolio',
                img: '',
            },

            ],
        };
    },

    components: { Footer },

}

</script>