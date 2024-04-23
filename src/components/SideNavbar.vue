<template>
  <div class="flex pl-[2em] lg:flex-col gap-[2.5em] bg-light h-full rounded-r-2xl">
    <nav class="py-[1.5em]">
      <ul class="flex lg:flex-col lg:gap-[2.5em]">
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.5em] text-white hover:text-darkPurple"
            to="/dhome"
            activeClass="text-darkPurple font-[qbold] border-b-2 "
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.5em] text-white hover:text-darkPurple"
            to="/results"
            activeClass="text-darkPurple font-[qbold] border-b-2 "
            >Results</RouterLink
          >
        </li>

        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.5em] text-white hover:text-darkPurple"
            to="/history"
            activeClass="text-darkPurple font-[qbold] border-b-2 "
            >History</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.5em] text-white hover:text-darkPurple"
            to="/quickfx"
            activeClass="text-darkPurple font-[qbold] border-b-2 "
            >QuickFX</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.5em] text-white hover:text-darkPurple"
            to="/settings  "
            activeClass="text-darkPurple font-[qbold] border-b-2 "
            >Settings</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.5em] text-white hover:text-darkPurple"
            to="/profile"
            activeClass="text-darkPurple font-[qbold] border-b-2 "
            >Profile</RouterLink
          >
        </li>
      </ul>
    </nav>
    <div class="py-[2em] flex flex-col gap-10">
      <button
        class="border border-white rounded-[7px] px-[1em] py-[.5em] font-[cregular] w-fit text-white"
      >
        Need help?
      </button>

      <button
        @click="store.logout()"
        class="bg-transparent w-fit cursor-pointer font-[cbold] mb-1em text-white text-2xl"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
</script>

<style scoped></style>
