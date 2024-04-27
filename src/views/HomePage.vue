<script setup lang="ts">
import TheHeader from '@/components/globals/TheHeader.vue'
import FooterComponent from '@/components/globals/FooterComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import { ref } from 'vue'
import SearchBar from '@/components/Widgets/SearchBar.vue'
import HomeFilter from '@/components/globals/HomeFilter.vue'
</script>

<template>
  <div class="bg-[url('../assets/images/herobg.png')] bg-no-repeat bg-[center] bg-cover w-vw">
    <TheHeader />
    <div class="homecontent">
      <div class="hero w-vw">
        <HeroSection />
        <div class="lg:w-9/12 mt-[5em] lg:mx-auto">
          <HomeFilter />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[1em]"></div>
  </div>
  <FooterComponent />
</template>
<style scoped></style>
