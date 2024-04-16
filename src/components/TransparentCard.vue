<script setup lang="ts"></script>

<template>
  <div class="card h-[50svh] w-[200px] rounded-[30px]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  background: linear-gradient(
    138.25deg,
    rgba(217, 217, 217, 0.5) -7.64%,
    rgba(217, 217, 217, 0) 127.25%
  );
}
</style>
