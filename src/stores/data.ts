import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export interface Search {
  location: string
  currNeeded: string
  currYouhave: string
  amount: number
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
  const AllCashpoints = ref([])
  const AllCashpointsMeetingSearch = ref([])
  const searchDetails = ref()

  async function SearchData(search: any) {
      // console.log(response.data)
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
      for (const item of data) {
        const locObject = JSON.parse(item.location)
        if (locObject.location == search.location) {
          AllCashpointsMeetingSearch.value.push(item)
        }
      }
      for (let item of response.data) {
        if (item.currency_from == search.currHave && item.currency_to == search.currHave) {
          AllCashpointsMeetingSearch.value.unshift(item)
        }
      }

     
    } catch (e) {
      console.error(e)
    }
    console.log(AllCashpointsMeetingSearch.value)
    console.log(AllCashpoints.value)
    return AllCashpoints.value
  }
  return {
    search,
    SearchData,
    // getData,
    // locations,
    // currencies,
    searchDetails
  }
})
