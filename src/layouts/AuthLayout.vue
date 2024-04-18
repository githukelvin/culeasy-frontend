<template>
  <main class="bg-[#38071A] relative w-vw p-[2em]">
    <BottomShape />

    <div class="container mx-auto grid grid-cols-2 w-vw">
      <div class="leftDiv grid place-items-center">
        <header>
          <IconCuleasy />
        </header>
        <IconRectangle />
      </div>
      <div class="authdiv grid place-items-center">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import IconCuleasy from '@/components/icons/IconCuleasy.vue'
import IconRectangle from '@/components/icons/IconRectangle.vue'
import BottomShape from '@/components/icons/BottomShape.vue'
</script>

<style scoped></style>
