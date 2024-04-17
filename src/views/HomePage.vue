<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
import NavbarComponent from '@/components/globals/NavbarComponent.vue'
</script>

<template>
 <div class="main">
   <div class="home">
     <div class="grid grid-cols-[95vw,1vw] w-vw bg-darkPurple py-[1em] items-center">
       <a
         class="toplink font-[cbold] text-white text-[1.25em] text-center leading-5"
         href="/register"
       >Join Culeasy today and enjoy easy and faster currency exchange transactions
       </a>
       <IconClose />
     </div>
   </div>
   <div class="hero w-vw h-svh bg-[url('../assets/images/hero.png')]">
     <navbar-component/>

   </div>
 </div>
</template>

<style scoped>
.toplink {
  color: white;
}
</style>
