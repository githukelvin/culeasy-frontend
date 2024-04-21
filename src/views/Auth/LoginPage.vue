<template>
  <TransparentCard>
    <h1 class="font-[qsemibold] text-[2em] text-white">Login to your Culeasy Account</h1>
    <VForm
      novalidate
      @submit="onSubmitLogin"
      :validation-schema="login"
      class="flex gap-5 flex-col"
    >
      <VTextInput name="email" placeholder="Enter Email" type="email">
        <IconEmail />
      </VTextInput>

      <VTextInput name="password" placeholder="Enter Password" type="password">
        <IconPassword />
      </VTextInput>
      <div class="flex text-xl flex-col gap-[1em] actions">
        <ButtonComponent> Login </ButtonComponent>

        <router-link
          to="/sign-up"
          class="text-white text-xl font-[qsemibold] text-center rounded-[25px] py-[1em] bg-[#FF9E8C] w-full"
        >
          Don't have account? Register
        </router-link>
      </div>
      <SignUpGoogle />
    </VForm>
  </TransparentCard>
</template>

<script setup lang="ts">
import TransparentCard from '@/components/TransparentCard.vue'
import VTextInput from '@/components/VTextInput.vue'
import { Form as VForm } from 'vee-validate'
import IconPassword from '@/components/icons/IconPassword.vue'
import IconEmail from '@/components/icons/IconEmail.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import SignUpGoogle from '@/components/Widgets/SignUpGoogle.vue'
import * as Yup from 'yup'
import { useAuthStore, type User } from '@/stores/auth'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const login = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
})

const store = useAuthStore()
const router = useRouter()

const onSubmitLogin = async (values: any) => {
  values = values as User
  //   clear  existing error
  store.logout()

  //   send login request
  await store.login(values)

  const error = Object.values(store.errors)
  console.log(error)

  if (error.length === 0) {
    Swal.fire({
      text: 'You have Sucessfully Logged In',
      icon: 'success',
      buttonsStyling: false,
      heightAuto: false,
      customClass: {
        confirmButton: 'btn font-[cbold] bg-[#007200] px-[2em] p-[1em] rounded-xl  text-white'
      }
    }).then(() => {
      router.push({ name: 'profile' })
    })
  } else {
    Swal.fire({
      text: error[0] as string,
      icon: 'error',
      buttonsStyling: false,
      confirmButtonText: 'Try again!',
      heightAuto: false,
      customClass: {
        confirmButton: 'btn font-[cbold] bg-[#d00000] p-[1em] rounded-xl text-white'
      }
    })
  }
}
</script>

<style scoped></style>
