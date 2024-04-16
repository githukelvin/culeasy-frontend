<template>
  <TransparentCard>
    <h1 class="font-[qsemibold] text-white text-[2em]">Create your account</h1>
    <VForm>
      <VTextInput
        name="username"
        placeholder="Enter Username"
        type="text"
      >
        <IconUser/>
      </VTextInput>
      <VTextInput
        name="email"
        placeholder="Enter Email"
        type="email"
      >
        <IconEmail/>
      </VTextInput>
      <VTextInput
        name="phone"
        placeholder="Enter Phone Number"
        type="text"
        datamaska="+254 ### #######"
      >
        <icon-phone/>
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
         Create Account Now
       </ButtonComponent>


       <router-link to="/login" class="text-white font-[qsemibold] text-center  rounded-[25px] py-[1em]  bg-[#FF9E8C] w-full ">
         Already have account? Login
       </router-link >
     </div>
    </VForm>
  </TransparentCard>
</template>

<script setup lang="ts">
import TransparentCard from '@/components/TransparentCard.vue'
import IconUser from '@/components/icons/IconUser.vue'
import VTextInput from '@/components/VTextInput.vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import IconPassword from '@/components/icons/IconPassword.vue'
import { Form as VForm } from 'vee-validate'
import IconPhone from '@/components/icons/IconPhone.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<style scoped></style>
