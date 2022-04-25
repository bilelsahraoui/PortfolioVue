<template>

  <!-- Icon Bilel -->
  <div class="flex justify-center mb-5 mt-10 items-center">

    <BilelIcon></BilelIcon>
  
  </div>

  <!-- Message Bienvenue -->
  <div class="flex justify-center">

    <p class="text-lg text-blue-500"> Bienvenue sur mon Portfolio ! </p>
  
  </div>
    
</template>

<script>

import BilelIcon from '../icons/bilelIcon.vue';

export default {
    data() {
        return {};
    },
    components: { BilelIcon },
}

</script>