<template>
  <div class="flex flex-col">
    <div class="flex flex-col w-vw gap-[2em] mb-5">
      <h1 class="font-[qbold] text-[2em] text-white">Profile</h1>
      <div class="w-10/12 bg-white h-[3px]"></div>
    </div>

    <div class="border border-white rounded-[30px] w-10/12" v-if="uData">
      <div class="card p-[2em] relative z-10 flex flex-col gap-[1em] rounded-[30px]">
        <div class="flex flex-row justify-between w-vw">
          <div class="flex flex-row gap-[2em]">
            <div
              class="rounded-full w-[100px] h-[100px] bg-[url('../assets/images/Hero.png')] bg-center bg-cover border border-white"
            ></div>
            <ul class="flex flex-col mt-[2em] gap-[.5em]">
              <li class="font-[qmedium] leading-10 text-white text-2xl">
                Name: <span class="font-[qbold] text-xl leading-3">{{ uData.name }}</span>
              </li>
              <li class="font-[qmedium] leading-10 text-white text-2xl">
                Email: <span class="font-[qbold] text-xl leading-3">{{ uData.email }}</span>
              </li>
              <li class="font-[qmedium] leading-10 text-white text-2xl">
                Country: <span class="font-[qbold] text-xl leading-3">Kenya</span>
              </li>
              <li class="font-[qmedium] leading-10 text-white text-2xl">
                Phone:
                <span class="font-[qbold] text-xl leading-3">{{ uData.phone_number }}</span>
              </li>
              <li class="font-[qmedium] leading-10 text-white text-2xl">
                Transactions: <span class="font-[qbold] text-xl leading-3">3325</span>
              </li>
              <li class="font-[qmedium] leading-10 text-white text-2xl">
                User ratings: <span class="font-[qbold] text-xl leading-3">7</span>
              </li>
              <li class="font-[qmedium] leading-10 text-whitegray text-2xl">
                Registration date:
                <span class="font-[qbold] text-xl leading-3">{{ uData.created_at }}</span>
              </li>
            </ul>
          </div>
          <div class="flex flex-col pr-[1em] justify-between">
            <RouterLink
              class="flex flex-row gap-2 w-vw items-center font-[qmedium] text-xl text-white text-right"
              to="/edit"
              >Edit <IconPen
            /></RouterLink>
            <ImageComponent />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <LoadingPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPen from '@/components/icons/IconPen.vue'
import ImageComponent from '@/components/ImageComponent.vue'
import ApiService from '@/core/servives/ApiService'
import { onMounted, ref } from 'vue'
import LoadingPage from '@/components/globals/LoadingPage.vue'
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
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      // Redirect to login page
      router.push({ name: 'login' })
    }
    // console.error('Error fetching user data:', error)
  }
})
</script>

<style scoped>
.card {
  background: linear-gradient(
    138.25deg,
    rgba(217, 217, 217, 0.5) -7.64%,
    rgba(217, 217, 217, 0) 127.25%
  );
}
</style>
