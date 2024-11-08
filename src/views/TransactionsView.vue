<script lang="ts" setup>
import { computed, ref } from 'vue'

const transactions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const currentPage = ref(1)
const itemsPerPage = 10

const paginatedTransactions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return transactions.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(transactions.length / itemsPerPage)
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<!-- TODO: Look for TransitionGroup to animate filters and page change -->

<template>
  <main>
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
    </div>
    <div class="transactions">
      <div class="transactions__top">
        <p class="transactions__top__datetime">DateTime</p>
        <p class="transactions__top__customer">Customer</p>
        <p class="transactions__top__content">Content</p>
        <p class="transactions__top__amount">Amount</p>
      </div>
      <div class="transactions__list">
        <div v-for="(transaction, index) in paginatedTransactions" :key="index" class="transaction">
          <p class="transaction__datetime">12 November 2024</p>
          <p class="transaction__customer">John Doe</p>
          <div class="transaction__content">
            <div class="transaction__content__item">
              <p>Margarita</p>
              <p>1x</p>
            </div>
            <div class="transaction__content__item">
              <p>Spicy</p>
              <p>2x</p>
            </div>
          </div>
          <p class="transaction__amount">12 €</p>
        </div>
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
