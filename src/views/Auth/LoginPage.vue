<template>
  <TransparentCard>
    <h1 class="font-[qsemibold] text-[2em] text-white">Login to your Culeasy Account</h1>
<VForm>
  <VTextInput
    name="email"
    placeholder="Enter Email"
    type="email"
  >
    <IconEmail/>
  </VTextInput>


  <VTextInput
    name="password"
    placeholder="Enter Password"
    type="password"
  >
    <IconPassword/>
  </VTextInput>
  <div class="flex flex-col gap-[1em] actions">
    <ButtonComponent>
      Login
    </ButtonComponent>


    <router-link to="/sign-up" class="text-white font-[qsemibold] text-center  rounded-[25px] py-[1em]  bg-[#FF9E8C] w-full ">
      Don't have account? Register
    </router-link >
  </div>
</VForm>
  </TransparentCard>
</template>

<script setup lang="ts">
import TransparentCard from '@/components/TransparentCard.vue'
import VTextInput from '@/components/VTextInput.vue'
import { Form as VForm } from 'vee-validate';
import IconPassword from '@/components/icons/IconPassword.vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<style scoped></style>
