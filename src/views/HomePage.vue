<script setup lang="ts">
import TheHeader from '@/components/globals/TheHeader.vue'
import FooterComponent from '@/components/globals/FooterComponent.vue'
import HeroSection from '@/components/HeroSection.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconAvailability from '@/components/icons/IconAvailability.vue'
import IconRate from '@/components/icons/IconRate.vue'
import VTextInput from '@/components/VTextInput.vue'
import { ref } from 'vue'

let location = ref()
let currency = ref()
</script>

<template>
  <div class="bg-[url('../assets/images/herobg.png')] bg-no-repeat bg-[center] bg-cover w-vw">
    <TheHeader />
    <div class="homecontent">
      <div class="hero w-vw">
        <HeroSection />
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
                  class="bg-transparent font-[cregular] text-[1em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
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
                  class="bg-transparent font-[cregular] text-[1em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
                >
                  <option selected>Type of Currency</option>
                  <option value="US">Dollars</option>
                  <option value="CA">Canadian Dollar</option>
                  <option value="FR">Francs</option>
                  <option value="DE">Euro</option>
                </select>
              </form>
            </div>
            <div
              class="rate flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
            >
              <IconRate />
              <p class="text-darkgray font-[cregular] text-[1em] font-[500]">Exchange rate</p>
            </div>
            <div
              class="availability flex flex-row items-center px-[1em] gap-[0.8em] w-full border-lightgray"
            >
              <IconAvailability />
              <p class="text-darkgray font-[cregular] text-[1em] font-[500]">Availability</p>
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
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
<style scoped>
.appearance-none {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em;
}
</style>
