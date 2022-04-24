<template>

  <!-- Navbar -->
  <div class="bg-transparent pt-5 pb-5">

    <!-- Navbar content -->
    <div class="flex justify-evenly dark:text-white-">

      <!-- Logo Bilel -->
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" class="bg-blue-500">
        Logo
      </div>

      <!-- Routes -->
      <router-link to="/" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-2">Accueil</p></router-link>
      <router-link to="/projets" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-2">Projets</p></router-link>
      <router-link to="/veille-informationnelle" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-2">Veille Informationnelle</p></router-link>
      <router-link to="/a-propos" class="hover:bg-gradient-to-r from-[#42d392] to-[#5f8bee] rounded-full"><p class="mx-2">A propos</p></router-link>

    </div>

  </div>

  <!-- Router View -->
  <router-view></router-view>

</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

</script>
