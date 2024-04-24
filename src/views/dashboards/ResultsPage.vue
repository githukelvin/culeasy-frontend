<template>
  <div class="flex flex-col gap-6">
    <div class="w-11/12 mt-10">
      <SearchBar />
    </div>
    <div class="flex flex-col">
      <h1 class="font-[qbold] text-[2em] text-white">Results</h1>
      <div class="flex flex-col gap-[1em]" v-if="AllCashpoints">
        {{ AllCashpoints }}
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
      </div>
      <div class=" flex flex-col gap-5" v-else>
    <div class="border-white border"></div>
    <LoadingPage/>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/Widgets/SearchBar.vue'
import ResultsCard from '@/components/Widgets/ResultsCard.vue'
import { useDataStore,type Cashpoint } from '@/stores/data'
import LoadingPage from '@/components/globals/LoadingPage.vue';
import  axios from 'axios';
import { ref ,onMounted} from 'vue';
const AllCashpoints = ref([])
const getCashpoints =async ()=>{
  try {
      const { data } = await axios.get('cashpoints')
      // const response = await axios.get('ex_rates')
      const options = {
        method: 'GET',
        url: 'https://culeasy.titan.africa/api/ex_rates/',
        headers: {
          Authorization: 'Bearer 2|L595i4vmzUAZxeIQ3Gppa60Jt1fGhfIVHZsfofkk9656e1db'
        }
      }

      const response = await axios.get('ex_rates', { headers: options.headers })
   // AllCashpointsMeetingSearch
   for (const Cashpoint of data) {
        // console.log(Cashpoint)
        const cashpoint_idd = Cashpoint.id
        const { name, phone_number, logo, location } = Cashpoint
        for (let eitem of response.data) {
          // const response = await axios.get('ex_rates', { headers: options.headers })
          const { rate, cashpoint_id, currency_from, currency_to } = eitem
          // console.log('cashpoint id', cashpoint_idd, name, cashpoint_id)
          if (cashpoint_id == cashpoint_idd) {
            const cashpointObject: Cashpoint = {
              id: cashpoint_id,
              name: name,
              phone_number: phone_number,
              logo: logo,
              rate: rate,
              currency_from: currency_from,
              currency_to: currency_to,
              location: location
            }
            AllCashpoints.value.push(cashpointObject)
          }
        }
      }
  } catch (error) {
    console.error(error)
  }
}
const dataStore = useDataStore()
onMounted(() => {
  getCashpoints()
    console.log(AllCashpoints.value)
})
</script>

<style scoped></style>
