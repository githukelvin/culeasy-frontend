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
    <div class="bg-white">
      <NavbarComponent />
    </div>
  </div>
</template>
<script setup lang="ts">
import NavbarComponent from '@/components/globals/NavbarComponent.vue'
import IconClose from '@/components/icons/IconClose.vue'
</script>
<style scoped>
.toplink {
  color: white;
}
</style>
