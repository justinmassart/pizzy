<script lang="ts" setup>
import { computed, ref } from 'vue'
import CustomerModal from '@/components/modals/CustomerModal.vue'
import { useCustomerStore } from '@/stores/customerStore'
import type { Customer } from '@/types/customer'

const customerStore = useCustomerStore()
const customers = ref(customerStore.getCustomers())
const currentPage = ref(1)
const itemsPerPage: number = 9
const selectedCustomer = ref<Customer | undefined>(undefined)

const paginatedCustomers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return customers.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(customers.value.length / itemsPerPage)
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function openCustomerModal(customer: Customer) {
  if (!customer) {
    return
  }
  selectedCustomer.value = customer
}

function reloadCustomers() {
  customers.value = customerStore.getCustomers()
}

function unselectCustomer() {
  selectedCustomer.value = undefined
}
</script>

<template>
  <main class="customers">
    <div class="top-content">
      <div class="filters">
        <div class="filters__field">
          <label for="name">Customer name :</label>
          <input id="name" type="text" />
        </div>
        <div class="filters__field">
          <label for="sort">Sort by :</label>
          <select id="sort" name="sort">
            <option selected value="createdAt">Created at</option>
            <option value="name">Name</option>
          </select>
          <button>ASC</button>
        </div>
      </div>
      <CustomerModal
        :selectedCustomer
        @customerUpdated="reloadCustomers"
        @unselectCustomer="unselectCustomer"
      />
    </div>
    <div class="customers__list large-list">
      <div
        v-for="(customer, index) in paginatedCustomers"
        :key="index"
        class="customers__list__item customer base-list-item"
        @click="openCustomerModal(customer)"
      >
        <p class="customer__name">{{ customer.name }}</p>
      </div>
    </div>
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
        Next
      </button>
    </div>
  </main>
</template>
