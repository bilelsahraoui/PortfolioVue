<template>

    <main class="min-h-full" :class="isDark ? 'dark':''">

        <!-- Main div -->
        <div class="dark:bg-slate-700">

            <!-- CyberSecurité -->
            <div>

                <!-- Titre -->
                <div class="flex text-lg font-extrabold justify-center dark:text-slate-300 pt-5 italic">
                    La Cyber-Sécurité
                </div>

                <!-- Contenu -->
                <div class="flex justify-center items-center dark:text-slate-300 pt-2">
                    <p>De nos jours, la plupart des choses qui nous entourent sont informatisés, que ça soit : </p>
                </div>

                <div class="flex justify-center items-center dark:text-slate-300">
                    <p>les voitures, les systèmes de gestion (banque, impôts, ..), montres, et même les guerres. </p>
                </div>

                <div class="flex justify-center items-center dark:text-slate-300">
                    <p> Au vu de tous les appareils connectés de nos jours, il est devenu nécessaire de se protéger soi et ses données.</p>
                </div>

                <!-- HTB -->
                <div class="text-3xl text-red-500 flex justify-center items-center pt-10 dark:text-red-600">
                    HackTheBox
                </div>

                <!-- Question -->
                <div class="text-lg text-black flex justify-center items-center pt-6 pb-3 dark:text-slate-300">
                    <b class="underline">Qu'est ce que c'est ?</b>
                </div>

                <!-- Contenu -->
                <div class="flex justify-center items-center pt-3 dark:text-slate-300">
                    HackTheBox est un site internet proposant des cours, des exercices ainsi qu'une
                </div>

                <div class="flex justify-center items-center dark:text-slate-300">
                    communauté dédiée à la Cyber-Sécurité. Le but des exercices est de récupérer un "flag"
                </div>
                
                <div class="flex justify-center items-center dark:text-slate-300">
                    contenant un long code de caractères aléatoires, récupérable en réussissant le test d'intrusion.
                </div>

                <!-- Images -->
                <div class="grid grid-cols-2 place-content-evenly">
                
                    <div class="py-10 justify-center items-center flex rounded-md" data-aos="zoom-in" v-for="image in htb" :key="image.id">

                        <!-- img -->
                        <img class="aspect-video w-8/12 rounded-lg object-cover object-center" :src="`../../images/${image.img}`" />

                    </div>

                </div>

                <!-- Section -->
                <div class="text-lg text-black flex justify-center items-center pt-6 pb-3 dark:text-slate-300">
                    <b class="underline">Apprendre</b>
                </div>

                <div class="flex justify-center items-center pt-3 dark:text-slate-300">
                    Dans le but de former et de prévenir des cybers-risques, HackTheBox a
                </div>

                <div class="flex justify-center items-center dark:text-slate-300">
                    mis en place une structure s'appelant HackTheBox Academy.
                </div>
                
                <div class="flex justify-center items-center dark:text-slate-300">
                    Cette structure donne des cours, des conseils ainsi qu'un accès à une grande
                </div>

                <div class="flex justify-center items-center dark:text-slate-300">
                    communauté de passionnés. Ils proposent également une certification.
                </div>

                <!-- Images -->
                <div class="py-10 justify-center items-center flex rounded-md" data-aos="flip-up">

                    <!-- img -->
                    <img class="aspect-video w-1/3 rounded-lg object-cover object-center" src="images/htb3.png" />

                </div>

                <!-- Section -->
                <div class="text-lg text-black flex justify-center items-center pt-6 pb-3 dark:text-slate-300">
                    <b class="underline">De mon côté</b>
                </div>

                <div class="flex justify-center items-center pt-3 dark:text-slate-300">
                    J'ai personnellement un anglais assez bien développé pour suivre ces cours en ligne et facilement comprendre.
                </div>

                <div class="flex justify-center items-center dark:text-slate-300">
                   J'ai à ce jour terminé les 3/4 des machines disponibles au niveau débutant et continue d'en apprendre de jours
                </div>
                
                <div class="flex justify-center items-center dark:text-slate-300">
                    en jours afin d'obtenir la satisfaction d'avoir réussi un test d'intrusion & dans l'espoir de passer la certification.
                </div>

                <!-- Images -->
                <div class="py-10 justify-center items-center flex rounded-md" data-aos="flip-up">

                    <!-- img -->
                    <img class="aspect-video w-1/3 rounded-lg object-cover object-center" src="images/htb4.png" />

                </div>

                <div class="flex justify-center text-xl items-center dark:text-slate-300">
                    <a href="#nav">Revenir en haut ↑ </a>
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

import Footer from '../objects/footer.vue';

export default {
    data() {
        return {
            htb: [
                {
                    id: 1,
                    img: 'htb1.png',
                },
                {
                    id: 2,
                    img: 'htb2.png',
                }
            ]
        };
    },
    components: { Footer },
    
}

</script>