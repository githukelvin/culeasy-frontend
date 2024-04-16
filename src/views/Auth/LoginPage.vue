<template>
  <TransparentCard>
    <h1>Login to your Culeasy Account</h1>
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

  <ButtonComponent>
    Login
  </ButtonComponent>
</VForm>
  </TransparentCard>
</template>

<script setup lang="ts">
import TransparentCard from '@/components/TransparentCard.vue'
import IconUser from '@/components/icons/IconUser.vue'
import VTextInput from '@/components/VTextInput.vue'
import { Form as VForm } from 'vee-validate';
import IconPassword from '@/components/icons/IconPassword.vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<style scoped></style>
