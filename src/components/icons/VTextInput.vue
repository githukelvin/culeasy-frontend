import { VTextInput } from '../.nuxt/components'; import { type } from
'../.nuxt/types/imports';
<template>
  <div class="field">
    <div class="label is-normal">
      <label class="label">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="form-group w-full flex flex-col gap-1">
        <div class="passField flex flex-row w-full">
          <div
            :class="borderClass"
            class="input-group flex flex-col bg-white"
          >
            <VField
              v-slot="{ field, meta, errors }"
              :name="name"
              class="text-black py-4 px-3 bg-white"
            >
              <div class="">
                <input
                  v-bind="field"
                  :id="id"
                  v-maska
                  class="text-black w-full py-4 px-3 bg-white"
                  :class="{
                    'is-success': meta.valid && meta.touched,
                    'is-danger': !meta.valid && meta.touched,
                    borderClass,
                  }"
                  :placeholder="placeholder"
                  :type="type"
                  :data-maska="datamaska"
                  :mode="mode"
                >
                <span
                  v-if="meta.valid && meta.touched"
                  class="icon smm:hidden is-small is-right"
                >
                  <i class="fas fa-check has-text-success" />
                </span>
                <span
                  v-else-if="!meta.valid && meta.touched"
                  class="icon smm:hidden is-small is-right"
                >
                  <i class="fas fa-x has-text-danger" />
                </span>
              </div>

              <!-- <VErrorMessage :name="name" as="div" class="help is-danger" /> -->

              <!--end::Input-->
            </VField>
          </div>

        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <VErrorMessage :name="name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue"
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  datamaska: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
  borderClass: {
    type: String,
    default: "",
  },
  mode: {
    type: String,
    default: "",
  },
});
//function toggle type  input from  password to text
const passwordVisible = ref(false);
const passwordVisibleC = ref(false);

const togglePassword = (inputId: string, ISpasswordVisible: any) => {
  const input = document.getElementById(inputId);
  if (!input || !(input instanceof HTMLInputElement)) return;

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
  ISpasswordVisible.value = !ISpasswordVisible.value;
};
</script>

<style></style>
