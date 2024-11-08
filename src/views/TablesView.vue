<script lang="ts" setup>
const tables = [1, 2, 3, 4, 5, 6]
</script>

<template>
  <main class="tables">
    <div class="top-content">
      <button class="button__add-new" type="button">Add a table</button>
    </div>
    <div class="tables__list">
      <div
        v-for="(table, index) in tables"
        :key="index"
        :class="['tables__table', index % 2 === 0 ? 'table-occupied' : 'table-free']"
      >
        <h2 class="tables__table__number">Table N°{{ index + 1 }}</h2>
        <p>{{ index % 2 === 0 ? 'Occupied' : 'Free' }}</p>
      </div>
    </div>
  </main>
</template>
