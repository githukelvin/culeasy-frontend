<template>
  <TransparentCard>
    <h1 class="font-[qsemibold] text-white text-[2em]">Create your account</h1>
    <VForm class="flex flex-col gap-3" :validation-schema="registration">
      <VTextInput name="username" placeholder="Enter Username" type="text">
        <IconUser />
      </VTextInput>
      <VTextInput name="email" placeholder="Enter Email" type="email">
        <IconEmail />
      </VTextInput>
      <VTextInput
        name="phone"
        placeholder="Enter Phone Number"
        type="text"
        datamaska="+254 ### #######"
      >
        <icon-phone />
      </VTextInput>
      <div class="grid grid-cols-2 gap-3">
        <VTextInput name="password" placeholder="Enter Password" type="password">
          <IconPassword />
        </VTextInput>
        <VTextInput name="cpassword" placeholder="Re-Enter Password" type="password">
          <IconPassword />
        </VTextInput>
      </div>

      <SignUpGoogle />
      <div class="flex flex-row py-[1em] gap-[1em] items-center">
        <input
          type="checkbox"
          class="appearance-none w-[25px] cursor-pointer h-[25px] border-[1px] checked:bg-[#FF9E8C] before:relative border-[#FF9E8C]"
          name=""
          id=""
        />
        <p class="font-[qregular] text-2xl text-white">I agree to terms and conditions</p>
      </div>
      <div class="flex flex-col gap-[1em] actions">
        <ButtonComponent> Create Account Now </ButtonComponent>

        <router-link
          to="/login"
          class="text-white font-[qsemibold] text-xl text-center rounded-[25px] py-[1em] bg-[#FF9E8C] w-full"
        >
          Already have account? Login
        </router-link>
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
import SignUpGoogle from '@/components/Widgets/SignUpGoogle.vue'
import * as Yup from 'yup'

const registration = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().required().email(),
  phone: Yup.string().required(),
  password: Yup.string().required().min(8),
  cpassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Password must Match')
})
</script>

<style scoped></style>
