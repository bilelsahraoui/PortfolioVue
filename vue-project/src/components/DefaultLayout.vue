<template>

  <div class="" :class="isDark ? 'dark':''">

    <div class="dark:bg-slate-700">

      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800" id="nav">

        <div class="container flex flex-wrap justify-between items-center mx-auto">

          <!-- Logo Bilel -->
          <div>

            <img src="../assets/logo-bs.svg" alt="logo bilel sahraoui">

          </div>

        <div class="flex items-center md:order-2">

          <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(1054.4px, 976.4px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">

            <ul class="py-1 items-center" aria-labelledby="dropdown">

              <li v-for="route in navigation" :key="route.name">

                <router-link :to="route.to"><p class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{{route.name}}</p></router-link>
        
              </li>

            </ul>

          </div>
        
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          
          </button>
        
        </div>

        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

            <li v-for="item in navigation" :key="item.name">

              <router-link :to="item.to" class="flex items-center"><p class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{item.name}}</p></router-link>
        
            </li>
        
          </ul>

          <!-- Dark/Light Mode -->
          <button @click="isDark=!isDark" class="rounded-full md:ml-10">
            <div v-if="isDark" class="h-12 w-12">
              <img src='../assets/sun.svg' />
            </div>
            <div v-else class="h-12 w-12">
              <img src='../assets/moon.svg' />
            </div>
          </button>
        
        </div>
      
      </div>

    </nav>

    </div>

    <div>
      <!-- Router View -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      
    </div>

  </div>

</template>

<script>

import Footer from './objects/footer.vue'

const navigation = [
    {name: 'Accueil', to: '/'},
    {name: 'Projets', to: '/projets'},
    {name: 'CV & Compétences', to: '/cv-competences'},
    {name: 'Veille Informationnelle', to: '/veille-informationnelle'},
    {name: 'Météo', to: '/MeteoAPI'},
    {name: 'À propos', to: '/a-propos'}
]

export default {
  components: {
    Footer,
},
  data(){
    return{
      isDark: this.$store.state.isDark
    }
  },
  setup(){
    return{
      navigation
    }
  },
}

</script>