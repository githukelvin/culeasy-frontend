<template>
  <div class="flex flex-col gap-[0.5em]">
    <div class="flex relative flex-row items-center gap-[1em] justify-around">
      <div class="h-[1px] w-9/12 bg-white"></div>
      <p class="text-center text-white font-[qmedium] text-[1.5em]">or</p>
      <div class="h-[1px] w-9/12 bg-white"></div>
    </div>
    <div
      class="border-[1px] rounded-[25px] gap-[1em] border-white text-center py-[0.5em] px-[1em] flex items-center"
    >
      <IconGoogle />
      <button class="w-full cursor-pointer text-white font-[qsemibold] text-xl">
        Sign Up with Google
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconGoogle from '@/components/icons/IconGoogle.vue'
</script>
<style scoped></style>
