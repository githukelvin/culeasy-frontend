<template>
  <TransparentCard>
    <h1 class="font-[qsemibold] text-white text-[2em]">Create your account</h1>
    <VForm
      class="flex flex-col gap-3"
      @submit="onSubmitRegister"
      novalidate
      :validation-schema="registration"
    >
      <VTextInput name="name" placeholder="Enter Username" type="text">
        <IconUser />
      </VTextInput>
      <VTextInput name="email" placeholder="Enter Email" type="email">
        <IconEmail />
      </VTextInput>
      <VTextInput
        name="phone_number"
        placeholder="Enter Phone Number"
        type="text"
        datamaska="+254 ### ######"
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
        <!-- <ButtonComponent> Create Account Now </ButtonComponent> -->
        <button
          class="text-white disabled:bg-[#FF9E8C]-400 flex items-center justify-center gap-6 text-xl font-[qsemibold] text-base rounded-[25px] py-[1em] bg-[#FF9E8C] w-full"
          type="submit"
          ref="submitButton"
        >
          <span class="font-[qsemibold] text-2xl">Register</span>
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-darkPurple border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
            v-show="isLoading"
          >
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>
        </button>
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
import { useAuthStore, type User } from '@/stores/auth'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const registration = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  phone_number: Yup.string().required(),
  password: Yup.string().required().min(8),
  cpassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Password must Match')
})

const store = useAuthStore()
const router = useRouter()

const submitButton = ref<HTMLButtonElement | null>(null)
const isLoading = ref(false)

const onSubmitRegister = async (values: any) => {
  values = values as User
  const credentials = { ...values, user_type: 'seller' }
  //   clear all errors
  store.logout()
  store.errors = {}

  if (submitButton.value) {
    // eslint-disable-next-line
    submitButton.value!.disabled = true
    // Activate indicator
    isLoading.value = true
    submitButton.value.setAttribute('data-kt-indicator', 'on')
  }

  //   registering
  await store.register(credentials)

  const error = Object.values(store.errors)

  if (error.length === 0) {
    Swal.fire({
      text: 'Account Created Successfully',
      icon: 'success',
      buttonsStyling: false,
      heightAuto: false,
      customClass: {
        confirmButton: 'btn font-[cbold] bg-[#007200] px-[2em] p-[1em] rounded-xl  text-white'
      }
    }).then(() => {
      router.push({ name: 'login' })
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
