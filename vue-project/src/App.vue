<template>

  <!-- Navbar -->
  <div class="bg-transparent pt-5 pb-5">

    <!-- Navbar content -->
    <div class="flex justify-evenly items-center dark:text-white-">

      <!-- Logo Bilel -->
      <div data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
        <img src="./assets/logo-bs.svg" alt="logo bilel sahraoui">
      </div>

      <!-- Routes -->
      <router-link to="/" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-4">Accueil</p></router-link>
      <router-link to="/cv" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-4">CV</p></router-link>
      <router-link to="/projets" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-4">Projets</p></router-link>
      <router-link to="/veille-informationnelle" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-4">Veille Informationnelle</p></router-link>
      <router-link to="/a-propos" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-4">A propos</p></router-link>

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

</template>

<script setup lang="ts">

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

</script>
