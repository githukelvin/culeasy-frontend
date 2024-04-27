<template>
  <div class="flex flex-col gap-6">
    <div class="w-11/12 mt-10">
      <SearchBar @child-data-updated="handleChildDataUpdate" />
    </div>
    <div class="flex flex-col">
      <h1 class="font-[qbold] text-[2em] text-white">Results</h1>
      <!--      v-if="AllCashpoints.length > 1"-->
      <div class="flex flex-col gap-[1em]">
        <!--        <p>Data from child: {{ dataFromChild }}</p>-->

        <ResultsCard
          v-for="Cashpoints of AllCashpoints"
          :key="Cashpoints.id"
          :results="Cashpoints"
        />
      </div>
      <!--      <div class="flex flex-col gap-5" v-else>-->
      <!--        <div class="border-white border"></div>-->
      <!--        <LoadingPage />-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/Widgets/SearchBar.vue'
import ResultsCard from '@/components/Widgets/ResultsCard.vue'
import { useDataStore, type Cashpoint } from '@/stores/data'
import LoadingPage from '@/components/globals/LoadingPage.vue'
import axios from 'axios'
import { ref, onMounted, watch, computed } from 'vue'
const dataStore = useDataStore()
const AllCashpoints = ref<Cashpoint[]>([]) // Explicitly define the type of AllCashpoints

// get Data  from childcomponent Se
const dataFromChild = ref('')

const handleChildDataUpdate = async (data: string) => {
  const dataApi = await dataStore.SearchData(data)
  AllCashpoints.value = [...dataApi] // Assign the new data to AllCashpoints
  dataFromChild.value = data
}
// test

const getCashpoints = async () => {
  try {
    const { data } = await axios.get('cashpoints')

    const response = await axios.get('ex_rates')
    // AllCashpointsMeetingSearch
    for (const Cashpoint of data) {
      const cashpoint_idd = Cashpoint.id
      const { name, phone_number, logo, location } = Cashpoint
      for (let eitem of response.data) {
        const { rate, cashpoint_id, currency_from, currency_to } = eitem
        const imageLink = `https://beta.culeasy.com/assets/bureaudata/${logo}`
        if (cashpoint_id == cashpoint_idd) {
          const cashpointObject: Cashpoint = {
            id: cashpoint_id,
            name: name,
            phone_number: phone_number,
            logo: imageLink,
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
// watch(
//   dataFromChild,
//   (newValue, oldValue) => {
//     // console.log('dataFromChild updated:', newValue, oldValue)
//   },
//   // { deep: true }
// )

onMounted(() => {
  getCashpoints()
})
</script>

<style scoped></style>
_newValue_oldValue
