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

    <div class="grid grid-cols-[15vw_auto] gap-[3em]">
      <SideNavbar />
      <div class="flex flex-col">
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
import { useRouter } from 'vue-router'
interface User {
  name: string
  email: string
  phone_number: string
  created_at: string
}
let uData = ref<{ [key: string]: User }>({})
const router = useRouter()
// Make GET request
onMounted(async () => {
  try {
    const idUser = localStorage.getItem('id_user') || ''
    const { data } = await ApiService.get('users', idUser)
    uData.value = data.user
  } catch (error: any) {
    // console.error('Error fetching user data:', error)

    if (error.response.status === 401) {
      localStorage.removeItem('token')
      // Redirect to login page
      router.push({ name: 'login' })
    }
  }
})
</script>

<style scoped></style>
