<template>
  <div class="searchBox flex flex-row bg-white border-y border-lightgray">
    <form class="flex flex-row bg-white" novalidate @submit.prevent="onClickSearch">
      <div class="w-11/12 grid grid-cols-4">
        <div
          class="location flex flex-row items-center px-[1.5em] gap-[0.8em] w-full border-x border-lightgray"
        >
          <IconLocation />
          <!--        <form class="max-w-sm mx-auto">-->
          <!--          <select-->
          <!--            id="countries"-->
          <!--            v-model="locationSelected"-->
          <!--            class="bg-transparent capitalize font-[cregular] text-[1.2em] text-darkgray py-2 px-4 rounded-md focus:outline-none block w-full"-->
          <!--          >-->
          <!--            <option disabled value="">Choose a location</option>-->
          <!--            <option class="capitalize" v-for="(location,index) in locations" :key="index">-->
          <!--              {{ location }}-->
          <!--            </option>-->
          <!--          </select>-->
          <div class="relative">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Enter Location"
              @input="filterData"
              class="placeholder:text-darkgray w-vw bg-white text-darkgray placeholder:font-[cregular] placeholder:text-[1.2em]"
              @focus="showList = true"
            />
            <ul
              class="absolute top-[2.7em] -left-12 cursor-pointer w-[25em] bg-light rounded-2xl"
              v-if="showList"
              @click="showList = false"
            >
              <li
                class="py-4 px-3 border-y-2 text-white font-[cregular] text-2xl cursor-pointer"
                v-for="(item, index) in filteredData"
                :key="index"
                @click="updateInput(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
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
      <div class="btn flex">
        <RouterLink
          to="results"
          class="font-[cmedium] bg-light cursor-pointer px-6 text-[1.2em] py-[.8em] rounded-[5px] text-base text-white"
          >Search</RouterLink
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import IconLocation from '@/components/icons/IconLocation.vue'
import { onMounted, ref, reactive, computed } from 'vue'
import { type Location, type Search, useDataStore } from '@/stores/data'
import axios from 'axios'

const datastore = useDataStore()

let locationSelected = ''
let currencyNeeded = ''
let currencyYouHave = ''
let amount = ''
const emit = defineEmits(['child-data-updated'])

const emitData = () => {
  const searchDetails: Search = {
    location: locationSelected,
    currNeeded: currencyNeeded,
    currHave: currencyYouHave,
    amount: amount
  }
  emit('child-data-updated', searchDetails)
}

// context

const onClickSearch = async () => {
  emitData()
  // datastore.searchDetails = searchDetails
}

interface Currency {
  symbol: string
  name: string
  id: number
}
interface LocationR {
  location: string
}

const locations = ref<Set<string>>(new Set())
const currencies = ref<{ [key: string]: Currency }>({})

const getData = async () => {
  try {
    const { data } = await axios.get('cashpoints')
    const response = await axios.get('currencies')

    // Check if the response.data.currencies object exists and is an object
    if (response.data.currencies && typeof response.data.currencies === 'object') {
      currencies.value = response.data.currencies as { [key: string]: Currency }

      for (const item of data) {
        // let locObject: Location = JSON.parse(item.location);
        // let locObject: Location = item.location;
        // const loc = locObject.location
        const loc = item.location
        locations.value.add(loc)
      }
    } else {
      console.error('Invalid currencies data structure')
    }
  } catch (error) {
    console.error(error)
  }
}

//testing
const searchQuery = ref('')
const showList = ref(false)

const filteredData = computed(() => {
  const locationArray = Array.from(locations.value)
  return locationArray.filter((location) =>
    location.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filterData = () => {
  // No need to do anything here as the filteredData computed property
  // will automatically update based on the searchQuery value
}

const updateInput = (itemName: any) => {
  searchQuery.value = itemName
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
