<template>
  <div
    class="searchBox mt-[5em] lg:w-9/12 flex flex-row lg:mx-auto bg-white border-y border-lightgray"
  >
    <div class="w-11/12 grid grid-cols-4">
      <div
        class="location flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
      >
        <IconLocation />
        <form class="max-w-sm mx-auto">
          <select
            id="countries"
            class="bg-transparent font-[cregular] text-[1.2em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
          >
            <option selected>Choose a location</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
      </div>
      <div
        class="currency flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
      >
        <form class="max-w-sm mx-auto">
          <select
            id="countries"
            class="bg-transparent font-[cregular] text-[1.2em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
          >
            <option selected>Currency you have ?</option>
            <option value="US">Dollars</option>
            <option value="CA">Canadian Dollar</option>
            <option value="FR">Francs</option>
            <option value="DE">Euro</option>
          </select>
        </form>
      </div>
      <div
        class="currency flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
      >
        <form class="max-w-sm mx-auto">
          <select
            id="countries"
            class="bg-transparent font-[cregular] text-[1.2em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
          >
            <option selected>Currency you need ?</option>
            <option value="US">Dollars</option>
            <option value="CA">Canadian Dollar</option>
            <option value="FR">Francs</option>
            <option value="DE">Euro</option>
          </select>
        </form>
      </div>
      <div
        class="currency flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
      >
        <form class="max-w-sm mx-auto">
          <input
            type="text"
            name="money"
            placeholder="Amount"
            class="placeholder:text-darkgray w-vw bg-white text-darkgray placeholder:font-[cregular] placeholder:text-[1.2em]"
            id=""
          />
        </form>
      </div>
    </div>
    <div class="btn">
      <button
        class="font-[cmedium] bg-light cursor-pointer px-6 text-[1.2em] py-[.8em] rounded-[5px] text-white"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLocation from '@/components/icons/IconLocation.vue'
</script>

<style scoped></style>
