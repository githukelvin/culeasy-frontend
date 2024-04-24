<template>
  <div class="searchBox flex flex-row bg-white border-y border-lightgray">
    <div>{{ locationSelected }} {{ currencyNeeded }} {{ currencyYouHave }} {{ amount }}</div>

    <form
      class="flex flex-row bg-white border-y border-lightgray"
      novalidate
      @submit.prevent="onClickSearch"
    >
      <div class="w-11/12 grid grid-cols-4">
        <div
          class="location flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
        >
          <IconLocation />
          <!--        <form class="max-w-sm mx-auto">-->
          <select
            id="countries"
            v-model="locationSelected"
            class="bg-transparent capitalize font-[cregular] text-[1.2em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
          >
            <option disabled value="">Choose a location</option>
            <option class="capitalize" v-for="location in locations" :key="location.index">
              {{ location }}
            </option>
          </select>
          <!--        </form>-->
        </div>
        <div
          class="currency flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
        >
          <!--        <form class="max-w-sm mx-auto">-->
          <select
            v-model="currencyYouHave"
            id="countries"
            class="bg-transparent capitalize font-[cregular] text-[1.2em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
          >
            <option disabled value="">Currency you have ?</option>
            <option class="capitalize" v-for="curr in currencies" :key="curr.id" :value="curr.name">
              {{ curr.symbol }} {{ curr.name }}
            </option>
          </select>
          <!--        </form>-->
        </div>
        <div
          class="currency flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
        >
          <!--        <form class="max-w-sm mx-auto">-->
          <select
            id="countries"
            v-model="currencyNeeded"
            class="bg-transparent capitalize font-[cregular] text-[1.2em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"
          >
            <option disabled value="">Currency you need ?</option>
            <option class="capitalize" v-for="curr in currencies" :key="curr.id" :value="curr.name">
              {{ curr.symbol }} {{ curr.name }}
            </option>
          </select>
          <!--        </form>-->
        </div>
        <div
          class="currency flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
        >
          <!--        <form class="max-w-sm mx-auto">-->
          <input
            type="text"
            name="money"
            v-model="amount"
            placeholder="Amount"
            class="placeholder:text-darkgray w-vw bg-white text-darkgray placeholder:font-[cregular] placeholder:text-[1.2em]"
            id=""
          />
          <!--        </form>-->
        </div>
      </div>
      <div class="btn">
        <input
          type="submit"
          value="Search"
          @click="emitData"
          class="font-[cmedium] bg-light cursor-pointer px-6 text-[1.2em] py-[.8em] rounded-[5px] text-white"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import IconLocation from '@/components/icons/IconLocation.vue'
import { onMounted, ref, reactive } from 'vue'
import { type Location, useDataStore } from '@/stores/data'
import axios from 'axios'

const datastore = useDataStore()

let locationSelected = ''
let currencyNeeded = ''
let currencyYouHave = ''
let amount = ''
const emit = defineEmits(['child-data-updated'])

const emitData = () => {
  const searchDetails = {
    location: locationSelected,
    currNeeded: currencyNeeded,
    currHave: currencyYouHave,
    amount: amount
  }
  emit('child-data-updated', searchDetails)
}

// context

const onClickSearch = async () => {
  const searchDetails = {
    location: locationSelected,
    currNeeded: currencyNeeded,
    currHave: currencyYouHave,
    amount: amount
  }
  emitData()
  datastore.searchDetails = searchDetails
  // console.log(searchDetails)
  // locationSelected = ''
  // currencyNeeded = ''
  // currencyYouHave = ''
  // amount = ''
}

const locations = ref(new Set())
const currencies = ref(null)

const getData = async () => {
  try {
    const { data } = await axios.get('cashpoints')
    const response = await axios.get('currencies')
    currencies.value = response.data.currencies
    for (const item of data) {
      let locObject: Location = JSON.parse(item.location)
      locations.value.add(locObject.location)
    }
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
