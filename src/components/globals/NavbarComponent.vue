<template>
  <header class="container flex flex-row items-center py-[1em] justify-between">
    <div class="logo">
      <IconBlack />
    </div>
    <div class="navbar">
      <nav>
        <ul class="flex flex-row gap-[2em]">
          <li>
            <RouterLink exact-active-class="text-light" to="/" class="font-[qregular] text-[1.1em]"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="text-light" to="/about" class="font-[qregular] text-[1.1em]"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="text-light" to="/about" class="font-[qregular] text-[1.1em]"
              >Contact</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="text-light" to="/login" class="font-[qregular] text-[1.1em]"
              >Sign In</RouterLink
            >
          </li>
          <li>
            <a href="https://beta.culeasy.com/" target="_blank" class="font-[qregular] text-[1.1em]"
              >Bureas</a
            >
          </li>
          <li>
            <RouterLink
              to="/sign-up"
              class="font-[qregular] text-[1.1em] bg-light p-[1em] rounded-xl"
              >Sign Up</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconBlack from '@/components/icons/IconBlack.vue'
</script>

<style scoped>
header {
  background: white;
}
</style>
