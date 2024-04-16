<template>
  <main class="bg-[#38071A] w-vw h-svh">
    <div class="container mx-auto grid grid-cols-2 w-vw h-full">
      <div class="leftDiv grid place-items-center">
        <header>
          <IconCuleasy />
        </header>
        <IconRectangle />
      </div>
      <div class="authdiv grid place-items-center">
        <RouterView />
      </div>
      <BottomShape/>
    </div>
  </main>
</template>

<script setup lang="ts">
import IconCuleasy from '@/components/icons/IconCuleasy.vue'
import IconRectangle from '@/components/icons/IconRectangle.vue'
import TransparentCard from '@/components/TransparentCard.vue'
import BottomShape from '@/components/icons/BottomShape.vue'
import VTextInput from '@/components/VTextInput.vue'
import IconUser from '@/components/icons/IconUser.vue'
</script>

<style scoped></style>
