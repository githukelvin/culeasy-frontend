<template>
  <div class="flex pl-[2em] lg:flex-col gap-[2.5em] bg-light h-full rounded-r-2xl">
    <nav class="p-[1.5em]">
      <ul class="flex lg:flex-col lg:gap-[2.5em]">
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.3em] text-white hover:text-darkPurple"
            to="/dhome"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.3em] text-white hover:text-darkPurple"
            to="/dashboard"
            >Dashboard</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.3em] text-white hover:text-darkPurple"
            to="/calculator"
            >Currency Calculator</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.3em] text-white hover:text-darkPurple"
            to="/history"
            >History</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.3em] text-white hover:text-darkPurple"
            to="/quickfx"
            >QuickFX</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.3em] text-white hover:text-darkPurple"
            to="/settings"
            >Settings</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-[qmedium] leadind-6 text-[1.3em] text-white hover:text-darkPurple"
            to="/profile"
            >Profile</RouterLink
          >
        </li>
      </ul>
    </nav>
    <button
      class="border border-white rounded-[7px] px-[1em] py-[.5em] font-[cregular] w-fit text-white"
    >
      Need help?
    </button>

    <button class="bg-transparent w-fit cursor-pointer font-[cbold] mb-1em text-white text-2xl">
      Log Out
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
