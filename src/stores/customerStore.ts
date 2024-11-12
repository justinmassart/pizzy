import { defineStore } from 'pinia'
import type { Customer } from '@/types/customer'

export const useCustomerStore = defineStore('customer', () => {
  const customers: Customer[] = []

  function addCustomer(customer: Customer) {
    try {
      customers.push(customer)
      console.log('A new customer was added :', customer)
      console.log('Every customers :', customers)
    } catch (e) {
      console.log(e)
    }
  }

  function deleteCustomer(name: string) {
    const customerIndex = customers.findIndex((customer: Customer) => customer.name === name)
    const customer: Customer = customers[customerIndex]
    customers.splice(customerIndex, 1)
    console.log('A customer was deleted :', customer)
    console.log('Every customers :', customers)
  }

  return { customers, addCustomer, deleteCustomer }
})
