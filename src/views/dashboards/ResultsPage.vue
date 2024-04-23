<template>
  <div class="flex flex-col gap-6">
    <div class="w-11/12 mt-10">
      <SearchBar />
    </div>
    <div class="flex flex-col">
      <h1 class="font-[qbold] text-[2em] text-white">Results</h1>
      <div class="flex flex-col gap-[1em]">
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/Widgets/SearchBar.vue'
import ResultsCard from '@/components/Widgets/ResultsCard.vue'
</script>

<style scoped></style>
