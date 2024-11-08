<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <RouterLink :class="['header__links', { active: $route.path === '/' }]" to="/">
        <template #default>Orders</template>
      </RouterLink>
      <RouterLink :class="['header__links', { active: $route.path === '/tables' }]" to="/tables">
        <template #default>Tables</template>
      </RouterLink>
      <RouterLink
        :class="['header__links', { active: $route.path === '/customers' }]"
        to="/customers"
      >
        <template #default>Customers</template>
      </RouterLink>
      <RouterLink
        :class="['header__links', { active: $route.path === '/transactions' }]"
        to="/transactions"
      >
        <template #default>Transactions</template>
      </RouterLink>
    </nav>
  </header>
</template>
