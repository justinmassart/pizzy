<script lang="ts" setup>
import { computed, ref } from 'vue'
import CustomerModal from '@/components/modals/CustomerModal.vue'
import { useCustomerStore } from '@/stores/customerStore'
import type { Customer } from '@/types/customer'

const customerStore = useCustomerStore()
const customers = ref(customerStore.getCustomers())
const currentPage = ref<number>(1)
const itemsPerPage: number = 9
const selectedCustomer = ref<Customer | undefined>(undefined)
const searchTerm = ref<string>('')
const orderLogic = ref<string>('createdAt')
const orderWay = ref<'ASC' | 'DESC'>('ASC')

const filteredCustomers = computed(() => {
  const filtered = customers.value.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.value.toLowerCase()),
  )

  if (orderLogic.value === 'name') {
    filtered.sort((a, b) =>
      orderWay.value === 'ASC' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    )
  } else if (orderLogic.value === 'createdAt') {
    filtered.sort((a, b) =>
      orderWay.value === 'ASC' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt,
    )
  }

  return filtered
})

const paginatedCustomers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredCustomers.value.slice(start, end)
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

function changeOrderWay() {
  if (orderWay.value === 'ASC') {
    orderWay.value = 'DESC'
  } else {
    orderWay.value = 'ASC'
  }
}
</script>

<template>
  <main class="customers">
    <div class="top-content">
      <div class="filters">
        <div class="filters__field">
          <label for="name">Customer name :</label>
          <input id="name" v-model="searchTerm" type="text" />
        </div>
        <div class="filters__field">
          <label for="sort">Sort by :</label>
          <select id="sort" v-model="orderLogic" name="sort">
            <option selected value="createdAt">Created at</option>
            <option value="name">Name</option>
          </select>
          <button @click="changeOrderWay">
            {{ orderWay }}
          </button>
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
