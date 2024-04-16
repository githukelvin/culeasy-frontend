<template>
  <div class="bg-[#38071A] container grid grid-cols-2 w-vw h-svh">
    <div class="leftDiv grid place-items-center">
      <header>
        <IconCuleasy />
      </header>
      <IconRectangle/>
    </div>
    <div class="authdiv">
      <TransparentCard>
          <router-view/>
      </TransparentCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconCuleasy from '@/components/icons/IconCuleasy.vue'
import IconRectangle from '@/components/icons/IconRectangle.vue'
import TransparentCard from '@/components/TransparentCard.vue'
import VTextInput from '@/components/VTextInput.vue'
</script>

<style scoped></style>
