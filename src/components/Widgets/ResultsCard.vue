<template>
  <div class="lg:w-11/12 flex flex-col gap-4">
    <div class="border-white border"></div>
    <div class="grid grid-cols-[1fr_15em_15em] gap-8">
      <div class="grid grid-cols-2 gap-3">
        <div class="info">
          <img
            class="w-[18rem] h-[16rem] object-cover"
            src="https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image 1"
          />
        </div>
        <div class="details flex flex-col gap-12">
          <h1 class="text-white font-[qbold] text-[1.6em]">Emy Exchange</h1>
          <p class="font-[qregular] text-white text-xl">
            100,000 usdt available
            <span class="font-[Causten] text-xl text-white">Limit $10</span>
          </p>
          <p class="text-xl font-[qbold] text-white">+254 700349970</p>
        </div>
      </div>
      <div class="starsDistance flex flex-col gap-16">
        <div class="stars flex flex-row">
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </div>
        <p class="font-[Causten] text-xl text-white">1.5km from vendor</p>
      </div>
      <div class="last flex flex-col gap-8">
        <div class="rating flex flex-row gap-5 justify-between">
          <div class="reviews w-full">
            <h2 class="font-[cregular] text-xl text-white text-right">Review Score</h2>
            <p class="font-[cregular] text-xs text-white text-right">80 reviews</p>
          </div>
          <p class="rounded-sm p-[.5em] font-[Causten] text-2xl bg-light">8.5</p>
        </div>

        <p class="price font-[Causten] text-2xl font-[400] text-white text-right">KES 130/USD</p>
        <button
          class="text-white cursor-pointer font-[qbold] text-[1.5em] rounded bg-light py-3 px-5"
        >
          visit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
</script>

<style scoped></style>
