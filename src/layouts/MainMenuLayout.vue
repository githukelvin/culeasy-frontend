<template>
  <div class="grid grid-cols-[25vw_75vw]">
    <SideNavbar/>
    <div class="bg-black w-vw h-svh">
      <RouterView/>
    </div>

  </div>
</template>

<script setup lang="ts">

import SideNavbar from '@/components/SideNavbar.vue'
</script>

<style scoped>

</style>