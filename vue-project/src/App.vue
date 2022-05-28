<template>
  
  <router-view></router-view>

</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";

export default {
  setup(){
    onMounted(() => {
      AOS.init();
    })
    return{
    }
  }
}
</script>