import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export interface Search {
  location: string
  currNeeded: string
  currHave: string
  amount: string
}
export interface Cashpoint {
  id: number
  name: string
  location: string
  currency_from: string
  currency_to: string
  // amount: number
  rate: number
  phone_number: string
  // rating:number
  logo: string
}

export interface Location {
  location: string
  latitude: string
  longitude: string
  address: string
}
export const useDataStore = defineStore('data', () => {
  const search = ref<Search>({} as Search)
  const AllCashpoints = ref(new Set())
  const AllCashpointsMeetingSearch = ref([])
  const searchDetails = ref()

  async function SearchData(search: any) {
    try {
      const { data: cashpointsData } = await axios.get('cashpoints')
      const { data: exchangeRatesData } = await axios.get('ex_rates')

      const filteredCashpoints = cashpointsData.filter((cashpoint: any) => {
        // const { location } = JSON.parse(cashpoint.location);
        // const { location } = JSON.parse(cashpoint.location);
        return cashpoint.location === search.location
        // return location === search.location;
      })

      const matchingExchangeRate = exchangeRatesData.find(
        (rate: any) =>
          rate.currency_from === search.currHave && rate.currency_to === search.currHave
      )

      if (matchingExchangeRate) {
        filteredCashpoints.unshift(matchingExchangeRate)
      }

      const result = filteredCashpoints.map((cashpoint: any) => {
        const { id, name, phone_number, logo, location } = cashpoint
        const exchangeRate = exchangeRatesData.find((rate: any) => rate.cashpoint_id === id)
        const imageLink = `https://beta.culeasy.com/assets/bureaudata/${logo}`

        return {
          id,
          name,
          phone_number,
          logo: imageLink,
          ...exchangeRate
        }
      })

      return result
    } catch (e) {
      console.error(e)
      return []
    }
  }
  return {
    search,
    SearchData,
    // getData,
    // locations,
    // currencies,
    AllCashpoints,
    searchDetails
  }
})
