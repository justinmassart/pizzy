<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Orders</RouterLink>
      <RouterLink to="/tables">Tables</RouterLink>
      <RouterLink to="/customers">Customers</RouterLink>
      <RouterLink to="/transactions">Transactions</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
