import { defineStore } from 'pinia'
import type { Customer } from '@/types/customer'
import { ref } from 'vue'

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref<Customer[]>([
    {
      name: 'Jeffe Bezasse',
    },
  ])

  function getCustomers() {
    return customers.value
  }

  function addCustomer(customer: Customer) {
    customers.value.push(customer)
  }

  function updateCustomer(oldCustomer: Customer, newName: string) {
    const customer = customers.value.find((customer: Customer) => customer === oldCustomer)

    if (!customer) {
      console.log('No customer found')
      return
    }

    customer.name = newName
  }

  function deleteCustomer(customerToDelete: Customer) {
    const customerIndexToDelete = customers.value.findIndex(
      (customer: Customer) => customer === customerToDelete,
    )
    customers.value.splice(customerIndexToDelete, 1)
  }

  return { getCustomers, addCustomer, updateCustomer, deleteCustomer }
})
