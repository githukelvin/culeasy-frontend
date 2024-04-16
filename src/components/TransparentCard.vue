<script setup lang="ts"></script>

<template>
  <div class="card p-[2em] w-9/12 relative z-10 flex flex-col gap-[1em] rounded-[30px]">
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
