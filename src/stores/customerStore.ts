import { defineStore } from 'pinia'
import type { Customer } from '@/types/customer'
import { ref } from 'vue'
import { fakerEN } from '@faker-js/faker'

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref<Customer[]>([])

  function createFakeCustomers() {
    for (let i = 0; i < 5; i++) {
      customers.value.push({
        name: fakerEN.person.fullName(),
        createdAt: Date.now(),
      })
    }
  }

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

  createFakeCustomers()

  return { getCustomers, addCustomer, updateCustomer, deleteCustomer }
})
