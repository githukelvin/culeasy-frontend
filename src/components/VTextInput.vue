<template>
  <div class="inputField flex flex-col gap-4">
    <!--  Begin:input   -->
    <div
      class="field py-3 px-[1em] w-full flex flex-row gap-[1.5em] border-[1px] rounded-[15px] border-white"
    >
      <div class="w-[45px]">
        <slot />
      </div>

      <Field
        :name="name"
        :type="type"
        :placeholder="placeholder"
        aria-autocomplete="none"
        v-maska
        :data-maska="datamaska"
        class="inputs bg-transparent w-full text-white"
      >
      </Field>
    </div>
    <!--    End::input-->

    <!--    Error message::start-->
    <div class="message">
      <div class="info">
        <ErrorMessage :name="name" />
      </div>
    </div>
    <!--    Errormessage:end-->
  </div>
</template>

<style scoped>
::placeholder {
  color: #fff;
}
input {
  background: transparent;
}
</style>
<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import { vMaska } from 'maska'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  datamaska: {
    type: String,
    required: false
  }
})
</script>
