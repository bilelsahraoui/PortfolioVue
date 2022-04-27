<template>

  <main class="min-h-full" :class="isDark ? 'dark':''">

    <div class="dark:bg-slate-700">

      <!-- Navbar -->
      <div class="bg-transparent pt-5 pb-5 dark:bg-slate-800 dark:text-slate-300" id="nav">

        <!-- Navbar content -->
        <div class="flex justify-evenly items-center">

          <!-- Logo Bilel -->
          <div>
            <img src="./assets/logo-bs.svg" alt="logo bilel sahraoui">
          </div>

          <!-- Routes -->
          <div class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full" v-for="route in routes" :key="route.name">
            <router-link :to="`${route.link}`"><p class="mx-4">{{route.name}}</p></router-link>
          </div>

          <!-- Dark/Light Mode -->
          <button @click="isDark=!isDark" class="rounded-full">
            <div v-if="isDark" class="h-12 w-12">
              <img src='./assets/sun.svg' />
            </div>
            <div v-else class="h-12 w-12">
              <img src='./assets/moon.svg' />
            </div>
          </button>

        <!-- Fin content -->
        </div>

      <!-- Fin Navbar -->
      </div>

      <!-- Router View -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      
      </router-view>

    </div>

  </main>

</template>

<script>

import { onMounted } from "vue";
import AOS from "aos";

let sysPref = window.matchMedia('(prefers-color-scheme: dark)').matches;

export default {
  data(){
    return{
      routes: [
        {
          name: 'Accueil',
          link: '/',
        },
        {
          name: 'CV & Compétences',
          link: '/cv-competences',
        },
        {
          name: 'Projets',
          link: '/projets',
        },
        {
          name: 'Veille Informationnelle',
          link: '/veille-informationnelle',
        },
        {
          name: 'À propos',
          link: '/a-propos',
        },
      ],
      isDark:sysPref,
    }
  },
  setup(){
    onMounted(() => {
    AOS.init();
  })
    return{
    }
  }
}

</script>
