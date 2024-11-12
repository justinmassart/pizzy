<script lang="ts" setup>
import { computed, ref } from 'vue'
import CustomerModal from '@/components/modals/CustomerModal.vue'

const customers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const currentPage = ref(1)
const itemsPerPage = 9

const paginatedCustomers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return customers.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(customers.length / itemsPerPage)
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
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
      <CustomerModal />
    </div>
    <div class="customers__list large-list">
      <div
        v-for="(customer, index) in paginatedCustomers"
        :key="index"
        class="customers__list__item customer base-list-item"
      >
        <p class="customer__name">John Doe</p>
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
