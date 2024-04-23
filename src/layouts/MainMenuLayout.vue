<template>
  <div class="min-h-svh bg-darkPurple">
    <IconInner />
    <div class="w-vw container py-[1.2em] flex flex-row justify-between">
      <IconCuleasy />
      <div class="flex flex-row gap-[2em] items-center">
        <IconNotification />
        <div
          class="rounded-full w-[40px] h-[40px] bg-[url('../assets/images/Hero.png')] bg-center bg-cover border border-white"
        ></div>
        <p class="text-white font-[cregular] text-[1.3em]" v-if="uData">{{ uData.name }}</p>
        <h3 v-else>Loading</h3>
      </div>
    </div>

    <div class="grid grid-cols-[15vw_auto] gap-[5em]">
      <SideNavbar />
      <div class="bg-black flex flex-col">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideNavbar from '@/components/SideNavbar.vue'
import IconInner from '@/components/icons/IconInner.vue'
import IconCuleasy from '@/components/icons/IconCuleasy.vue'
import IconNotification from '@/components/icons/IconNotification.vue'
import { onMounted, ref } from 'vue'
import ApiService from '@/core/servives/ApiService'

let uData = ref(null)

// Make GET request
onMounted(async () => {
  try {
    const idUser = localStorage.getItem('id_user') || ''
    const { data } = await ApiService.get('users', idUser)
    uData.value = data.user
    console.log(uData.value)
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
})
</script>

<style scoped></style>
