<template>
  <div class="searchBox  flex flex-row bg-white border-y border-lightgray">
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
            <option
              v-for="location in locations"
              :key="location.latitude"
              :value="location.location"
            >
              {{ location.location }}
            </option>
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
            <option v-for="curr in currencies" :key="curr.id" :value="curr.name">
              {{ curr.symbol }} {{ curr.name }}
            </option>
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
            <option v-for="curr in currencies" :key="curr.id" :value="curr.name">
              {{ curr.symbol }} {{ curr.name }}
            </option>
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
import { onMounted, ref } from 'vue'
import ApiService from '@/core/servives/ApiService'
import axios from 'axios'

interface Location {
  location: string
  latitude: string
  longitude: string
  address: string
}

let locations = ref([])
let currencies = ref(null)
const getData = async () => {
  try {
    const { data } = await axios.get('cashpoints')
    const response = await axios.get('currencies')
    for (const item of data) {
      let locObject: Location = JSON.parse(item.location)
      locations.value.push(locObject)
    }
    currencies.value = response.data.currencies
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
